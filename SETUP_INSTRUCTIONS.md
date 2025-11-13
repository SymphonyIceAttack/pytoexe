# PY to EXE Converter Setup Instructions

This guide will help you set up the Python to EXE converter with GitHub Actions.

## Prerequisites

- A GitHub account
- Two GitHub repositories (public or private): one for the web interface and one for processing

## Setup Steps

### 1. Create Two GitHub Repositories

This application uses a **two-repository architecture** for better separation of concerns:

1. **Web Interface Repository** (e.g., `pytoexe`)
   - Contains the Next.js web application
   - Handles file uploads via GitHub API
   - Displays conversion status and results
   - You're currently in this repository

2. **Processing Repository** (e.g., `pytoexe-use`)
   - Contains the GitHub Actions workflow
   - Processes Python files with PyInstaller
   - Stores uploaded files and generates executables
   - Create this repository now if you haven't already

**Why two repositories?**
- Keeps conversion process isolated from web app
- Easier to manage and scale
- Better security (processing happens in separate repo)

### 2. Setup the Processing Repository

In your **processing repository** (e.g., `pytoexe-use`):

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `pytoexe-use`
3. Initialize with a README (optional)
4. Make sure it's set to **public** or **private** (both work)

### 3. Add the GitHub Actions Workflow

1. In your processing repository, create the following directory structure:
   \`\`\`
   .github/
   └── workflows/
       └── convert.yml
   \`\`\`

2. Create a workflow file with the following content:

\`\`\`yaml
name: Convert Python to EXE

on:
  push:
    paths:
      - 'python-files/**/*.py'
  workflow_dispatch:

permissions:
  contents: write
  actions: read

jobs:
  convert:
    runs-on: windows-latest
    if: github.event_name == 'push' || github.event_name == 'workflow_dispatch'
    concurrency:
      group: convert-${{ github.sha }}
      cancel-in-progress: false
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          persist-credentials: true
          fetch-depth: 0

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install PyInstaller
        run: pip install pyinstaller

      - name: Get changed files
        id: changed-files
        uses: tj-actions/changed-files@v41
        with:
          files: python-files/**/*.py

      - name: Convert Python files to EXE
        run: |
          $files = "${{ steps.changed-files.outputs.all_changed_files }}" -split ' '
          foreach ($file in $files) {
            if ($file -match '\.py$') {
              Write-Host "Converting $file to EXE..."
              $basename = [System.IO.Path]::GetFileNameWithoutExtension($file)
              pyinstaller --onefile --distpath exe-files --name $basename $file
              Write-Host "Conversion completed: $basename.exe"
            }
          }

      - name: Add timestamp to EXE files
        run: |
          $timestamp = Get-Date -Format "yyyyMMddHHmmss"
          Get-ChildItem exe-files -Filter *.exe | ForEach-Object {
            $newName = "$($_.BaseName)_$timestamp.txt"
            Set-Content -Path "exe-files/$newName" -Value $timestamp
          }

      - name: Commit EXE files with retry
        if: steps.changed-files.outputs.all_changed_files != ''
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          
          # Retry up to 3 times with pull before push
          $maxRetries = 3
          $retryCount = 0
          $success = $false
          
          while (-not $success -and $retryCount -lt $maxRetries) {
            try {
              # Pull latest changes to avoid conflicts
              git pull --rebase origin main
              
              # Add and commit EXE files and timestamps
              git add exe-files/
              
              # Only commit if there are changes
              if (git diff --staged --quiet) {
                Write-Host "No new files to commit"
                $success = $true
                break
              }
              
              git commit -m "Add converted EXE files [skip ci]"
              git push
              $success = $true
              Write-Host "Successfully committed EXE files"
            }
            catch {
              $retryCount++
              Write-Host "Commit failed, retry $retryCount of $maxRetries"
              Start-Sleep -Seconds 2
              
              if ($retryCount -eq $maxRetries) {
                Write-Host "Failed to commit after $maxRetries retries"
                throw
              }
            }
          }
      
      - name: Clean up old Python files
        run: |
          git pull origin main
          Remove-Item python-files/*.py -Force -ErrorAction SilentlyContinue
          git add python-files/
          if (-not (git diff --staged --quiet)) {
            git commit -m "Clean up Python files [skip ci]"
            git push
          }

      - name: Trigger cleanup after 10 minutes
        run: |
          Start-Sleep -Seconds 600
          
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git pull origin main
          
          # Get current timestamp
          $currentTime = Get-Date
          
          # Find and delete EXE files older than 10 minutes based on timestamp files
          Get-ChildItem exe-files -Filter *.txt | ForEach-Object {
            $timestamp = Get-Content $_.FullName
            $fileTime = [DateTime]::ParseExact($timestamp, "yyyyMMddHHmmss", $null)
            $age = ($currentTime - $fileTime).TotalMinutes
            
            if ($age -gt 10) {
              $baseName = $_.BaseName -replace '_\d{14}$', ''
              $exeFile = "exe-files/$baseName.exe"
              
              if (Test-Path $exeFile) {
                Remove-Item $exeFile -Force
                Write-Host "Deleted old EXE: $exeFile"
              }
              
              Remove-Item $_.FullName -Force
              Write-Host "Deleted timestamp file: $($_.Name)"
            }
          }
          
          # Commit cleanup
          git add exe-files/
          if (-not (git diff --staged --quiet)) {
            git commit -m "Clean up old EXE files [skip ci]"
            git push
          }
\`\`\`

### 4. Create Required Directories

Create these directories in your processing repository:
- `python-files/` - Where uploaded Python files will go
- `exe-files/` - Where converted EXE files will be stored temporarily

You can create them by adding a `.gitkeep` file:

\`\`\`bash
mkdir python-files exe-files
touch python-files/.gitkeep exe-files/.gitkeep
git add python-files/.gitkeep exe-files/.gitkeep
git commit -m "Add required directories"
git push
\`\`\`

### 5. Generate a GitHub Personal Access Token

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a descriptive name like "PyToExe Converter"
4. Set expiration (recommend: 90 days or longer)
5. Select the following scopes:
   - ✅ **repo** (Full control of private repositories)
   - ✅ **workflow** (Update GitHub Action workflows)
6. Click "Generate token"
7. **Copy the token immediately** (you won't be able to see it again!)

### 6. Configure Environment Variables

In your v0 project, add these environment variables in the **Vars** section:

1. `GITHUB_TOKEN` - Your personal access token from step 5
2. `NEXT_PUBLIC_GITHUB_OWNER` - Your GitHub username (e.g., "SymphonyIceAttack")
3. `NEXT_PUBLIC_GITHUB_REPO` - Your **processing repository** name (e.g., "pytoexe-use") **NOT the web interface repo**

**Important:** 
- `GITHUB_REPO` should point to your **processing repository** where the GitHub Actions workflow is located
- Make sure the token has the correct permissions and both repositories exist

### 7. Test the Setup

1. Upload a simple Python file through the web interface
2. Check your GitHub repository's Actions tab
3. You should see a workflow run starting automatically
4. Once complete, the EXE will be available as an artifact

## Troubleshooting

### Workflow doesn't start automatically

- Make sure the workflow file is in `.github/workflows/convert.yml`
- Check that Actions are enabled in your repository settings
- Verify the `python-files/` directory exists

### Permission errors

- Ensure your GitHub token has `repo` and `workflow` scopes
- Check that the repository name and owner are correct
- For private repos, make sure the token has access

### Workflow fails

- Check the Actions tab in GitHub for error details
- Make sure the Python file is valid and has no syntax errors
- Verify PyInstaller can handle your Python script's dependencies

## Repository Structure

### Web Interface Repository (pytoexe)
\`\`\`
pytoexe/
├── app/
│   ├── page.tsx
│   ├── actions.ts
│   └── layout.tsx
├── components/
├── README.md
└── SETUP_INSTRUCTIONS.md
\`\`\`

### Processing Repository (pytoexe-use)
\`\`\`
pytoexe-use/
├── .github/
│   └── workflows/
│       └── convert.yml
├── python-files/
│   └── .gitkeep
├── exe-files/
│   └── .gitkeep
└── README.md
\`\`\`

## Security Notes

- Never commit your GitHub token to a repository
- Store tokens securely in environment variables
- Python files are automatically deleted after conversion
- **EXE files are automatically deleted after 10 minutes** to save storage space

## Next Steps

Once setup is complete:
1. Upload Python files through the web interface
2. Monitor conversion progress in GitHub Actions
3. Download converted EXE files from the repository

For issues or questions, check the GitHub Actions logs in your repository.

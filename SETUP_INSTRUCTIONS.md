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
  schedule:
    - cron: '*/10 * * * *'

permissions:
  contents: write
  actions: read

jobs:
  convert:
    runs-on: windows-latest
    if: github.event_name == 'push'
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          persist-credentials: true

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

      - name: Commit EXE files
        if: steps.changed-files.outputs.all_changed_files != ''
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add exe-files/*.exe
          git commit -m "Add converted EXE files" || echo "No new files to commit"
          git push

      - name: Clean up Python files
        if: steps.changed-files.outputs.all_changed_files != ''
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          $files = "${{ steps.changed-files.outputs.all_changed_files }}" -split ' '
          foreach ($file in $files) {
            if (Test-Path $file) {
              git rm $file
            }
          }
          if (git diff --staged --quiet) {
            Write-Host "No files to clean up"
          } else {
            git commit -m "Clean up converted Python files"
            git push
          }

  cleanup:
    runs-on: ubuntu-latest
    if: github.event_name == 'schedule'
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          persist-credentials: true

      - name: Delete old EXE files (older than 10 minutes)
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          
          # Find and delete EXE files older than 10 minutes
          find exe-files -name "*.exe" -type f -mmin +10 -delete
          
          # Commit the changes if any files were deleted
          git add -A
          if ! git diff --staged --quiet; then
            git commit -m "Clean up EXE files older than 10 minutes"
            git push
          else
            echo "No old files to clean up"
          fi
      
      - name: Clean up old Python files in python-files (older than 10 minutes)
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          
          # Find and delete Python files older than 10 minutes (keep the folder)
          find python-files -name "*.py" -type f -mmin +10 -delete
          
          # Commit the changes if any files were deleted
          git add -A
          if ! git diff --staged --quiet; then
            git commit -m "Clean up Python files older than 10 minutes"
            git push
          else
            echo "No old Python files to clean up"
          fi
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

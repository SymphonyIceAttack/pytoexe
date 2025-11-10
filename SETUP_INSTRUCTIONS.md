# PY to EXE Converter Setup Instructions

This guide will help you set up the Python to EXE converter with GitHub Actions.

## Prerequisites

- A GitHub account
- A GitHub repository (public or private)

## Setup Steps

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `pytoexe` or `python-converter`
3. Initialize with a README (optional)
4. Make sure it's set to **public** or **private** (both work)

### 2. Add the GitHub Actions Workflow

1. In your repository, create the following directory structure:
   \`\`\`
   .github/
   └── workflows/
       └── convert.yml
   \`\`\`

2. Create your own workflow configuration file that will:
   - Trigger automatically when a `.py` file is pushed to `python-files/` directory
   - Convert the Python file to an EXE using PyInstaller
   - Upload the EXE as an artifact
   - Clean up the original Python file after processing

Example workflow structure:
\`\`\`yaml
name: Convert Python to EXE
on:
  push:
    paths:
      - 'python-files/**/*.py'
jobs:
  convert:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
      - name: Install PyInstaller
        run: pip install pyinstaller
      - name: Convert to EXE
        run: pyinstaller --onefile your-script.py
      - uses: actions/upload-artifact@v4
        with:
          name: converted-exe
          path: dist/*.exe
\`\`\`

3. The workflow will:
   - Trigger automatically when a `.py` file is pushed to `python-files/` directory
   - Convert the Python file to an EXE using PyInstaller
   - Upload the EXE as an artifact
   - Clean up the original Python file after processing

### 3. Create Required Directories

Create these empty directories in your repository:
- `python-files/` - Where uploaded Python files will go
- `exe-files/` - Temporary directory for converted files (optional)

You can create them by adding a `.gitkeep` file:

\`\`\`bash
mkdir python-files
touch python-files/.gitkeep
git add python-files/.gitkeep
git commit -m "Add python-files directory"
git push
\`\`\`

### 4. Generate a GitHub Personal Access Token

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a descriptive name like "PyToExe Converter"
4. Set expiration (recommend: 90 days or longer)
5. Select the following scopes:
   - ✅ **repo** (Full control of private repositories)
   - ✅ **workflow** (Update GitHub Action workflows)
6. Click "Generate token"
7. **Copy the token immediately** (you won't be able to see it again!)

### 5. Configure Environment Variables

In your v0 project, add these environment variables in the **Vars** section:

1. `GITHUB_TOKEN` - Your personal access token from step 4
2. `GITHUB_OWNER` - Your GitHub username (e.g., "SymphonyIceAttack")
3. `GITHUB_REPO` - Your repository name (e.g., "pytoexe")

**Important:** Make sure the token has the correct permissions and the repository exists!

### 6. Test the Setup

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

\`\`\`
your-repo/
├── .github/
│   └── workflows/
│       └── convert.yml
├── python-files/
│   └── .gitkeep
├── README.md
└── SETUP_INSTRUCTIONS.md
\`\`\`

## Security Notes

- Never commit your GitHub token to a repository
- Store tokens securely in environment variables
- Python files are automatically deleted after conversion
- Artifacts are retained for 7 days by default

## Next Steps

Once setup is complete:
1. Upload Python files through the web interface
2. Monitor conversion progress in GitHub Actions
3. Download converted EXE files from the Actions artifacts

For issues or questions, check the GitHub Actions logs in your repository.

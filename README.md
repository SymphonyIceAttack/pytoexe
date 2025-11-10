# PY to EXE Online Converter

Convert Python files to Windows executable files online using GitHub Actions.

## Features

- 🚀 Free and open source
- 🔒 Secure conversion process
- ⚡ Fast conversion using GitHub Actions
- 📦 No installation required
- 🎯 Simple drag-and-drop interface
- 🧹 Automatic cleanup of source files

## How It Works

1. **Upload** - Drag and drop your `.py` file or click to select
2. **Convert** - GitHub Actions automatically processes your file with PyInstaller
3. **Download** - Get your `.exe` file from GitHub Actions artifacts

## Setup

This project requires a GitHub repository with Actions enabled. See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed setup steps.

### Quick Setup

1. Create a GitHub repository
2. Add the workflow file from `.github/workflows/convert.yml`
3. Create a GitHub personal access token with `repo` and `workflow` scopes
4. Configure environment variables:
   - `GITHUB_TOKEN` - Your personal access token
   - `GITHUB_OWNER` - Your GitHub username
   - `GITHUB_REPO` - Your repository name

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GITHUB_TOKEN` | Personal access token | `ghp_xxxxxxxxxxxx` |
| `GITHUB_OWNER` | GitHub username | `SymphonyIceAttack` |
| `GITHUB_REPO` | Repository name | `pytoexe` |

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: GitHub Actions, PyInstaller
- **Deployment**: Vercel

## Security

- All Python files are processed in GitHub Actions (isolated environment)
- Source files are automatically deleted after conversion
- No files are stored permanently on our servers
- Open source - you can review all code

## License

MIT License - feel free to use and modify

## Support

For issues or questions:
- Check the [Setup Instructions](./SETUP_INSTRUCTIONS.md)
- Review GitHub Actions logs in your repository
- Open an issue on GitHub

---

**Powered by GitHub Actions and Vercel**

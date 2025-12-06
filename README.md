<div align="center">

![PY to EXE Converter Logo](public/logo.png)

# PY to EXE Online Converter

**Convert Python files to Windows executable files online using GitHub Actions**

[Website](https://pytoexe.top/) • [GitHub](https://github.com/SymphonyIceAttack/pytoexe) • [Issues](https://github.com/SymphonyIceAttack/pytoexe/issues)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/SymphonyIceAttack/pytoexe.svg?style=social&label=Star)](https://github.com/SymphonyIceAttack/pytoexe)
[![GitHub forks](https://img.shields.io/github/forks/SymphonyIceAttack/pytoexe.svg?style=social&label=Fork)](https://github.com/SymphonyIceAttack/pytoexe/fork)
[![Website](https://img.shields.io/badge/Website-https://pytoexe.top-blue)](https://pytoexe.top/)

</div>

---

## 🎯 Overview

**PY to EXE** is a free, open-source online tool that converts Python (.py) files to executable (.exe) files. No installation required - simply upload your Python script through our web interface and download the converted executable file.

Our service is perfect for developers who want to distribute their Python applications to users who don't have Python installed. The generated executable files work on Windows without requiring any additional dependencies.

## ✨ Features

- 🚀 **Free and open source** - No registration required
- 🔒 **Secure conversion process** - Files processed in isolated GitHub Actions
- ⚡ **Fast conversion** - Typically completes in 1-2 minutes
- 📦 **No installation required** - Works entirely in your browser
- 🎯 **Simple drag-and-drop interface** - Easy to use for everyone
- 🌍 **Multi-language support** - English, Japanese, Russian, Chinese, French, Spanish, German
- 🧹 **Automatic cleanup** - Source files deleted after conversion
- 📱 **Responsive design** - Works on desktop and mobile

## 🏗️ Architecture

This project uses a **two-repository architecture**:

### Web Interface Repository ([pytoexe](https://github.com/SymphonyIceAttack/pytoexe))
- Next.js 16 web application with React 19 and TypeScript
- Handles file uploads and status tracking
- Beautiful, responsive user interface
- Multi-language internationalization
- GitHub API integration

### Processing Repository ([pytoexe-use](https://github.com/SymphonyIceAttack/pytoexe-use))
- GitHub Actions workflow for automated processing
- PyInstaller-based conversion system
- Secure file handling and artifact management
- Automatic cleanup after processing

## 🚀 How It Works

### The Process

1. **Upload** - Drag and drop your `.py` file or click to select
2. **Process** - GitHub Actions automatically runs PyInstaller in a secure environment
3. **Download** - Get your `.exe` file from GitHub Actions artifacts
4. **Cleanup** - Source files are automatically deleted for security

### Technical Flow

1. User uploads a `.py` file through the web interface
2. Web app uploads the file to the processing repository via GitHub API
3. GitHub Actions workflow automatically triggers
4. PyInstaller converts the Python file to a standalone executable
5. Converted file is available as a downloadable artifact
6. Original Python file is automatically deleted from the processing repository

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS |
| **Backend Processing** | GitHub Actions, PyInstaller |
| **Deployment** | Vercel |
| **Languages** | TypeScript, Python |
| **UI Components** | Radix UI, Lucide Icons |
| **Styling** | Tailwind CSS, CSS Variables |
| **Internationalization** | Custom i18n system |

## 🧪 Live Demo

Visit our live demo at **[https://pytoexe.top/](https://pytoexe.top/)**

## 🔧 Setup for Developers

This project requires a GitHub repository with Actions enabled. See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed setup steps.

### Quick Setup

1. Create a GitHub repository
2. Add your own GitHub Actions workflow file at `.github/workflows/convert.yml` with PyInstaller
3. Create a GitHub personal access token with `repo` and `workflow` scopes
4. Configure environment variables:
   - `GITHUB_TOKEN` - Your personal access token
   - `GITHUB_OWNER` - Your GitHub username
   - `GITHUB_REPO` - Your **processing repository** name

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GITHUB_TOKEN` | Personal access token with `repo` and `workflow` scopes | `ghp_xxxxxxxxxxxx` |
| `GITHUB_OWNER` | Your GitHub username | `SymphonyIceAttack` |
| `GITHUB_REPO` | **Processing repository** name | `pytoexe-use` |

> **Important:** `GITHUB_REPO` should be your processing repository (e.g., `pytoexe-use`), not the web interface repository.

## 🔒 Security & Privacy

- **Isolated Processing**: All Python files are processed in GitHub Actions (completely isolated environment)
- **Automatic Cleanup**: Source files are automatically deleted after conversion
- **No Permanent Storage**: No files are stored permanently on our servers
- **Open Source**: You can review all code in both repositories
- **Transparent Process**: Entire conversion process is visible and auditable

## 📋 Requirements & Limitations

### Supported Python Versions
- All major Python versions (3.7+)
- Compatible with modern Python syntax and features

### File Size Limits
- GitHub has a 100MB file size limit per file
- For most Python scripts, this is more than sufficient
- If your project has large dependencies, consider optimizing your code

### Current Limitations
- Currently supports single `.py` file conversion
- For multi-file projects, ensure all dependencies are properly packaged
- Windows executable output only

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Setup

```bash
# Clone the repository
git clone https://github.com/SymphonyIceAttack/pytoexe.git
cd pytoexe

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Format code
npm run format
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌍 Internationalization

This project supports multiple languages:

- 🇺🇸 English (en)
- 🇯🇵 Japanese (ja)
- 🇷🇺 Russian (ru)
- 🇨🇳 Chinese (zh)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇩🇪 German (de)

To add a new language, please see our [internationalization guide](docs/i18n.md).

## 📞 Support

For issues, questions, or contributions:

- **Website**: [https://pytoexe.top/](https://pytoexe.top/)
- **Issues**: [GitHub Issues](https://github.com/SymphonyIceAttack/pytoexe/issues)
- **Discussions**: [GitHub Discussions](https://github.com/SymphonyIceAttack/pytoexe/discussions)
- **Setup Guide**: [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)

## 🙏 Acknowledgments

- **PyInstaller** - The amazing tool that makes Python to EXE conversion possible
- **GitHub Actions** - For providing secure, scalable processing infrastructure
- **Vercel** - For excellent hosting and deployment platform
- **Open Source Community** - For the incredible tools and libraries that make this project possible

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/SymphonyIceAttack/pytoexe)
![GitHub forks](https://img.shields.io/github/forks/SymphonyIceAttack/pytoexe)
![GitHub issues](https://img.shields.io/github/issues/SymphonyIceAttack/pytoexe)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SymphonyIceAttack/pytoexe)
![License](https://img.shields.io/github/license/SymphonyIceAttack/pytoexe)

---

<div align="center">

**Made with ❤️ by [SymphonyIceAttack](https://github.com/SymphonyIceAttack)**

[Website](https://pytoexe.top/) | [GitHub](https://github.com/SymphonyIceAttack/pytoexe) | [Issues](https://github.com/SymphonyIceAttack/pytoexe/issues)

</div>
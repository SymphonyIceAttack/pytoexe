/**
 * English translations
 */
export const en = {
  title: "Python to EXE Converter",
  subtitle: "Online Tool",
  heading: "PY to EXE",
  subheading: "Online Converter",
  verifyingAccess: "Verifying GitHub repository access...",
  configRequired: "Configuration Required",
  requiredSetup: "Required setup:",
  githubToken: "Personal access token with repo and workflow scopes",
  githubOwner: "Your GitHub username",
  githubRepo: "Repository name with GitHub Actions workflow",
  stepsToFix: "Steps to fix:",
  createToken: "Create a GitHub token at",
  enableScopes: "Enable repo and workflow scopes",
  addVars: "Add all three environment variables in the Vars section →",
  uploadPrompt: "Click to upload",
  orDragDrop: "or drag and drop",
  pythonFile: "Python file (.py)",
  selectFile: "Select File",
  securityNotice: "PY files will be removed from repo after process.",
  uploadToGithub: "Upload to GitHub",
  uploading: "Uploading...",
  converting: "Converting...",
  workflowId: "Workflow ID:",
  uploadingFile: "Uploading file to GitHub...",
  convertingFile: "Converting Python file to executable...",
  file: "File:",
  download: "Download",
  exeFile: "EXE File",
  viewOnGithub: "View on GitHub Actions",
  securityInfo: "Security Information",
  securityDesc:
    "For users concerned about security, you can review our source code in both repositories:",
  webInterface: "Web Interface Repository (pytoexe)",
  processingRepo: "Python-to-EXE Processing Repository (pytoexe-use)",
  mainHeading: "Convert Python to EXE Online - Free and Easy",
  mainDesc1:
    "PY to EXE is a free online tool that converts Python (.py) files to executable (.exe) files. No installation required - just upload your Python script and download the executable file.",
  mainDesc2:
    "Our online Python to EXE converter is perfect for developers who want to distribute their Python applications to users who don't have Python installed. The generated executable files work on Windows without requiring any additional dependencies.",
  mainDesc3:
    "Simply upload your Python file, wait for the conversion process to complete, and download your executable file. It's that easy!",
  featuresHeading: "Features of our Python to EXE Converter",
  features: [
    "Free to use - no registration required",
    "Secure conversion process",
    "Works with all Python versions",
    "Fast conversion time",
    "No installation needed - works in your browser",
    "Creates standalone executable files",
    "Open source - code available for review",
  ],
  footerDesc:
    "Your Python files will be uploaded to the pytoexe-use repository where they will be processed by GitHub Actions to create executable files. After conversion, the original Python files are automatically deleted.",
  preparingDownload: "Preparing Download...",
  faqHeading: "Frequently Asked Questions",
  faq: [
    {
      question: "How does the conversion work?",
      answer:
        "When you upload a Python file, it's sent to a GitHub repository where GitHub Actions runs PyInstaller to convert your .py file into a standalone .exe file. The process is fully automated and typically takes 1-2 minutes.",
    },
    {
      question: "Is my code secure?",
      answer:
        "Yes! Your Python files are temporarily stored in a GitHub repository and are automatically deleted after conversion. The entire process is open source - you can review the code in both the web interface and processing repositories.",
    },
    {
      question: "What Python versions are supported?",
      answer:
        "Our converter supports all major Python versions (3.7+). The conversion process uses the latest stable version of PyInstaller, which is compatible with modern Python code.",
    },
    {
      question: "Will the .exe work on any Windows computer?",
      answer:
        "Yes! The generated executable files are standalone and include all necessary dependencies. They will work on any Windows computer without requiring Python to be installed.",
    },
    {
      question: "Are there any file size limitations?",
      answer:
        "GitHub has a file size limit of 100MB per file. For most Python scripts, this is more than sufficient. If your project has large dependencies, consider optimizing your code or splitting it into multiple files.",
    },
    {
      question: "Can I convert Python projects with multiple files?",
      answer:
        "Currently, the tool supports single .py file conversion. For multi-file projects, you'll need to ensure all dependencies are properly packaged or use a requirements.txt file in your GitHub workflow configuration.",
    },
  ],
} as const;

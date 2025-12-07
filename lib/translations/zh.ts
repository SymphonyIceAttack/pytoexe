/**
 * Chinese translations
 */
export const zh = {
  title: "Python 转 EXE 转换器",
  subtitle: "在线工具",
  heading: "PY 转 EXE",
  subheading: "在线转换器",
  verifyingAccess: "正在验证 GitHub 仓库访问权限...",
  configRequired: "需要配置",
  requiredSetup: "所需配置:",
  githubToken: "具有仓库和工作流程权限的个人访问令牌",
  githubOwner: "您的 GitHub 用户名",
  githubRepo: "具有 GitHub Actions 工作流程的仓库名称",
  stepsToFix: "修复步骤:",
  createToken: "在以下位置创建 GitHub 令牌",
  enableScopes: "启用仓库和工作流程权限",
  addVars: "在 Vars 部分添加所有三个环境变量 →",
  uploadPrompt: "点击上传",
  orDragDrop: "或拖拽放置",
  pythonFile: "Python 文件 (.py)",
  selectFile: "选择文件",
  securityNotice: "处理后 PY 文件将从仓库中删除。",
  uploadToGithub: "上传到 GitHub",
  uploading: "上传中...",
  converting: "转换中...",
  workflowId: "工作流程 ID:",
  uploadingFile: "正在将文件上传到 GitHub...",
  convertingFile: "正在将 Python 文件转换为可执行文件...",
  file: "文件:",
  download: "下载",
  exeFile: "EXE 文件",
  viewOnGithub: "在 GitHub Actions 中查看",
  securityInfo: "安全信息",
  securityDesc: "对于关心安全的用户，您可以在两个仓库中查看我们的源代码:",
  webInterface: "Web 界面仓库 (pytoexe)",
  processingRepo: "Python-to-EXE 处理仓库 (pytoexe-use)",
  mainHeading: "Python 转 EXE 在线转换 - 免费且简单",
  mainDesc1:
    "PY 转 EXE 是一个免费的在线工具，可将 Python (.py) 文件转换为可执行 (.exe) 文件。无需安装 - 只需上传您的 Python 脚本并下载可执行文件。",
  mainDesc2:
    "我们的在线 Python 转 EXE 转换器非常适合想要将 Python 应用程序分发给未安装 Python 的用户的开发人员。生成的可执行文件在 Windows 上运行，无需任何额外的依赖项。",
  mainDesc3:
    "只需上传您的 Python 文件，等待转换过程完成，然后下载您的可执行文件。就是这么简单！",
  featuresHeading: "我们的 Python 转 EXE 转换器的功能",
  features: [
    "免费使用 - 无需注册",
    "安全的转换过程",
    "适用于所有 Python 版本",
    "快速转换",
    "无需安装 - 在浏览器中运行",
    "创建独立可执行文件",
    "开源 - 代码可供审查",
  ],
  footerDesc:
    "您的 Python 文件将被上传到 pytoexe-use 仓库，在那里由 GitHub Actions 处理以创建可执行文件。转换后，原始 Python 文件将被自动删除。",
  preparingDownload: "准备下载中...",
  faqHeading: "常见问题",
  faq: [
    {
      question: "转换是如何工作的？",
      answer:
        "当您上传 Python 文件时，它会被发送到 GitHub 仓库，在那里 GitHub Actions 运行 PyInstaller 将您的 .py 文件转换为独立的 .exe 文件。过程完全自动化，通常需要 1-2 分钟。",
    },
    {
      question: "我的代码安全吗？",
      answer:
        "是的！您的 Python 文件临时存储在 GitHub 仓库中，转换后会自动删除。整个过程是开源的 - 您可以在 Web 界面和处理仓库中查看代码。",
    },
    {
      question: "支持哪些 Python 版本？",
      answer:
        "我们的转换器支持所有主要 Python 版本（3.7+）。转换过程使用最新稳定版本的 PyInstaller，与现代 Python 代码兼容。",
    },
    {
      question: ".exe 能在任何 Windows 计算机上运行吗？",
      answer:
        "是的！生成的可执行文件是独立的，包含所有必要的依赖项。它们将在任何 Windows 计算机上运行，无需安装 Python。",
    },
    {
      question: "有文件大小限制吗？",
      answer:
        "GitHub 对每个文件有 100MB 的文件大小限制。对于大多数 Python 脚本来说，这绰绰有余。如果您的项目有大型依赖项，请考虑优化代码或将其拆分为多个文件。",
    },
    {
      question: "我可以转换多文件的 Python 项目吗？",
      answer:
        "目前，该工具支持单 .py 文件转换。对于多文件项目，您需要确保所有依赖项都正确打包，或在 GitHub 工作流程配置中使用 requirements.txt 文件。",
    },
  ],
} as const;

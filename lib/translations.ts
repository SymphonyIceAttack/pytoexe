import type { LanguageType } from "./translation";

export type Locale = LanguageType;

export const translations = {
  en: {
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
  },
  ja: {
    title: "Python to EXE 変換ツール",
    subtitle: "オンラインツール",
    heading: "PY to EXE",
    subheading: "オンライン変換ツール",
    verifyingAccess: "GitHubリポジトリへのアクセスを確認中...",
    configRequired: "設定が必要です",
    requiredSetup: "必要な設定:",
    githubToken: "repoとworkflowスコープを持つ個人アクセストークン",
    githubOwner: "あなたのGitHubユーザー名",
    githubRepo: "GitHub Actionsワークフローを持つリポジトリ名",
    stepsToFix: "修正手順:",
    createToken: "GitHubトークンを作成",
    enableScopes: "repoとworkflowスコープを有効化",
    addVars: "3つの環境変数をVarsセクションに追加 →",
    uploadPrompt: "クリックしてアップロード",
    orDragDrop: "またはドラッグ＆ドロップ",
    pythonFile: "Pythonファイル (.py)",
    selectFile: "ファイルを選択",
    securityNotice: "PYファイルは処理後にリポジトリから削除されます。",
    uploadToGithub: "GitHubにアップロード",
    uploading: "アップロード中...",
    converting: "変換中...",
    workflowId: "ワークフローID:",
    uploadingFile: "GitHubにファイルをアップロード中...",
    convertingFile: "Pythonファイルを実行可能ファイルに変換中...",
    file: "ファイル:",
    download: "ダウンロード",
    exeFile: "EXEファイル",
    viewOnGithub: "GitHub Actionsで表示",
    securityInfo: "セキュリティ情報",
    securityDesc:
      "セキュリティが気になる方は、両方のリポジトリのソースコードを確認できます:",
    webInterface: "Webインターフェースリポジトリ (pytoexe)",
    processingRepo: "Python-to-EXE処理リポジトリ (pytoexe-use)",
    mainHeading: "Python to EXE オンライン変換 - 無料で簡単",
    mainDesc1:
      "PY to EXEは、Python(.py)ファイルを実行可能(.exe)ファイルに変換する無料のオンラインツールです。インストール不要 - Pythonスクリプトをアップロードして実行可能ファイルをダウンロードするだけです。",
    mainDesc2:
      "当社のオンラインPython to EXE変換ツールは、Pythonがインストールされていないユーザーにアプリケーションを配布したい開発者に最適です。生成された実行可能ファイルは、追加の依存関係なしにWindowsで動作します。",
    mainDesc3:
      "Pythonファイルをアップロードし、変換プロセスが完了するのを待ち、実行可能ファイルをダウンロードするだけです。とても簡単です！",
    featuresHeading: "Python to EXE変換ツールの機能",
    features: [
      "無料で使用可能 - 登録不要",
      "安全な変換プロセス",
      "すべてのPythonバージョンで動作",
      "高速変換",
      "インストール不要 - ブラウザで動作",
      "スタンドアロン実行可能ファイルを作成",
      "オープンソース - コードレビュー可能",
    ],
    footerDesc:
      "Pythonファイルはpytoexe-useリポジトリにアップロードされ、GitHub Actionsによって実行可能ファイルに変換されます。変換後、元のPythonファイルは自動的に削除されます。",
    preparingDownload: "ダウンロード準備中...",
    faqHeading: "よくある質問",
    faq: [
      {
        question: "変換はどのように機能しますか？",
        answer:
          "Pythonファイルをアップロードすると、GitHubリポジトリに送信され、GitHub ActionsがPyInstallerを実行して.pyファイルをスタンドアロンの.exeファイルに変換します。プロセスは完全に自動化されており、通常1〜2分かかります。",
      },
      {
        question: "コードは安全ですか？",
        answer:
          "はい！ Pythonファイルは一時的にGitHubリポジトリに保存され、変換後に自動的に削除されます。プロセス全体がオープンソースです - Webインターフェースとプロセシングリポジトリでコードをレビューできます。",
      },
      {
        question: "どのPythonバージョンがサポートされていますか？",
        answer:
          "当社のコンバーターは、すべての主要なPythonバージョン（3.7以降）をサポートしています。変換プロセスは、最新の安定版PyInstallerを使用しており、最新のPythonコードと互換性があります。",
      },
      {
        question: ".exeはどのWindowsコンピュータでも動作しますか？",
        answer:
          "はい！生成された実行可能ファイルはスタンドアロンで、必要なすべての依存関係が含まれています。Pythonをインストールする必要なく、どのWindowsコンピュータでも動作します。",
      },
      {
        question: "ファイルサイズの制限はありますか？",
        answer:
          "GitHubにはファイルあたり100MBのファイルサイズ制限があります。ほとんどのPythonスクリプトにとって、これは十分すぎるほどです。プロジェクトに大きな依存関係がある場合は、コードを最適化するか、複数のファイルに分割することを検討してください。",
      },
      {
        question: "複数のファイルを持つPythonプロジェクトを変換できますか？",
        answer:
          "現在、このツールは単一の.pyファイル変換をサポートしています。複数ファイルプロジェクトの場合、すべての依存関係が適切にパッケージ化されているか、GitHubワークフロー設定でrequirements.txtファイルを使用する必要があります。",
      },
    ],
  },
  ru: {
    title: "Конвертер Python в EXE",
    subtitle: "Онлайн инструмент",
    heading: "PY в EXE",
    subheading: "Онлайн конвертер",
    verifyingAccess: "Проверка доступа к репозиторию GitHub...",
    configRequired: "Требуется настройка",
    requiredSetup: "Необходимая настройка:",
    githubToken: "Токен личного доступа с областями repo и workflow",
    githubOwner: "Ваше имя пользователя GitHub",
    githubRepo: "Имя репозитория с рабочим процессом GitHub Actions",
    stepsToFix: "Шаги для исправления:",
    createToken: "Создайте токен GitHub на",
    enableScopes: "Включите области repo и workflow",
    addVars: "Добавьте все три переменные окружения в разделе Vars →",
    uploadPrompt: "Нажмите для загрузки",
    orDragDrop: "или перетащите файл",
    pythonFile: "Файл Python (.py)",
    selectFile: "Выбрать файл",
    securityNotice: "PY файлы будут удалены из репозитория после обработки.",
    uploadToGithub: "Загрузить на GitHub",
    uploading: "Загрузка...",
    converting: "Конвертация...",
    workflowId: "ID рабочего процесса:",
    uploadingFile: "Загрузка файла на GitHub...",
    convertingFile: "Конвертация файла Python в исполняемый файл...",
    file: "Файл:",
    download: "Скачать",
    exeFile: "EXE файл",
    viewOnGithub: "Посмотреть на GitHub Actions",
    securityInfo: "Информация о безопасности",
    securityDesc:
      "Для пользователей, заботящихся о безопасности, вы можете просмотреть наш исходный код в обоих репозиториях:",
    webInterface: "Репозиторий веб-интерфейса (pytoexe)",
    processingRepo: "Репозиторий обработки Python-to-EXE (pytoexe-use)",
    mainHeading: "Конвертер Python в EXE онлайн - Бесплатно и просто",
    mainDesc1:
      "PY в EXE - это бесплатный онлайн-инструмент, который конвертирует файлы Python (.py) в исполняемые файлы (.exe). Установка не требуется - просто загрузите свой Python-скрипт и скачайте исполняемый файл.",
    mainDesc2:
      "Наш онлайн-конвертер Python в EXE идеально подходит для разработчиков, которые хотят распространять свои приложения на Python среди пользователей, у которых не установлен Python. Созданные исполняемые файлы работают в Windows без каких-либо дополнительных зависимостей.",
    mainDesc3:
      "Просто загрузите файл Python, дождитесь завершения процесса конвертации и скачайте исполняемый файл. Это так просто!",
    featuresHeading: "Особенности нашего конвертера Python в EXE",
    features: [
      "Бесплатно - регистрация не требуется",
      "Безопасный процесс конвертации",
      "Работает со всеми версиями Python",
      "Быстрая конвертация",
      "Установка не нужна - работает в браузере",
      "Создает автономные исполняемые файлы",
      "Открытый исходный код - доступен для проверки",
    ],
    footerDesc:
      "Ваши файлы Python будут загружены в репозиторий pytoexe-use, где они будут обработаны GitHub Actions для создания исполняемых файлов. После конвертации исходные файлы Python автоматически удаляются.",
    preparingDownload: "Подготовка загрузки...",
    faqHeading: "Часто задаваемые вопросы",
    faq: [
      {
        question: "Как работает конвертация?",
        answer:
          "Когда вы загружаете файл Python, он отправляется в репозиторий GitHub, где GitHub Actions запускает PyInstaller для преобразования вашего .py файла в автономный .exe файл. Процесс полностью автоматизирован и обычно занимает 1-2 минуты.",
      },
      {
        question: "Безопасен ли мой код?",
        answer:
          "Да! Ваши файлы Python временно хранятся в репозитории GitHub и автоматически удаляются после конвертации. Весь процесс является открытым исходным кодом - вы можете просмотреть код как в веб-интерфейсе, так и в репозиториях обработки.",
      },
      {
        question: "Какие версии Python поддерживаются?",
        answer:
          "Наш конвертер поддерживает все основные версии Python (3.7+). Процесс конвертации использует последнюю стабильную версию PyInstaller, которая совместима с современным кодом Python.",
      },
      {
        question: "Будет ли .exe работать на любом компьютере с Windows?",
        answer:
          "Да! Созданные исполняемые файлы являются автономными и включают все необходимые зависимости. Они будут работать на любом компьютере с Windows без необходимости установки Python.",
      },
      {
        question: "Есть ли ограничения на размер файла?",
        answer:
          "GitHub имеет ограничение на размер файла в 100 МБ на файл. Для большинства скриптов Python этого более чем достаточно. Если ваш проект имеет большие зависимости, рассмотрите возможность оптимизации кода или разделения его на несколько файлов.",
      },
      {
        question:
          "Могу ли я конвертировать проекты Python с несколькими файлами?",
        answer:
          "В настоящее время инструмент поддерживает конвертацию одного .py файла. Для проектов с несколькими файлами вам нужно будет убедиться, что все зависимости правильно упакованы, или использовать файл requirements.txt в конфигурации рабочего процесса GitHub.",
      },
    ],
  },
  zh: {
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
  },
  fr: {
    title: "Convertisseur Python vers EXE",
    subtitle: "Outil en ligne",
    heading: "PY vers EXE",
    subheading: "Convertisseur en ligne",
    verifyingAccess: "Vérification de l'accès au dépôt GitHub...",
    configRequired: "Configuration requise",
    requiredSetup: "Configuration nécessaire :",
    githubToken: "Jeton d'accès personnel avec les portées repo et workflow",
    githubOwner: "Votre nom d'utilisateur GitHub",
    githubRepo: "Nom du dépôt avec workflow GitHub Actions",
    stepsToFix: "Étapes pour corriger :",
    createToken: "Créer un jeton GitHub sur",
    enableScopes: "Activer les portées repo et workflow",
    addVars:
      "Ajouter les trois variables d'environnement dans la section Vars →",
    uploadPrompt: "Cliquez pour télécharger",
    orDragDrop: "ou glissez-déposez",
    pythonFile: "Fichier Python (.py)",
    selectFile: "Sélectionner un fichier",
    securityNotice:
      "Les fichiers PY seront supprimés du dépôt après traitement.",
    uploadToGithub: "Télécharger vers GitHub",
    uploading: "Téléchargement...",
    converting: "Conversion...",
    workflowId: "ID du workflow :",
    uploadingFile: "Téléchargement du fichier vers GitHub...",
    convertingFile: "Conversion du fichier Python en exécutable...",
    file: "Fichier :",
    download: "Télécharger",
    exeFile: "Fichier EXE",
    viewOnGithub: "Voir sur GitHub Actions",
    securityInfo: "Informations de sécurité",
    securityDesc:
      "Pour les utilisateurs soucieux de la sécurité, vous pouvez examiner notre code source dans les deux dépôts :",
    webInterface: "Dépôt de l'interface Web (pytoexe)",
    processingRepo: "Dépôt de traitement Python-to-EXE (pytoexe-use)",
    mainHeading: "Convertisseur Python vers EXE en ligne - Gratuit et facile",
    mainDesc1:
      "PY vers EXE est un outil en ligne gratuit qui convertit les fichiers Python (.py) en fichiers exécutables (.exe). Aucune installation requise - téléchargez simplement votre script Python et téléchargez le fichier exécutable.",
    mainDesc2:
      "Notre convertisseur Python vers EXE en ligne est parfait pour les développeurs qui veulent distribuer leurs applications Python aux utilisateurs qui n'ont pas Python installé. Les fichiers exécutables générés fonctionnent sur Windows sans nécessiter de dépendances supplémentaires.",
    mainDesc3:
      "Téléchargez simplement votre fichier Python, attendez que le processus de conversion se termine, et téléchargez votre fichier exécutable. C'est aussi simple que cela !",
    featuresHeading: "Fonctionnalités de notre convertisseur Python vers EXE",
    features: [
      "Gratuit à utiliser - inscription non requise",
      "Processus de conversion sécurisé",
      "Fonctionne avec toutes les versions de Python",
      "Conversion rapide",
      "Aucune installation nécessaire - fonctionne dans votre navigateur",
      "Crée des fichiers exécutables autonomes",
      "Open source - code disponible pour révision",
    ],
    footerDesc:
      "Vos fichiers Python seront téléchargés vers le dépôt pytoexe-use où ils seront traités par GitHub Actions pour créer des fichiers exécutables. Après conversion, les fichiers Python originaux sont automatiquement supprimés.",
    preparingDownload: "Préparation du téléchargement...",
    faqHeading: "Questions fréquemment posées",
    faq: [
      {
        question: "Comment fonctionne la conversion ?",
        answer:
          "Lorsque vous téléchargez un fichier Python, il est envoyé vers un dépôt GitHub où GitHub Actions exécute PyInstaller pour convertir votre fichier .py en un fichier .exe autonome. Le processus est entièrement automatisé et prend généralement 1 à 2 minutes.",
      },
      {
        question: "Mon code est-il sécurisé ?",
        answer:
          "Oui ! Vos fichiers Python sont temporairement stockés dans un dépôt GitHub et sont automatiquement supprimés après conversion. L'ensemble du processus est open source - vous pouvez examiner le code dans les dépôts d'interface Web et de traitement.",
      },
      {
        question: "Quelles versions de Python sont supportées ?",
        answer:
          "Notre convertisseur supporte toutes les versions majeures de Python (3.7+). Le processus de conversion utilise la dernière version stable de PyInstaller, qui est compatible avec le code Python moderne.",
      },
      {
        question:
          "Le .exe fonctionnera-t-il sur n'importe quel ordinateur Windows ?",
        answer:
          "Oui ! Les fichiers exécutables générés sont autonomes et incluent toutes les dépendances nécessaires. Ils fonctionneront sur n'importe quel ordinateur Windows sans nécessiter l'installation de Python.",
      },
      {
        question: "Y a-t-il des limitations de taille de fichier ?",
        answer:
          "GitHub a une limite de taille de fichier de 100MB par fichier. Pour la plupart des scripts Python, c'est plus que suffisant. Si votre projet a de grandes dépendances, considérez optimiser votre code ou le diviser en plusieurs fichiers.",
      },
      {
        question:
          "Puis-je convertir des projets Python avec plusieurs fichiers ?",
        answer:
          "Actuellement, l'outil supporte la conversion de fichier .py unique. Pour les projets multi-fichiers, vous devrez vous assurer que toutes les dépendances sont correctement empaquetées ou utiliser un fichier requirements.txt dans votre configuration de workflow GitHub.",
      },
    ],
  },
  es: {
    title: "Convertidor de Python a EXE",
    subtitle: "Herramienta en línea",
    heading: "PY a EXE",
    subheading: "Convertidor en línea",
    verifyingAccess: "Verificando acceso al repositorio de GitHub...",
    configRequired: "Configuración requerida",
    requiredSetup: "Configuración necesaria:",
    githubToken: "Token de acceso personal con ámbitos repo y workflow",
    githubOwner: "Tu nombre de usuario de GitHub",
    githubRepo: "Nombre del repositorio con workflow de GitHub Actions",
    stepsToFix: "Pasos para arreglar:",
    createToken: "Crear un token de GitHub en",
    enableScopes: "Habilitar ámbitos repo y workflow",
    addVars: "Agregar las tres variables de entorno en la sección Vars →",
    uploadPrompt: "Haz clic para subir",
    orDragDrop: "o arrastra y suelta",
    pythonFile: "Archivo Python (.py)",
    selectFile: "Seleccionar archivo",
    securityNotice:
      "Los archivos PY serán eliminados del repositorio después del procesamiento.",
    uploadToGithub: "Subir a GitHub",
    uploading: "Subiendo...",
    converting: "Convirtiendo...",
    workflowId: "ID del workflow:",
    uploadingFile: "Subiendo archivo a GitHub...",
    convertingFile: "Convirtiendo archivo Python a ejecutable...",
    file: "Archivo:",
    download: "Descargar",
    exeFile: "Archivo EXE",
    viewOnGithub: "Ver en GitHub Actions",
    securityInfo: "Información de seguridad",
    securityDesc:
      "Para usuarios preocupados por la seguridad, puedes revisar nuestro código fuente en ambos repositorios:",
    webInterface: "Repositorio de interfaz web (pytoexe)",
    processingRepo: "Repositorio de procesamiento Python-to-EXE (pytoexe-use)",
    mainHeading: "Convertidor de Python a EXE en línea - Gratis y fácil",
    mainDesc1:
      "PY a EXE es una herramienta en línea gratuita que convierte archivos Python (.py) a archivos ejecutables (.exe). No se requiere instalación - simplemente sube tu script Python y descarga el archivo ejecutable.",
    mainDesc2:
      "Nuestro convertidor de Python a EXE en línea es perfecto para desarrolladores que quieren distribuir sus aplicaciones Python a usuarios que no tienen Python instalado. Los archivos ejecutables generados funcionan en Windows sin requerir dependencias adicionales.",
    mainDesc3:
      "Simplemente sube tu archivo Python, espera a que el proceso de conversión se complete, y descarga tu archivo ejecutable. ¡Es así de fácil!",
    featuresHeading: "Características de nuestro convertidor de Python a EXE",
    features: [
      "Gratis de usar - no se requiere registro",
      "Proceso de conversión seguro",
      "Funciona con todas las versiones de Python",
      "Conversión rápida",
      "No se requiere instalación - funciona en tu navegador",
      "Crea archivos ejecutables independientes",
      "Código abierto - código disponible para revisión",
    ],
    footerDesc:
      "Tus archivos Python serán subidos al repositorio pytoexe-use donde serán procesados por GitHub Actions para crear archivos ejecutables. Después de la conversión, los archivos Python originales son automáticamente eliminados.",
    preparingDownload: "Preparando descarga...",
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Cómo funciona la conversión?",
        answer:
          "Cuando subes un archivo Python, se envía a un repositorio de GitHub donde GitHub Actions ejecuta PyInstaller para convertir tu archivo .py en un archivo .exe independiente. El proceso está completamente automatizado y generalmente toma 1-2 minutos.",
      },
      {
        question: "¿Es seguro mi código?",
        answer:
          "¡Sí! Tus archivos Python se almacenan temporalmente en un repositorio de GitHub y se eliminan automáticamente después de la conversión. Todo el proceso es de código abierto - puedes revisar el código en los repositorios de interfaz web y procesamiento.",
      },
      {
        question: "¿Qué versiones de Python son compatibles?",
        answer:
          "Nuestro convertidor soporta todas las versiones principales de Python (3.7+). El proceso de conversión usa la última versión estable de PyInstaller, que es compatible con código Python moderno.",
      },
      {
        question: "¿El .exe funcionará en cualquier computadora Windows?",
        answer:
          "¡Sí! Los archivos ejecutables generados son independientes e incluyen todas las dependencias necesarias. Funcionarán en cualquier computadora Windows sin requerir que Python esté instalado.",
      },
      {
        question: "¿Hay limitaciones de tamaño de archivo?",
        answer:
          "GitHub tiene un límite de tamaño de archivo de 100MB por archivo. Para la mayoría de scripts de Python, esto es más que suficiente. Si tu proyecto tiene dependencias grandes, considera optimizar tu código o dividirlo en múltiples archivos.",
      },
      {
        question: "¿Puedo convertir proyectos Python con múltiples archivos?",
        answer:
          "Actualmente, la herramienta soporta conversión de archivo .py único. Para proyectos multi-archivo, necesitarás asegurarte de que todas las dependencias estén correctamente empaquetadas o usar un archivo requirements.txt en tu configuración de workflow de GitHub.",
      },
    ],
  },
  de: {
    title: "Python zu EXE Konverter",
    subtitle: "Online-Tool",
    heading: "PY zu EXE",
    subheading: "Online-Konverter",
    verifyingAccess: "Überprüfe GitHub-Repository-Zugriff...",
    configRequired: "Konfiguration erforderlich",
    requiredSetup: "Erforderliche Einrichtung:",
    githubToken: "Persönliches Zugriffstoken mit Repo- und Workflow-Bereichen",
    githubOwner: "Ihr GitHub-Benutzername",
    githubRepo: "Repository-Name mit GitHub Actions Workflow",
    stepsToFix: "Schritte zur Behebung:",
    createToken: "Erstellen Sie ein GitHub-Token unter",
    enableScopes: "Aktivieren Sie Repo- und Workflow-Bereiche",
    addVars: "Fügen Sie alle drei Umgebungsvariablen im Vars-Bereich hinzu →",
    uploadPrompt: "Klicken Sie zum Hochladen",
    orDragDrop: "oder ziehen Sie es per Drag & Drop",
    pythonFile: "Python-Datei (.py)",
    selectFile: "Datei auswählen",
    securityNotice:
      "PY-Dateien werden nach der Verarbeitung aus dem Repository entfernt.",
    uploadToGithub: "Zu GitHub hochladen",
    uploading: "Hochladen...",
    converting: "Konvertierung...",
    workflowId: "Workflow-ID:",
    uploadingFile: "Datei wird zu GitHub hochgeladen...",
    convertingFile: "Python-Datei wird zu ausführbarer Datei konvertiert...",
    file: "Datei:",
    download: "Herunterladen",
    exeFile: "EXE-Datei",
    viewOnGithub: "In GitHub Actions anzeigen",
    securityInfo: "Sicherheitsinformationen",
    securityDesc:
      "Für sicherheitsbewusste Benutzer können Sie unseren Quellcode in beiden Repositories überprüfen:",
    webInterface: "Web-Interface-Repository (pytoexe)",
    processingRepo: "Python-to-EXE-Verarbeitungs-Repository (pytoexe-use)",
    mainHeading: "Python zu EXE Online-Konverter - Kostenlos und einfach",
    mainDesc1:
      "PY zu EXE ist ein kostenloses Online-Tool, das Python-Dateien (.py) in ausführbare Dateien (.exe) konvertiert. Keine Installation erforderlich - laden Sie einfach Ihr Python-Skript hoch und laden Sie die ausführbare Datei herunter.",
    mainDesc2:
      "Unser Online-Python-zu-EXE-Konverter ist perfekt für Entwickler, die ihre Python-Anwendungen an Benutzer verteilen möchten, die Python nicht installiert haben. Die generierten ausführbaren Dateien funktionieren auf Windows ohne zusätzliche Abhängigkeiten.",
    mainDesc3:
      "Laden Sie einfach Ihre Python-Datei hoch, warten Sie, bis der Konvertierungsprozess abgeschlossen ist, und laden Sie Ihre ausführbare Datei herunter. So einfach ist das!",
    featuresHeading: "Funktionen unseres Python-zu-EXE-Konverters",
    features: [
      "Kostenlos zu verwenden - keine Registrierung erforderlich",
      "Sicherer Konvertierungsprozess",
      "Funktioniert mit allen Python-Versionen",
      "Schnelle Konvertierung",
      "Keine Installation erforderlich - funktioniert in Ihrem Browser",
      "Erstellt eigenständige ausführbare Dateien",
      "Open Source - Code verfügbar zur Überprüfung",
    ],
    footerDesc:
      "Ihre Python-Dateien werden in das pytoexe-use-Repository hochgeladen, wo sie von GitHub Actions verarbeitet werden, um ausführbare Dateien zu erstellen. Nach der Konvertierung werden die ursprünglichen Python-Dateien automatisch gelöscht.",
    preparingDownload: "Download wird vorbereitet...",
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        question: "Wie funktioniert die Konvertierung?",
        answer:
          "Wenn Sie eine Python-Datei hochladen, wird sie an ein GitHub-Repository gesendet, wo GitHub Actions PyInstaller ausführt, um Ihre .py-Datei in eine eigenständige .exe-Datei zu konvertieren. Der Prozess ist vollständig automatisiert und dauert normalerweise 1-2 Minuten.",
      },
      {
        question: "Ist mein Code sicher?",
        answer:
          "Ja! Ihre Python-Dateien werden temporär in einem GitHub-Repository gespeichert und nach der Konvertierung automatisch gelöscht. Der gesamte Prozess ist Open Source - Sie können den Code in den Web-Interface- und Verarbeitungs-Repositories überprüfen.",
      },
      {
        question: "Welche Python-Versionen werden unterstützt?",
        answer:
          "Unser Konverter unterstützt alle wichtigen Python-Versionen (3.7+). Der Konvertierungsprozess verwendet die neueste stabile Version von PyInstaller, die mit modernem Python-Code kompatibel ist.",
      },
      {
        question: "Wird die .exe auf jedem Windows-Computer funktionieren?",
        answer:
          "Ja! Die generierten ausführbaren Dateien sind eigenständig und enthalten alle erforderlichen Abhängigkeiten. Sie werden auf jedem Windows-Computer funktionieren, ohne dass Python installiert sein muss.",
      },
      {
        question: "Gibt es Dateigrößenbeschränkungen?",
        answer:
          "GitHub hat eine Dateigrößenbeschränkung von 100MB pro Datei. Für die meisten Python-Skripte ist das mehr als ausreichend. Wenn Ihr Projekt große Abhängigkeiten hat, sollten Sie erwägen, Ihren Code zu optimieren oder ihn in mehrere Dateien aufzuteilen.",
      },
      {
        question: "Kann ich Python-Projekte mit mehreren Dateien konvertieren?",
        answer:
          "Derzeit unterstützt das Tool die Konvertierung einer einzelnen .py-Datei. Für Multi-Dateien-Projekte müssen Sie sicherstellen, dass alle Abhängigkeiten korrekt gepackt sind oder eine requirements.txt-Datei in Ihrer GitHub-Workflow-Konfiguration verwenden.",
      },
    ],
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

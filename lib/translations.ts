import type { Locale } from "./i18n";

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
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

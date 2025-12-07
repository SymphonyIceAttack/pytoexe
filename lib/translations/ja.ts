/**
 * Japanese translations
 */
export const ja = {
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
        "はい！生成された実行可能ファイルはスタンドアロンで、必要なすべての依存関係含まれています。Pythonをインストールする必要なく、どのWindowsコンピュータでも動作します。",
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
} as const;

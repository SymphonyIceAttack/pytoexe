/**
 * German translations
 */
export const de = {
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
} as const;

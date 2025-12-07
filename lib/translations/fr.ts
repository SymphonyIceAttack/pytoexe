/**
 * French translations
 */
export const fr = {
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
  addVars: "Ajouter les trois variables d'environnement dans la section Vars →",
  uploadPrompt: "Cliquez pour télécharger",
  orDragDrop: "ou glissez-déposez",
  pythonFile: "Fichier Python (.py)",
  selectFile: "Sélectionner un fichier",
  securityNotice: "Les fichiers PY seront supprimés du dépôt après traitement.",
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
} as const;

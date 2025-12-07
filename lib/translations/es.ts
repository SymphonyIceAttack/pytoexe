/**
 * Spanish translations
 */
export const es = {
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
} as const;

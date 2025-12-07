import { PyToExeContent } from "@/components/pytoexe-content";
import { locales } from "@/lib/i18n";
import type { LanguageType } from "@/lib/translations";

// SSG: Generate static pages for all supported languages
export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

// SSG: Generate metadata for each language
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pytoexe.top";

  const languageNames = {
    en: "Python to EXE Online Converter",
    zh: "Python 转 EXE 在线转换器",
    fr: "Convertisseur Python vers EXE en ligne",
    es: "Convertidor de Python a EXE en línea",
    ru: "Конвертер Python в EXE онлайн",
    de: "Python zu EXE Online-Konverter",
    ja: "Python to EXE オンライン変換ツール",
  };

  return {
    title:
      languageNames[lang as keyof typeof languageNames] || languageNames.en,
    description:
      "Convert Python files to Windows executable files online using GitHub Actions. Free, secure, and fast.",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        zh: `${baseUrl}/zh`,
        fr: `${baseUrl}/fr`,
        es: `${baseUrl}/es`,
        ru: `${baseUrl}/ru`,
        de: `${baseUrl}/de`,
        ja: `${baseUrl}/ja`,
      },
    },
    openGraph: {
      title:
        languageNames[lang as keyof typeof languageNames] || languageNames.en,
      description:
        "Convert Python files to Windows executable files online using GitHub Actions. Free, secure, and fast.",
      url: `${baseUrl}/${lang}`,
      siteName: "PY to EXE Online Converter",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "PY to EXE Online Converter",
        },
      ],
      locale: lang,
      type: "website",
    },
  };
}

export const revalidate = 86400; // Cache for 24 hours

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <PyToExeContent locale={lang as LanguageType} />;
}

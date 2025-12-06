import { PyToExeContent } from "@/components/pytoexe-content";

// SSG: Generate static page for default language
export async function generateStaticParams() {
  return [
    {
      lang: "en",
    },
  ];
}

// SSG: Generate metadata for default page
export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pytoexe.top";

  return {
    title: "Python to EXE Online Converter",
    description:
      "Convert Python files to Windows executable files online using GitHub Actions. Free, secure, and fast.",
    alternates: {
      canonical: baseUrl,
      languages: {
        en: `${baseUrl}/en`,
        zh: `${baseUrl}/zh`,
        fr: `${baseUrl}/fr`,
        es: `${baseUrl}/es`,
        ru: `${baseUrl}/ru`,
        de: `${baseUrl}/de`,
        ja: `${baseUrl}/ja`,
      },
    },
    openGraph: {
      title: "Python to EXE Online Converter",
      description:
        "Convert Python files to Windows executable files online using GitHub Actions. Free, secure, and fast.",
      url: baseUrl,
      siteName: "PY to EXE Online Converter",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "PY to EXE Online Converter",
        },
      ],
      type: "website",
    },
  };
}

export const revalidate = 86400; // Cache for 24 hours

export default function Page() {
  return <PyToExeContent locale="en" />;
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { defaultLocale, supportedLocales } from "@/lib/constants";
import type { LanguageType } from "@/lib/translation";
import { getTranslations } from "@/lib/translations";
import "../../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = lang as LanguageType;

  // Validate that the incoming `lang` parameter is valid
  if (!supportedLocales.includes(language)) {
    // If it's the default locale, redirect to root
    if (language === defaultLocale) {
      redirect("/");
    }
    redirect("/");
  }

  const translations = getTranslations(language);

  return {
    title: translations.title,
    description: translations.mainDesc1,
    keywords:
      "python to exe, py to exe converter, python compiler, pyinstaller online, python executable, convert python, python to windows exe, online python converter, python packaging",
    openGraph: {
      title: translations.title,
      description: translations.mainDesc1,
      type: "website",
      locale: `${language}_${language.toUpperCase()}`,
    },
    twitter: {
      card: "summary_large_image",
      title: translations.title,
      description: translations.mainDesc1,
    },
    alternates: {
      languages: {
        [defaultLocale]: "/",
        ...supportedLocales.reduce(
          (acc, locale) => {
            acc[locale] = `/${locale}`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Validate that the incoming `lang` parameter is valid
  if (!supportedLocales.includes(lang as LanguageType)) {
    // If it's the default locale, redirect to root
    if (lang === defaultLocale) {
      redirect("/");
    }
    redirect("/");
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

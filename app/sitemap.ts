import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/lib/i18n";

export const revalidate = 86400; // 24 hours in seconds

// Get all supported languages including default locale
const allLocales = [defaultLocale, ...locales];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pytoexe.top";

  try {
    const staticPages: MetadataRoute.Sitemap = [];

    // Add root page (default language)
    staticPages.push({
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
      alternates: {
        languages: allLocales.reduce(
          (acc, locale) => {
            acc[locale] =
              locale === defaultLocale ? `${baseUrl}/` : `${baseUrl}/${locale}`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    });

    // Add language-specific pages
    locales.forEach((locale) => {
      const priority = 0.7;
      const changeFrequency = "monthly" as const;

      staticPages.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: allLocales.reduce(
            (acc, altLocale) => {
              acc[altLocale] =
                altLocale === defaultLocale
                  ? `${baseUrl}/`
                  : `${baseUrl}/${altLocale}`;
              return acc;
            },
            {} as Record<string, string>,
          ),
        },
      });
    });

    return [...staticPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return minimal fallback if everything fails
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1.0,
        alternates: {
          languages: allLocales.reduce(
            (acc, locale) => {
              acc[locale] =
                locale === defaultLocale
                  ? `${baseUrl}/`
                  : `${baseUrl}/${locale}`;
              return acc;
            },
            {} as Record<string, string>,
          ),
        },
      },
    ];
  }
}

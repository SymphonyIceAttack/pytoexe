import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export const revalidate = 86400; // 24 hours in seconds

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pytoexe.top";

  try {
    const staticPages: MetadataRoute.Sitemap = [];

    // Add root page
    staticPages.push({
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
      alternates: {
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
    });

    // Add language-specific pages
    locales.forEach((locale) => {
      const priority = locale === "en" ? 0.9 : 0.7;
      const changeFrequency =
        locale === "en" ? ("weekly" as const) : ("monthly" as const);

      staticPages.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
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
      });
    });

    return [...staticPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return minimal fallback if everything fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1.0,
        alternates: {
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
      },
    ];
  }
}

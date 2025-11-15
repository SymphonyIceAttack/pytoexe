import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export const revalidate = 86400; // 24 hours in seconds

const staticRoutes = ["/", "/posts", ...locales.map((item) => `/${item}`)];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  try {
    const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === "/" ? ("monthly" as const) : ("weekly" as const),
      priority: route === "/" ? 1.0 : 0.8,
    }));

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
      },
    ];
  }
}

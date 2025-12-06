export type Locale = "en" | "zh" | "fr" | "es" | "ru" | "de" | "ja";

export const locales: Locale[] = ["zh", "fr", "es", "ru", "de", "ja"];
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const locale = path.split("/")[1];
  return isValidLocale(locale) ? locale : defaultLocale;
}

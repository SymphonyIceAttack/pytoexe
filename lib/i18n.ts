export type Locale = "en" | "ja" | "ru";

export const locales: Locale[] = ["en", "ja", "ru"];
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const locale = path.split("/")[1];
  return isValidLocale(locale) ? locale : defaultLocale;
}

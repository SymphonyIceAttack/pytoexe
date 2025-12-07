/**
 * Language type for supported locales
 */
export type LanguageType = "en" | "zh" | "fr" | "es" | "ru" | "de" | "ja";

import { de } from "./de";
/**
 * Unified translations export
 */
// Import all language translations
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { ja } from "./ja";
import { ru } from "./ru";
import { zh } from "./zh";

// Export language types
export type Locale = LanguageType;

// Create translations object by combining all languages
export const translations = {
  en,
  zh,
  ja,
  ru,
  fr,
  es,
  de,
} as const;

// Export getTranslations function
export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

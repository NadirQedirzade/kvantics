import type { Locale, LocalizedText } from "./i18n";

/** Data files may hold a plain string (same in every language) or a LocalizedText. */
export function pick(value: string | LocalizedText, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

export const intlLocale: Record<Locale, string> = { az: "az", en: "en", ru: "ru" };

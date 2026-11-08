export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

/** Azerbaijani is the default language of the site. */
export const defaultLocale: Locale = "az";

/** Cookie used to remember the visitor's language between visits. */
export const LOCALE_COOKIE = "kvantics-lang";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Native names, shown in the language menu. */
export const localeNames: Record<Locale, string> = {
  az: "Azərbaycanca",
  en: "English",
  ru: "Русский",
};

export const htmlLang: Record<Locale, string> = { az: "az", en: "en", ru: "ru" };
export const ogLocale: Record<Locale, string> = { az: "az_AZ", en: "en_US", ru: "ru_RU" };

/** A text that exists in every supported language (used by data files). */
export type LocalizedText = Record<Locale, string>;

/** Build an internal link for a locale: localeHref("en", "/about") -> "/en/about". */
export function localeHref(locale: Locale, path = "/"): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

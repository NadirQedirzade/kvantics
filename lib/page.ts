import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./i18n";

/** Resolve and validate the `[locale]` route param (Next 15: params is a Promise). */
export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

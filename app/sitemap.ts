import type { MetadataRoute } from "next";
import { locales, localeHref } from "@/lib/i18n";
import { PAGE_PATHS } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  // Sitemaps need absolute URLs; without a known site URL there is nothing valid to list.
  if (!base) return [];
  return Object.values(PAGE_PATHS).flatMap((path) =>
    locales.map((locale) => ({
      url: new URL(localeHref(locale, path), base).toString(),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, new URL(localeHref(l, path), base).toString()])),
      },
    })),
  );
}

import type { Metadata } from "next";
import { locales, localeHref, ogLocale, type Locale } from "./i18n";
import { SITE_NAME } from "./site";
import { getDictionary } from "./translations";

type PageKey = "home" | "about" | "projects" | "events" | "join" | "work";

export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  events: "/events",
  join: "/join",
  work: "/work-with-us",
};

/** Per-page title, description, canonical + hreflang alternates, Open Graph and Twitter cards. */
export function pageMetadata(locale: Locale, key: PageKey): Metadata {
  const meta = getDictionary(locale).meta[key];
  const path = PAGE_PATHS[key];
  const url = localeHref(locale, path);
  const languages = Object.fromEntries(locales.map((l) => [l, localeHref(l, path)]));
  const fullTitle = key === "home" ? meta.title : `${meta.title} — ${SITE_NAME}`;

  return {
    title: key === "home" ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: { ...languages, "x-default": localeHref("az", path) } },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description: meta.description,
      url,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: meta.description, images: ["/og.png"] },
  };
}

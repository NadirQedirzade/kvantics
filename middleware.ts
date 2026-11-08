import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale } from "@/lib/i18n";

/**
 * Every page lives under a language prefix (/az, /en, /ru). A request without one
 * is redirected to the visitor's remembered language (cookie) or to Azerbaijani,
 * the default: "/" -> "/az", "/about" -> "/az/about".
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) {
    // Expose the locale to server code that has no route params (e.g. not-found).
    const headers = new Headers(request.headers);
    headers.set("x-locale", first);
    return NextResponse.next({ request: { headers } });
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (icons, og.png, robots.txt, sitemap.xml, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

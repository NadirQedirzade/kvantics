import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/opsz.css";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { htmlLang, locales } from "@/lib/i18n";
import { resolveLocale } from "@/lib/page";
import { SITE_NAME, getSiteUrl } from "@/lib/site";
import { themeBootScript } from "@/lib/theme";
import { getDictionary } from "@/lib/translations";

// Only /az, /en and /ru exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#060b18" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    metadataBase: getSiteUrl(),
    applicationName: SITE_NAME,
    title: { default: getDictionary(locale).meta.home.title, template: `%s — ${SITE_NAME}` },
    description: getDictionary(locale).meta.home.description,
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: dict.meta.home.description,
    areaServed: "AZ",
  };

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <head>
        {/* Sets data-theme before first paint: no flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <a href="#main" className="skip-link">
            {dict.a11y.skip}
          </a>
          <Navbar locale={locale} nav={dict.nav} a11y={dict.a11y} formNote={dict.common.formNote} />
          {/* #page becomes inert while a modal overlay (mobile menu) is open */}
          <div id="page">
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer locale={locale} dict={dict} />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { localeHref, type Locale } from "@/lib/i18n";
import { FORM_URL, WORK_WITH_US_FORM_URL } from "@/lib/links";
import type { Dictionary } from "@/lib/translations";

const linkClass =
  "inline-flex min-h-11 items-center text-[0.9375rem] text-fg-2 transition-colors duration-200 ease-out hover:text-fg";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pages = [
    { href: localeHref(locale), label: dict.nav.home },
    { href: localeHref(locale, "/about"), label: dict.nav.about },
    { href: localeHref(locale, "/projects"), label: dict.nav.projects },
    { href: localeHref(locale, "/events"), label: dict.nav.events },
    { href: localeHref(locale, "/join"), label: dict.nav.join },
    { href: localeHref(locale, "/work-with-us"), label: dict.common.workWithUs },
  ];

  return (
    <footer className="mt-12 border-t border-line">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href={localeHref(locale)} aria-label={dict.a11y.logo} className="-ml-1 inline-block rounded-lg p-1">
            <Logo />
          </Link>
          <p className="type-small mt-4 max-w-xs text-fg-2">{dict.footer.description}</p>
        </div>

        <nav aria-labelledby="footer-pages">
          <h2 id="footer-pages" className="type-small font-semibold text-fg">
            {dict.footer.pages}
          </h2>
          <ul className="mt-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className={linkClass}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="type-small font-semibold text-fg">{dict.footer.involved}</h2>
          <ul className="mt-3">
            {[
              { label: dict.common.joinKvantics, href: FORM_URL },
              { label: dict.common.workWithUs, href: WORK_WITH_US_FORM_URL },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label}
                  <span className="sr-only"> {dict.a11y.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="type-small font-semibold text-fg">{dict.footer.contact}</h2>
          <p className="type-small mt-3 max-w-xs text-fg-2">{dict.footer.contactText}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-site type-caption py-6 text-fg-3">
          © {new Date().getFullYear()} Kvantics. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}

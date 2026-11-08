"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "motion/react";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, IconButton } from "@/components/Button";
import { LanguageMenu } from "@/components/LanguageMenu";
import { Logo } from "@/components/Logo";
import { MobileMenu, type NavItem } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { localeHref, type Locale } from "@/lib/i18n";
import { FORM_URL } from "@/lib/links";
import { springs } from "@/lib/motion";
import type { Dictionary } from "@/lib/translations";

interface NavbarProps {
  locale: Locale;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  formNote: string;
}

const ROUTES = [
  { path: "/", key: "home" },
  { path: "/about", key: "about" },
  { path: "/projects", key: "projects" },
  { path: "/events", key: "events" },
  { path: "/join", key: "join" },
] as const;

export function Navbar({ locale, nav, a11y, formNote }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const items: NavItem[] = ROUTES.map(({ path, key }) => {
    const href = localeHref(locale, path);
    const active = path === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
    return { href, label: nav[key], active };
  });

  return (
    <header className="header fixed inset-x-0 top-0 z-50" data-scrolled={scrolled}>
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href={localeHref(locale)} aria-label={a11y.logo} className="-ml-1 rounded-lg p-1">
          <Logo />
        </Link>

        <nav aria-label={a11y.mainNav} className="max-lg:hidden">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={`relative flex min-h-11 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-200 ease-out ${
                    item.active ? "text-fg" : "text-fg-2 hover:text-fg"
                  }`}
                >
                  {item.active ? (
                    <m.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-fill-2"
                      transition={springs.move}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle lightLabel={a11y.themeLight} darkLabel={a11y.themeDark} />
          <LanguageMenu locale={locale} label={a11y.language} />
          <Button href={FORM_URL} external srNote={a11y.newTab} className="max-lg:hidden">
            {nav.cta}
          </Button>
          <IconButton
            aria-label={a11y.menuOpen}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
          >
            <Menu className="size-6" aria-hidden="true" />
          </IconButton>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={items}
        title={a11y.menuTitle}
        closeLabel={a11y.menuClose}
        ctaLabel={nav.cta}
        formNote={formNote}
        newTab={a11y.newTab}
      />
    </header>
  );
}

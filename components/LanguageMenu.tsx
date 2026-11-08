"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { LOCALE_COOKIE, localeHref, localeNames, locales, type Locale } from "@/lib/i18n";
import { exitTween, springs } from "@/lib/motion";

/**
 * Pop-up menu button (HIG "pull-down menu"): non-modal, anchored to its trigger,
 * scales out from the trigger's corner, arrow-key navigable, Escape closes.
 */
export function LanguageMenu({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const rest = pathname.replace(/^\/(az|en|ru)(?=\/|$)/, "") || "/";

  const items = useCallback(
    () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitemradio"]') ?? []),
    [],
  );

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  // Dismiss on outside press and when the route changes.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  // Move focus to the current language once the menu is open.
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => {
      const list = items();
      (list.find((el) => el.getAttribute("aria-checked") === "true") ?? list[0])?.focus();
    });
    return () => cancelAnimationFrame(raf);
  }, [open, items]);

  function onMenuKeyDown(event: React.KeyboardEvent) {
    const list = items();
    const index = list.indexOf(document.activeElement as HTMLElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      list[(index + 1) % list.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      list[(index - 1 + list.length) % list.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      list[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      list[list.length - 1]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      close(true);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  }

  function remember(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
  }

  return (
    <div className="relative">
      <m.button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        whileTap={{ scale: 0.96 }}
        transition={springs.press}
        className="flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[0.9375rem] font-medium text-fg-2 transition-colors duration-200 ease-out hover:bg-fill-2 hover:text-fg aria-expanded:bg-fill-2 aria-expanded:text-fg"
      >
        <Globe className="size-[1.125rem]" aria-hidden="true" />
        <span className="uppercase tracking-wide">{locale}</span>
        <ChevronDown
          className={`size-4 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </m.button>

      <AnimatePresence>
        {open && (
          <m.div
            ref={menuRef}
            role="menu"
            aria-label={label}
            onKeyDown={onMenuKeyDown}
            style={{ transformOrigin: "top right" }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: springs.menu }}
            exit={{ opacity: 0, scale: 0.96, transition: exitTween }}
            className="material-menu absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl p-1.5"
          >
            {locales.map((code) => {
              const current = code === locale;
              return (
                <Link
                  key={code}
                  href={localeHref(code, rest)}
                  role="menuitemradio"
                  aria-checked={current}
                  lang={code}
                  hrefLang={code}
                  tabIndex={-1}
                  scroll
                  onClick={() => remember(code)}
                  className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 text-[0.9375rem] text-fg transition-colors duration-150 ease-out hover:bg-fill-2 focus-visible:bg-fill-2"
                >
                  <span>{localeNames[code]}</span>
                  {current ? <Check className="size-4 text-blue" aria-hidden="true" /> : null}
                </Link>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

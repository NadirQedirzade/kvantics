"use client";

import { AnimatePresence, m } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "@/components/Button";
import { springs } from "@/lib/motion";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/**
 * Light/dark switcher. The boot script in <head> has already set
 * data-theme before this ever renders, so on mount we simply read it off
 * the <html> element rather than guessing — that keeps the toggle's first
 * paint consistent with the page around it.
 */
export function ThemeToggle({
  lightLabel,
  darkLabel,
  className = "",
}: {
  lightLabel: string;
  darkLabel: string;
  className?: string;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next: Theme = theme === "dark" ? "light" : "dark";
    // A short-lived class turns on a global color transition just for this
    // change, so every surface, border and icon cross-fades together
    // instead of the new theme appearing instantly.
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private browsing / storage disabled: theme just won't persist */
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 500);
  }

  const isDark = theme === "dark";

  return (
    <IconButton
      aria-label={isDark ? lightLabel : darkLabel}
      onClick={toggle}
      className={`theme-toggle-icon ${mounted ? "" : "invisible"} ${className}`}
    >
      <AnimatePresence initial={false}>
        {isDark ? (
          <m.span
            key="moon"
            initial={{ opacity: 0, rotate: -50, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, transition: springs.menu }}
            exit={{ opacity: 0, rotate: 50, scale: 0.6, transition: { duration: 0.15 } }}
          >
            <Moon className="size-[1.125rem]" aria-hidden="true" />
          </m.span>
        ) : (
          <m.span
            key="sun"
            initial={{ opacity: 0, rotate: 50, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, transition: springs.menu }}
            exit={{ opacity: 0, rotate: -50, scale: 0.6, transition: { duration: 0.15 } }}
          >
            <Sun className="size-[1.125rem]" aria-hidden="true" />
          </m.span>
        )}
      </AnimatePresence>
    </IconButton>
  );
}

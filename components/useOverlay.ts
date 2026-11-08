"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Behaviour shared by modal overlays (HIG: modality should be predictable):
 *  - background content becomes inert and page scroll is locked
 *  - focus moves into the overlay, Tab wraps inside it
 *  - Escape dismisses
 *  - focus returns to whatever opened it
 */
export function useModalOverlay(open: boolean, ref: RefObject<HTMLElement | null>, onClose: () => void) {
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const page = document.getElementById("page");
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    page?.setAttribute("inert", "");
    root.style.overflow = "hidden";

    const focusables = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
    const raf = requestAnimationFrame(() => (focusables()[0] ?? ref.current)?.focus());

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = ref.current?.contains(active) ?? false;
      if (event.shiftKey && (active === first || !inside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !inside)) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      page?.removeAttribute("inert");
      root.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, [open, ref]);
}

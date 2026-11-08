"use client";

import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import { useRef } from "react";
import type { PanInfo } from "motion/react";
import { Button, IconButton } from "@/components/Button";
import { useModalOverlay } from "@/components/useOverlay";
import { FORM_URL } from "@/lib/links";
import { project, springs } from "@/lib/motion";

export interface NavItem {
  href: string;
  label: string;
  active: boolean;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  title: string;
  closeLabel: string;
  ctaLabel: string;
  formNote: string;
  newTab: string;
}

const outCurve = [0.23, 1, 0.32, 1] as const;

/**
 * Modal sheet for small screens.
 * - Dims the page behind a scrim; background is inert; focus is trapped.
 * - Dismiss: close button, scrim tap, Escape, link tap, or swipe right.
 * - Enters from the right and leaves to the right (same path both ways).
 * - Swipe release uses velocity projection, so a flick dismisses like a throw;
 *   the snap-back after a short drag has a touch of bounce (it carried momentum).
 */
export function MobileMenu({ open, onClose, items, title, closeLabel, ctaLabel, formNote, newTab }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useModalOverlay(open, panelRef, onClose);

  function onDragEnd(_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    const projected = info.offset.x + project(info.velocity.x);
    if (projected > 120 || info.velocity.x > 500) onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <m.div key="mobile-menu" className="fixed inset-0 z-[60] lg:hidden">
          <m.div
            aria-hidden="true"
            className="material-scrim absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, ease: outCurve } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: outCurve } }}
            onClick={onClose}
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className="material-sheet absolute inset-y-0 right-0 flex w-[min(88vw,22rem)] flex-col overflow-y-auto px-6 pb-8 pt-3 outline-none"
            style={{ touchAction: "pan-y" }}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { x: springs.sheet, opacity: { duration: 0.15, ease: outCurve } } }}
            exit={{ x: "100%", opacity: 0, transition: { x: springs.sheet, opacity: { duration: 0.2, delay: 0.1, ease: outCurve } } }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.03, right: 0.7 }}
            dragTransition={{ bounceStiffness: 520, bounceDamping: 38 }}
            onDragEnd={onDragEnd}
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.9375rem] font-medium text-fg-3">{title}</span>
              <IconButton aria-label={closeLabel} onClick={onClose} className="-mr-2">
                <X className="size-6" aria-hidden="true" />
              </IconButton>
            </div>

            <nav aria-label={title} className="mt-4">
              <ul className="flex flex-col">
                {items.map((item, index) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { ...springs.menu, delay: 0.06 + index * 0.04 } }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={item.active ? "page" : undefined}
                      className={`flex min-h-14 items-center border-b border-line text-[1.625rem] font-semibold tracking-[-0.02em] transition-colors duration-200 ease-out ${
                        item.active ? "text-fg" : "text-fg-2 hover:text-fg"
                      }`}
                    >
                      {item.active ? <span aria-hidden="true" className="mr-3 h-6 w-1 rounded-full bg-blue" /> : null}
                      {item.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-8">
              <Button href={FORM_URL} external srNote={newTab} size="lg" className="w-full">
                {ctaLabel}
              </Button>
              <p className="type-caption mt-3 text-center text-fg-3">{formNote}</p>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import { useRef } from "react";
import type { PanInfo } from "motion/react";
import { Button, IconButton } from "@/components/Button";
import { LogoMark } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
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
  themeLightLabel: string;
  themeDarkLabel: string;
}

const outCurve = [0.23, 1, 0.32, 1] as const;

/** A single huge, faint stroke of the brand mark bleeding off the card's
 *  edge — the same quiet-flourish idea as a watermark, built from the
 *  letterform instead of a decorative illustration. */
function KWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        d="M60 10 V190 M150 10 L60 108 M90 80 L150 190"
        fill="none"
        stroke="var(--color-fg)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Modal sheet for small screens.
 * - Dims the page behind a scrim; background is inert; focus is trapped.
 * - Dismiss: close button, scrim tap, Escape, link tap, or swipe right.
 * - Enters from the right and leaves to the right (same path both ways).
 * - Swipe release uses velocity projection, so a flick dismisses like a throw;
 *   the snap-back after a short drag has a touch of bounce (it carried momentum).
 */
export function MobileMenu({
  open,
  onClose,
  items,
  title,
  closeLabel,
  ctaLabel,
  formNote,
  newTab,
  themeLightLabel,
  themeDarkLabel,
}: MobileMenuProps) {
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
            className="absolute inset-4 flex flex-col outline-none sm:inset-6"
            style={{ touchAction: "pan-y" }}
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { x: springs.sheet, opacity: { duration: 0.15, ease: outCurve } } }}
            exit={{ x: "110%", opacity: 0, transition: { x: springs.sheet, opacity: { duration: 0.2, delay: 0.1, ease: outCurve } } }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.03, right: 0.7 }}
            dragTransition={{ bounceStiffness: 520, bounceDamping: 38 }}
            onDragEnd={onDragEnd}
          >
            {/* Chrome sits above the card, on the dimmed backdrop itself. */}
            <div className="mb-4 flex items-center justify-between px-1">
              <LogoMark className="size-9" />
              <div className="flex items-center gap-1">
                <ThemeToggle lightLabel={themeLightLabel} darkLabel={themeDarkLabel} />
                <IconButton aria-label={closeLabel} onClick={onClose}>
                  <X className="size-6" aria-hidden="true" />
                </IconButton>
              </div>
            </div>

            <div className="material-menu relative flex flex-1 flex-col overflow-hidden rounded-[1.75rem] px-6 pb-6 pt-6">
              <KWatermark
                className="pointer-events-none absolute -bottom-10 -right-12 h-64 w-64 opacity-[0.05]"
              />

              <span className="relative type-caption font-semibold uppercase tracking-[0.14em] text-fg-3">
                {title}
              </span>

              <nav aria-label={title} className="relative mt-5 flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-1">
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
                        className={`flex min-h-14 items-center justify-between rounded-2xl px-4 text-[1.4375rem] font-semibold tracking-[-0.02em] transition-colors duration-200 ease-out ${
                          item.active ? "bg-fill-2 text-fg" : "text-fg-2 hover:bg-fill-1 hover:text-fg"
                        }`}
                      >
                        {item.label}
                        {item.active ? <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue" /> : null}
                      </Link>
                    </m.li>
                  ))}
                </ul>
              </nav>

              <div className="relative mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
                <Button href={FORM_URL} external srNote={newTab}>
                  {ctaLabel}
                </Button>
                <p className="type-caption text-fg-3">{formNote}</p>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

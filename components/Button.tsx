"use client";

import Link from "next/link";
import { m } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { springs } from "@/lib/motion";

const MotionLink = m.create(Link);

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 select-none items-center justify-center gap-2 rounded-full text-center font-semibold leading-tight " +
  "transition-[background-color,border-color,color] duration-200 ease-out";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-hover",
  secondary: "border border-line-strong bg-fill-1 text-fg hover:bg-fill-3",
  ghost: "text-fg-2 hover:text-fg",
};
const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "min-h-[3.25rem] px-7 py-3 text-base",
};

// Feedback on pointer-down (not on release), critically damped: no overshoot.
const press = { scale: 0.97 };

interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** External links open in a new tab with a secure rel. */
  external?: boolean;
  /** Screen-reader-only suffix for external links, e.g. "(opens in a new tab)". */
  srNote?: string;
}

export function Button({ href, variant = "primary", size = "md", className = "", children, external, srNote }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <m.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={press}
        transition={springs.press}
      >
        {children}
        {srNote ? <span className="sr-only"> {srNote}</span> : null}
      </m.a>
    );
  }
  return (
    <MotionLink href={href} className={classes} whileTap={press} transition={springs.press}>
      {children}
    </MotionLink>
  );
}

/** Square 44px icon-only button with the same press feedback. */
export function IconButton({ className = "", children, ...props }: ComponentProps<typeof m.button>) {
  return (
    <m.button
      type="button"
      whileTap={{ scale: 0.92 }}
      transition={springs.press}
      className={`grid size-11 place-items-center rounded-full text-fg transition-colors duration-200 ease-out hover:bg-fill-2 ${className}`}
      {...props}
    >
      {children}
    </m.button>
  );
}

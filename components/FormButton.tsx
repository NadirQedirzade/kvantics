import { Button } from "@/components/Button";
import { FORM_URL } from "@/lib/links";
import type { ReactNode } from "react";

/**
 * The one way to link to an application form: always opens Google Forms in a
 * new tab with `rel="noopener noreferrer"`, and tells screen readers it
 * leaves the site. Defaults to the shared membership form; pass `href` to
 * point a specific button (e.g. the Work With Us page) at its own form.
 */
export function FormButton({
  newTab,
  href = FORM_URL,
  variant = "primary",
  size = "lg",
  className,
  children,
}: {
  newTab: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button href={href} external srNote={newTab} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

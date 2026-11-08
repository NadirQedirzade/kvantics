import { Button } from "@/components/Button";
import { FORM_URL } from "@/lib/links";
import type { ReactNode } from "react";

/**
 * The one way to link to the application form: always opens Google Forms in a new
 * tab with `rel="noopener noreferrer"`, and tells screen readers it leaves the site.
 */
export function FormButton({
  newTab,
  variant = "primary",
  size = "lg",
  className,
  children,
}: {
  newTab: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button href={FORM_URL} external srNote={newTab} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

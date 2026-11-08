import type { ReactNode } from "react";

/** A quiet pictogram, not a scene: a crop-frame for "nothing placed here
 *  yet" (projects), a calendar page for "nothing scheduled yet" (events). */
function Art({ variant }: { variant: "projects" | "events" }) {
  return (
    <svg viewBox="0 0 160 100" className="mx-auto h-24 w-40" aria-hidden="true" focusable="false">
      {variant === "projects" ? (
        <>
          <path className="motif-line motif-dim" d="M32 24 H20 V36 M128 24 H140 V36 M32 76 H20 V64 M128 76 H140 V64" />
          <path className="motif-line" d="M80 42 V58 M72 50 H88" />
        </>
      ) : (
        <>
          <rect className="motif-line motif-dim" x="38" y="22" width="84" height="58" rx="8" />
          <path className="motif-line motif-dim" d="M38 40 H122 M58 16 V26 M102 16 V26" />
          <rect className="motif-line" x="64" y="50" width="18" height="16" rx="3" />
        </>
      )}
    </svg>
  );
}

/** An empty screen is an invitation to act: say what is missing, then give a next step. */
export function EmptyState({
  variant,
  title,
  text,
  children,
}: {
  variant: "projects" | "events";
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-line bg-surface px-6 py-14 text-center md:px-12 md:py-20">
      <Art variant={variant} />
      <h2 className="type-h2 mx-auto mt-8 max-w-xl">{title}</h2>
      <p className="type-lead mx-auto mt-4 max-w-xl">{text}</p>
      {children ? <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div> : null}
    </div>
  );
}

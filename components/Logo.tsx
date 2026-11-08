/** The Kvantics K mark: rounded blue tile with a white K, stroke-matched to the original brand logo. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#2563ff" />
      <path
        d="M9 10V22M23 10L9 16M14 14L23 22"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-[1.0625rem] font-semibold leading-none tracking-[-0.02em] text-fg">
        Kvantics
      </span>
    </span>
  );
}

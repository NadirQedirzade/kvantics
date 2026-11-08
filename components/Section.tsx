import type { ReactNode } from "react";

/** Standard page section: generous vertical rhythm inside the site container. */
export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-24 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  lead,
  className = "",
}: {
  id: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className="type-h2">
        {title}
      </h2>
      {lead ? <p className="type-lead mt-4">{lead}</p> : null}
    </div>
  );
}

/** Top of every inner page: title, lead and optional actions. */
export function PageHeader({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <header className="pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="container-site">
        <h1 className="type-h1 max-w-3xl">{title}</h1>
        <p className="type-lead mt-5 max-w-2xl">{lead}</p>
        {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </header>
  );
}

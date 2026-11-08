import type { LucideIcon } from "lucide-react";

/** Icon + title + text, separated from its neighbours by a hairline (not boxed in a card). */
export function IconFeature({ Icon, title, text }: { Icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="border-t border-line pt-6">
      <span className="grid size-11 place-items-center rounded-xl bg-blue/15 text-blue-2">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="type-h3 mt-5">{title}</h3>
      <p className="type-body mt-2 text-fg-2">{text}</p>
    </div>
  );
}

/** Four-up row divided by hairlines: used for short statements (no numbering: they are not a sequence). */
export function HairlineRow({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid border-t border-line md:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
        >
          <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.025em]">{item.title}</h3>
          <p className="type-body mt-3 text-fg-2">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

import { CalendarDays, MapPin, Wifi } from "lucide-react";
import type { KvanticsEvent } from "@/data/events";
import { Button } from "@/components/Button";
import type { Locale } from "@/lib/i18n";
import { intlLocale, pick } from "@/lib/localized";
import type { Dictionary } from "@/lib/translations";

const regTone: Record<KvanticsEvent["registration"], string> = {
  open: "border-positive/40 bg-positive/10 text-positive",
  soon: "border-blue/40 bg-blue/10 text-blue-2",
  closed: "border-line-strong text-fg-2",
  completed: "border-line-strong text-fg-3",
};

function formatDate(iso: string, locale: Locale) {
  const hasTime = iso.includes("T");
  return new Intl.DateTimeFormat(intlLocale[locale], {
    dateStyle: "long",
    ...(hasTime ? { timeStyle: "short" as const } : {}),
    timeZone: "Asia/Baku",
  }).format(new Date(iso));
}

/** Event card: name, category, date, place or online, registration status and link. */
export function EventCard({
  event,
  locale,
  dict,
  newTab,
}: {
  event: KvanticsEvent;
  locale: Locale;
  dict: Dictionary["events"];
  newTab: string;
}) {
  return (
    <article className="h-full flex flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,background-color] duration-200 ease-out hover:border-line-strong hover:bg-elevated/60">
      <div className="flex flex-wrap items-center gap-2">
        <span className="type-caption rounded-full border border-line-strong px-2.5 py-0.5 text-fg-2">
          {dict.categories[event.category].label}
        </span>
        <span className={`type-caption rounded-full border px-2.5 py-0.5 ${regTone[event.registration]}`}>
          {dict.registration[event.registration]}
        </span>
      </div>
      <h3 className="type-h3 mt-4">{pick(event.name, locale)}</h3>
      <p className="type-body mt-2 text-fg-2">{pick(event.description, locale)}</p>
      <ul className="type-small mt-5 space-y-2 text-fg-2">
        <li className="flex items-center gap-2">
          <CalendarDays className="size-4 shrink-0 text-blue-2" aria-hidden="true" />
          <span>{event.date ? formatDate(event.date, locale) : dict.dateTbd}</span>
        </li>
        {event.location ? (
          <li className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-blue-2" aria-hidden="true" />
            <span>{pick(event.location, locale)}</span>
          </li>
        ) : null}
        {event.online ? (
          <li className="flex items-center gap-2">
            <Wifi className="size-4 shrink-0 text-blue-2" aria-hidden="true" />
            <span>{dict.online}</span>
          </li>
        ) : null}
      </ul>
      {event.registration === "open" && event.registrationUrl ? (
        <div className="mt-auto pt-6">
          <Button href={event.registrationUrl} external srNote={newTab} variant="secondary">
            {dict.register}
          </Button>
        </div>
      ) : null}
    </article>
  );
}

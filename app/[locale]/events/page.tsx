import type { Metadata } from "next";
import { EmptyState } from "@/components/EmptyState";
import { EventCard } from "@/components/EventCard";
import { FormButton } from "@/components/FormButton";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "events");
}

const categoryOrder = ["hackathon", "startup", "robotics", "workshop", "seminar", "meetup"] as const;

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const { events: t, common, a11y } = dict;

  // Dated events first (soonest first); events without a confirmed date go last.
  const sorted = [...events].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section labelledBy="events-list" className="pt-4 md:pt-4">
        <h2 id="events-list" className="sr-only">
          {t.title}
        </h2>
        {sorted.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((event) => (
              <li key={event.slug}>
                <EventCard event={event} locale={locale} dict={t} newTab={a11y.newTab} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState variant="events" title={t.empty.title} text={t.empty.text}>
            <FormButton newTab={a11y.newTab}>{common.joinKvantics}</FormButton>
          </EmptyState>
        )}
      </Section>

      <Section labelledBy="events-formats" className="pt-8 md:pt-12">
        <SectionHeading id="events-formats" title={t.formats.title} lead={t.formats.lead} />
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((key) => (
            <li key={key} className="border-t border-line pt-5">
              <h3 className="type-h3">{t.categories[key].label}</h3>
              <p className="type-body mt-2 text-fg-2">{t.categories[key].text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

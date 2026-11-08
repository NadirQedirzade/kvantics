import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Hammer, MessagesSquare, Rocket, Trophy, Users } from "lucide-react";
import { IconFeature } from "@/components/Features";
import { FormButton } from "@/components/FormButton";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { divisionMeta } from "@/lib/divisions";
import { localeHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "join");
}

const gainIcons = [Hammer, Users, Trophy, Rocket, GraduationCap, MessagesSquare];

export default async function JoinPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const { join, common, a11y } = dict;

  return (
    <>
      <PageHeader title={join.title} lead={join.lead}>
        <FormButton newTab={a11y.newTab}>{common.applyToJoin}</FormButton>
        <p className="type-caption basis-full text-fg-3">{common.formNote}</p>
      </PageHeader>

      {/* Who can join */}
      <Section labelledBy="join-who" className="pt-8 md:pt-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 id="join-who" className="type-h2">
            {join.who.title}
          </h2>
          <p className="type-lead !text-fg">{join.who.text}</p>
        </div>
      </Section>

      {/* What members gain */}
      <Section labelledBy="join-gains">
        <SectionHeading id="join-gains" title={join.gains.title} />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {join.gains.items.map((item, index) => (
            <IconFeature key={item.title} Icon={gainIcons[index]} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>

      {/* Opportunities (the six divisions) */}
      <Section labelledBy="join-opportunities">
        <SectionHeading id="join-opportunities" title={join.opportunities.title} lead={join.opportunities.lead} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dict.divisions.map((division, index) => {
            const { id, Icon } = divisionMeta[index];
            return (
              <li key={id}>
                <Link
                  href={`${localeHref(locale, "/about")}#${id}`}
                  className="flex min-h-14 items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-3 transition-[border-color,background-color] duration-200 ease-out hover:border-line-strong hover:bg-elevated/60"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue-2">
                    <Icon className="size-[1.125rem]" aria-hidden="true" />
                  </span>
                  <span className="type-small font-semibold text-fg">{division.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Why become a member */}
      <Section labelledBy="join-why">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 id="join-why" className="type-h2">
            {join.why.title}
          </h2>
          <div className="space-y-6">
            {join.why.paragraphs.map((text, index) => (
              <p key={index} className={index === 0 ? "type-lead !text-fg" : "type-body text-fg-2"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we are looking for */}
      <Section labelledBy="join-looking">
        <SectionHeading id="join-looking" title={join.looking.title} />
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {join.looking.items.map((item) => (
            <li key={item.title} className="border-t border-line pt-5">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-body mt-2 text-fg-2">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="type-lead mt-12 rounded-2xl border border-blue/40 bg-blue/10 px-6 py-5 !text-fg">
          {join.looking.banner}
        </p>
      </Section>

      {/* Final call to action */}
      <Section labelledBy="join-cta" className="text-center">
        <h2 id="join-cta" className="type-h1 mx-auto max-w-3xl">
          {join.cta.title}
        </h2>
        <p className="type-lead mx-auto mt-5 max-w-xl">{join.cta.text}</p>
        <div className="mt-10 flex justify-center">
          <FormButton newTab={a11y.newTab}>{common.joinKvantics}</FormButton>
        </div>
        <p className="type-caption mt-4 text-fg-3">{common.formNote}</p>
        <p className="type-small mt-14 text-fg-2">
          {join.workPointer.text}{" "}
          <Link
            href={localeHref(locale, "/work-with-us")}
            className="font-semibold text-blue-2 underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:underline"
          >
            {join.workPointer.link}
          </Link>
        </p>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { HairlineRow } from "@/components/Features";
import { FormButton } from "@/components/FormButton";
import { HeroGraphic } from "@/components/HeroGraphic";
import { Section, SectionHeading } from "@/components/Section";
import { divisionMeta } from "@/lib/divisions";
import { localeHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "home");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const { home, common, a11y } = dict;

  return (
    <>
      {/* Hero */}
      <section className="pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="container-site grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
          <div>
            <h1 className="type-display max-w-3xl">{home.hero.title}</h1>
            <p className="type-lead mt-6 max-w-xl">{home.hero.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <FormButton newTab={a11y.newTab}>{common.joinKvantics}</FormButton>
              <Button href={localeHref(locale, "/projects")} variant="secondary" size="lg">
                {common.exploreProjects}
              </Button>
            </div>
          </div>
          <HeroGraphic className="mx-auto aspect-square w-full max-w-[16rem] md:max-w-[19rem]" />
        </div>
      </section>

      {/* What Kvantics is */}
      <Section labelledBy="home-statement" className="pt-8 md:pt-12">
        <h2 id="home-statement" className="type-h2 max-w-4xl">
          <span className="text-fg">{home.statement.lead}</span>{" "}
          <span className="text-fg-3">{home.statement.rest}</span>
        </h2>
        <div className="mt-16">
          <HairlineRow items={home.pillars} />
        </div>
      </Section>

      {/* Activities preview */}
      <Section labelledBy="home-activities">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="home-activities" title={home.activities.title} lead={home.activities.lead} />
          <Link
            href={`${localeHref(locale, "/about")}#divisions`}
            className="type-small group inline-flex min-h-11 items-center gap-1 font-semibold text-blue-2 transition-colors duration-200 ease-out hover:text-fg"
          >
            {common.seeDivisions}
            <ChevronRight
              className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dict.divisions.map((division, index) => {
            const { Icon, id } = divisionMeta[index];
            return (
              <li key={id} className="border-t border-line pt-6">
                <span className="grid size-11 place-items-center rounded-xl bg-blue/15 text-blue-2">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="type-h3 mt-5">{division.title}</h3>
                <p className="type-body mt-2 text-fg-2">{division.summary}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Community */}
      <Section labelledBy="home-community">
        <div className="grid gap-10 rounded-3xl border border-line bg-surface p-8 md:grid-cols-[1fr_1fr] md:gap-16 md:p-14">
          <div>
            <h2 id="home-community" className="type-h2">
              {home.community.title}
            </h2>
            <p className="type-lead mt-5">{home.community.body}</p>
          </div>
          <ul className="flex flex-col justify-center gap-5">
            {home.community.points.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-blue/15 text-blue-2">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="type-body text-fg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* For businesses */}
      <Section labelledBy="home-business" className="py-8 md:py-12">
        <div className="flex flex-col gap-8 rounded-3xl border border-line-strong bg-elevated/50 p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-14">
          <div className="max-w-xl">
            <h2 id="home-business" className="type-h2">
              {home.business.title}
            </h2>
            <p className="type-body mt-4 text-fg-2">{home.business.text}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <FormButton newTab={a11y.newTab}>{common.workWithUs}</FormButton>
            <Button href={localeHref(locale, "/work-with-us")} variant="ghost" size="lg">
              {home.business.more}
            </Button>
          </div>
        </div>
      </Section>

      {/* Final call to action */}
      <Section labelledBy="home-final" className="text-center">
        <h2 id="home-final" className="type-h1 mx-auto max-w-3xl">
          {home.final.title}
        </h2>
        <p className="type-lead mx-auto mt-5 max-w-xl">{home.final.text}</p>
        <div className="mt-10 flex justify-center">
          <FormButton newTab={a11y.newTab}>{common.joinKvantics}</FormButton>
        </div>
        <p className="type-caption mt-4 text-fg-3">{common.formNote}</p>
      </Section>
    </>
  );
}

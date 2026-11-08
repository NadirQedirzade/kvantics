import type { Metadata } from "next";
import { BookOpen, Flag, Hammer, Lightbulb } from "lucide-react";
import { DivisionMotif } from "@/components/DivisionMotif";
import { HairlineRow } from "@/components/Features";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { divisionMeta } from "@/lib/divisions";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "about");
}

const stepIcons = [BookOpen, Hammer, Flag, Lightbulb];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const { about, divisions } = getDictionary(locale);

  return (
    <>
      <PageHeader title={about.title} lead={about.lead} />

      {/* 1. Who we are */}
      <Section labelledBy="about-who" className="pt-8 md:pt-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 id="about-who" className="type-h2">
            {about.who.title}
          </h2>
          <div className="space-y-6">
            {about.who.paragraphs.map((text, index) => (
              <p key={index} className={index === 0 ? "type-lead !text-fg" : "type-body text-fg-2"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* 2 + 3. Mission and vision */}
      <Section labelledBy="about-mission">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          <div className="bg-surface p-8 md:p-12">
            <h2 id="about-mission" className="type-small font-semibold text-blue-2">
              {about.mission.title}
            </h2>
            <p className="mt-5 text-[1.5rem] font-medium leading-snug tracking-[-0.02em] text-fg">{about.mission.text}</p>
          </div>
          <div className="bg-surface p-8 md:p-12">
            <h2 className="type-small font-semibold text-fg-3">{about.vision.title}</h2>
            <p className="mt-5 text-[1.5rem] font-medium leading-snug tracking-[-0.02em] text-fg">{about.vision.text}</p>
          </div>
        </div>
      </Section>

      {/* 4. What we do */}
      <Section labelledBy="about-what">
        <SectionHeading id="about-what" title={about.whatWeDo.title} lead={about.whatWeDo.lead} />
        <div className="mt-14">
          <HairlineRow items={about.whatWeDo.items} />
        </div>
      </Section>

      {/* 5. Divisions */}
      <Section id="divisions" labelledBy="about-divisions">
        <SectionHeading id="about-divisions" title={about.divisions.title} lead={about.divisions.lead} />
        <ul className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {divisions.map((division, index) => {
            const { id, Icon } = divisionMeta[index];
            return (
              <li key={id} id={id} className="scroll-mt-24">
                <DivisionMotif id={id} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue/15 text-blue-2">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="type-h3">{division.title}</h3>
                </div>
                <p className="type-body mt-4 text-fg-2">{division.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {division.tags.map((tag) => (
                    <li key={tag} className="type-caption rounded-full border border-line-strong px-3 py-1 text-fg-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 6. Approach: a real sequence, so connected steps */}
      <Section labelledBy="about-approach">
        <SectionHeading id="about-approach" title={about.approach.title} lead={about.approach.lead} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-gradient-to-b from-blue via-blue/40 to-transparent md:bottom-auto md:left-6 md:right-6 md:top-[1.375rem] md:h-px md:w-auto md:bg-gradient-to-r"
          />
          {about.approach.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li key={step.title} className="relative flex gap-5 md:block">
                <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-blue text-white ring-8 ring-bg">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="md:mt-6">
                  <h3 className="type-h3">{step.title}</h3>
                  <p className="type-body mt-2 text-fg-2">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>
    </>
  );
}

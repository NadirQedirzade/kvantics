import type { Metadata } from "next";
import Link from "next/link";
import { CodeXml, Cpu, Globe, LayoutDashboard, Lightbulb } from "lucide-react";
import { IconFeature } from "@/components/Features";
import { FormButton } from "@/components/FormButton";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { localeHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "work");
}

const serviceIcons = [Globe, CodeXml, LayoutDashboard, Cpu, Lightbulb];

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const { work, common, a11y } = dict;

  return (
    <>
      <PageHeader title={work.title} lead={work.lead}>
        <FormButton newTab={a11y.newTab}>{common.workWithUs}</FormButton>
        <p className="type-caption basis-full text-fg-3">{common.formNote}</p>
      </PageHeader>

      <Section labelledBy="work-services" className="pt-8 md:pt-8">
        <SectionHeading id="work-services" title={work.services.title} />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {work.services.items.map((item, index) => (
            <IconFeature key={item.title} Icon={serviceIcons[index]} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>

      <Section labelledBy="work-who">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="work-who" className="type-h2">
              {work.whoFor.title}
            </h2>
            <p className="type-lead mt-5 !text-fg">{work.whoFor.text}</p>
          </div>
          <div>
            <h2 className="type-h2">{work.expectations.title}</h2>
            <p className="type-lead mt-5">{work.expectations.text}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="work-how" className="text-center">
        <h2 id="work-how" className="type-h1 mx-auto max-w-3xl">
          {work.how.title}
        </h2>
        <p className="type-lead mx-auto mt-5 max-w-xl">{work.how.text}</p>
        <div className="mt-10 flex justify-center">
          <FormButton newTab={a11y.newTab}>{common.workWithUs}</FormButton>
        </div>
        <p className="type-caption mt-4 text-fg-3">{common.formNote}</p>
        <p className="type-small mt-14 text-fg-2">
          {work.backToJoin.text}{" "}
          <Link
            href={localeHref(locale, "/join")}
            className="font-semibold text-blue-2 underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:underline"
          >
            {work.backToJoin.link}
          </Link>
        </p>
      </Section>
    </>
  );
}

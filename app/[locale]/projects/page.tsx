import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { EmptyState } from "@/components/EmptyState";
import { FormButton } from "@/components/FormButton";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { projects } from "@/data/projects";
import { localeHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/page";
import { getDictionary } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata(await resolveLocale(params), "projects");
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const { projects: t, common, a11y } = dict;

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section labelledBy="projects-list" className="pt-4 md:pt-4">
        <h2 id="projects-list" className="sr-only">
          {t.title}
        </h2>
        {projects.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} locale={locale} dict={t} newTab={a11y.newTab} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState variant="projects" title={t.empty.title} text={t.empty.text}>
            <FormButton newTab={a11y.newTab}>{common.joinKvantics}</FormButton>
            <Button href={`${localeHref(locale, "/about")}#divisions`} variant="secondary" size="lg">
              {t.empty.secondary}
            </Button>
          </EmptyState>
        )}
      </Section>

      {projects.length === 0 ? (
        <Section labelledBy="projects-anatomy" className="pt-8 md:pt-12">
          <SectionHeading id="projects-anatomy" title={t.anatomy.title} />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {t.anatomy.items.map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="type-h3">{item.title}</h3>
                <p className="type-body mt-2 text-fg-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section labelledBy="projects-areas" className="pt-8 md:pt-12">
        <SectionHeading id="projects-areas" title={t.areas.title} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {t.areas.items.map((area) => (
            <li key={area} className="type-small rounded-full border border-line-strong px-4 py-2 text-fg-2">
              {area}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

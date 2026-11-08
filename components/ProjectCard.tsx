import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { LogoMark } from "@/components/Logo";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/localized";
import type { Dictionary } from "@/lib/translations";

const statusTone: Record<Project["status"], string> = {
  idea: "border-line-strong text-fg-2",
  "in-progress": "border-blue/50 bg-blue/15 text-blue-2",
  prototype: "border-line-strong bg-fill-1 text-fg-2",
  completed: "border-positive/40 bg-positive/10 text-positive",
};

/** Project card. Every field except name, description, category and status is optional. */
export function ProjectCard({
  project,
  locale,
  dict,
  newTab,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary["projects"];
  newTab: string;
}) {
  const name = pick(project.name, locale);
  return (
    <article className="h-full group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,background-color] duration-200 ease-out hover:border-line-strong hover:bg-elevated/60">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-elevated">
        {project.image ? (
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={pick(project.image.alt, locale)}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-surface" aria-hidden="true">
            <LogoMark className="size-9 opacity-[0.14] grayscale" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="type-caption rounded-full border border-line-strong px-2.5 py-0.5 text-fg-2">
            {pick(project.category, locale)}
          </span>
          <span className={`type-caption rounded-full border px-2.5 py-0.5 ${statusTone[project.status]}`}>
            {dict.status[project.status]}
          </span>
        </div>
        <h3 className="type-h3 mt-4">{name}</h3>
        <p className="type-body mt-2 text-fg-2">{pick(project.description, locale)}</p>
        {project.technologies?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={dict.anatomy.items[1].title}>
            {project.technologies.map((tech) => (
              <li key={tech} className="type-caption rounded-md bg-fill-1 px-2 py-1 text-fg-2">
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        {project.githubUrl || project.demoUrl ? (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-6">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-small inline-flex min-h-11 items-center gap-1 font-semibold text-blue-2 hover:text-fg"
              >
                {dict.links.github}
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> {newTab}</span>
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-small inline-flex min-h-11 items-center gap-1 font-semibold text-blue-2 hover:text-fg"
              >
                {dict.links.demo}
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> {newTab}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

import type { LocalizedText } from "@/lib/i18n";

export type ProjectStatus = "idea" | "in-progress" | "prototype" | "completed";

export interface Project {
  /** Unique, URL-safe id. */
  slug: string;
  name: string | LocalizedText;
  description: LocalizedText;
  /** e.g. { az: "Veb sayt", en: "Website", ru: "Сайт" } */
  category: LocalizedText;
  status: ProjectStatus;
  technologies?: string[];
  /** Put the file in /public/images/ and reference it as "/images/your-file.webp". */
  image?: { src: string; width: number; height: number; alt: LocalizedText };
  githubUrl?: string;
  demoUrl?: string;
}

/**
 * Add real projects here. While this array is empty, the Projects page shows a
 * designed empty state, so no placeholder content is ever presented as real work.
 *
 * Example:
 *   {
 *     slug: "barbershop-booking",
 *     name: "Barbershop booking site",
 *     description: { az: "...", en: "...", ru: "..." },
 *     category: { az: "Veb sayt", en: "Website", ru: "Сайт" },
 *     status: "in-progress",
 *     technologies: ["Next.js", "Tailwind CSS"],
 *     githubUrl: "https://github.com/your-org/your-repo",
 *   },
 */
export const projects: Project[] = [];

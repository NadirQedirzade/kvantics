import { CodeXml, Cpu, GraduationCap, Rocket, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DivisionId = "software" | "robotics" | "competitions" | "startups" | "events" | "education";

/** Index-aligned with `dictionary.divisions` in lib/translations.ts. */
export const divisionMeta: { id: DivisionId; Icon: LucideIcon }[] = [
  { id: "software", Icon: CodeXml },
  { id: "robotics", Icon: Cpu },
  { id: "competitions", Icon: Trophy },
  { id: "startups", Icon: Rocket },
  { id: "events", Icon: Users },
  { id: "education", Icon: GraduationCap },
];

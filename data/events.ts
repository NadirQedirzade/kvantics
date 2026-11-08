import type { LocalizedText } from "@/lib/i18n";

export type EventCategory = "hackathon" | "startup" | "robotics" | "workshop" | "seminar" | "meetup";
export type RegistrationStatus = "open" | "soon" | "closed" | "completed";

export interface KvanticsEvent {
  /** Unique, URL-safe id. */
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  category: EventCategory;
  /** ISO 8601, e.g. "2027-02-14" or "2027-02-14T10:00:00+04:00". Omit while the date is unconfirmed. */
  date?: string;
  /** Physical location. Leave out for online-only events. */
  location?: LocalizedText;
  online?: boolean;
  registration: RegistrationStatus;
  /** Shown as a "Register" button when registration is "open". */
  registrationUrl?: string;
}

/**
 * Add real, confirmed events here. While this array is empty, the Events page shows
 * a designed empty state. Never add an event that has not been confirmed.
 *
 * Example:
 *   {
 *     slug: "spring-hackathon",
 *     name: { az: "...", en: "Spring Hackathon", ru: "..." },
 *     description: { az: "...", en: "...", ru: "..." },
 *     category: "hackathon",
 *     date: "2027-04-10T10:00:00+04:00",
 *     location: { az: "Bakı", en: "Baku", ru: "Баку" },
 *     registration: "open",
 *     registrationUrl: "https://forms.gle/...",
 *   },
 */
export const events: KvanticsEvent[] = [];

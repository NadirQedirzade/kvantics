import { notFound } from "next/navigation";

/** Any unknown path under a valid language renders the localized 404 inside the normal layout. */
export default function CatchAll() {
  notFound();
}

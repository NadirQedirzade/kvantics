export { FORM_URL } from "./links";

export const SITE_NAME = "Kvantics";

/**
 * Absolute site URL, used for canonical links, Open Graph and the sitemap.
 * Resolved from optional environment variables; Vercel provides the
 * VERCEL_* ones automatically, so no configuration is required to deploy.
 */
export function getSiteUrl(): URL | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercel = process.env.VERCEL_URL;
  const raw = explicit || (vercelProd && `https://${vercelProd}`) || (vercel && `https://${vercel}`);
  if (!raw) return undefined;
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}

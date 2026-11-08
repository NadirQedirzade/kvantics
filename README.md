# Kvantics — official website

Website of **Kvantics**, a student-driven innovation and technology ecosystem in Azerbaijan.
Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Lucide icons · Motion** and ready to deploy on **Vercel**.

- 6 pages, each available in **Azerbaijani (default), English and Russian**
- No database, no backend, no required environment variables
- Content lives in plain TypeScript files, so it is easy to edit

| Page | Route (AZ shown) |
| --- | --- |
| Home | `/az` |
| About Us (who we are, mission, vision, what we do, six divisions, approach) | `/az/about` |
| Projects | `/az/projects` |
| Events | `/az/events` |
| Join Us | `/az/join` |
| Work With Us | `/az/work-with-us` |

`/` redirects to the visitor's remembered language, or to `/az` (the default).
Unprefixed paths such as `/about` redirect to `/az/about`.

---

## 1. Run it locally

Requirements: **Node.js 20.9 or newer** (22 LTS recommended) and npm.

```bash
npm install
npm run dev        # development server on http://localhost:3000
```

Production build:

```bash
npm run build      # compiles and pre-renders every page
npm start          # serves the production build on http://localhost:3000
npm run typecheck  # optional: TypeScript check only
```

> A warning that `metadataBase` is not set is normal on a local build. On Vercel the site URL is detected
> automatically (see "Optional environment variable" below).

---

## 2. Editing content

### Text and translations — `lib/translations.ts`
Every sentence on the site is in this file, in three blocks: `az`, `en`, `ru`.
Azerbaijani defines the shape; if you add a key to one language, TypeScript will fail the build until you add it to the others, so a language can never be left half-translated.

`divisions` (the six divisions) is index-aligned with `divisionMeta` in `lib/divisions.ts`
(icon and illustration per division).

### Projects — `data/projects.ts`
The `projects` array is **empty on purpose**: while it is empty the page shows a designed empty state, so nothing fictional is ever shown as real work.
To publish a project, add an entry (an example is in the file's comment):

```ts
{
  slug: "barbershop-booking",
  name: "Barbershop booking site",
  description: { az: "…", en: "…", ru: "…" },
  category: { az: "Veb sayt", en: "Website", ru: "Сайт" },
  status: "in-progress",            // idea | in-progress | prototype | completed
  technologies: ["Next.js", "Tailwind CSS"],
  image: { src: "/images/barbershop.webp", width: 1200, height: 675, alt: { az: "…", en: "…", ru: "…" } },
  githubUrl: "https://github.com/…",  // optional
  demoUrl: "https://…",               // optional
}
```
Put images in `public/images/`. Only `name`, `description`, `category` and `status` are required.

### Events — `data/events.ts`
Also empty on purpose. Add **confirmed** events only:

```ts
{
  slug: "spring-hackathon",
  name: { az: "…", en: "Spring Hackathon", ru: "…" },
  description: { az: "…", en: "…", ru: "…" },
  category: "hackathon",   // hackathon | startup | robotics | workshop | seminar | meetup
  date: "2027-04-10T10:00:00+04:00",   // optional until confirmed
  location: { az: "Bakı", en: "Baku", ru: "Баку" },   // optional
  online: false,
  registration: "open",    // open | soon | closed | completed
  registrationUrl: "https://forms.gle/…",   // shown as a Register button when open
}
```

### The application form link — `lib/links.ts`
All "Join Kvantics", "Apply to Join", "Work With Us" buttons (navbar, mobile menu, every page and the footer) use the single `FORM_URL` constant:
`https://forms.gle/x3buqrTJgjCFoWeKA`. They open in a new tab with `rel="noopener noreferrer"`.
To change the form, edit that one line.

### Colors, type and motion — `app/globals.css`
Design tokens (colors, fonts, easing curves, type scale) are defined at the top of this file. Components use token names such as `bg-surface` and `text-fg-2`, never raw hex values.

### Logo and icons
The K mark is the `LogoMark` component (`components/Logo.tsx`). Favicons are `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`; the social-share image is `public/og.png` (1200×630).

---

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Kvantics website"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```
(`node_modules`, `.next` and local env files are already in `.gitignore`.)

## 4. Deploy on Vercel

1. Sign in at <https://vercel.com> and click **Add New → Project**.
2. **Import** the GitHub repository.
3. Vercel detects **Next.js** automatically. Leave the defaults (`npm install`, `npm run build`, no output directory to set). No `vercel.json` is needed.
4. Click **Deploy**. Every later `git push` to `main` redeploys automatically.
5. To use your own domain: **Project → Settings → Domains**.

### Optional environment variable
`NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.az`) sets the canonical address used in Open Graph tags and the sitemap.
It is **not required**: on Vercel the site URL is picked up automatically. Set it once you attach a custom domain so search engines and social previews use that domain.

---

## 5. How it works (for developers)

```
app/
  [locale]/            layout, template (page transition), and every page
  globals.css          design tokens, type scale, materials, motion
  robots.ts · sitemap.ts · icon.svg · apple-icon.png · favicon.ico
components/            Navbar, MobileMenu, LanguageMenu, Button, Footer, cards, graphics
data/                  projects.ts, events.ts
lib/                   translations, i18n, metadata, motion tokens, links
middleware.ts          language redirect (cookie or default az)
public/                og.png
```

- **Languages:** every route lives under `/az`, `/en` or `/ru`. Choosing a language in the menu stores a small `kvantics-lang` cookie (a functional preference; no tracking) so the choice is remembered when visiting `/`.
- **SEO:** unique title and description per page and language, canonical + `hreflang` alternates, Open Graph and Twitter cards, `robots.txt`, `sitemap.xml`, and Organization JSON-LD.
- **Fonts:** the platform system font is used first (San Francisco on Apple devices); Inter Variable is bundled (self-hosted, no external requests) as the fallback, with Latin Extended for Azerbaijani letters and Cyrillic for Russian.
- **Accessibility:** skip link, visible focus rings, 44 px touch targets, labelled controls, `aria-current` on the active page, a focus-trapped and dismissible mobile menu, an arrow-key navigable language menu, and WCAG-AA contrast for text.
- **Motion:** springs (Motion) for button presses, the language menu, the mobile menu and the active-page indicator; CSS for the page entrance and hero drawing. `prefers-reduced-motion` removes movement and keeps simple fades; `prefers-reduced-transparency` and `prefers-contrast: more` swap translucent surfaces for solid ones.

# site-templates

An Astro starter for small-business marketing sites. The same skeleton I use to ship £200 client sites in 7 days.

Static-first, zero-JS by default, near-perfect Core Web Vitals on cheap hosting. Every customer-facing string lives in **one config file**, so a new site is a 30-minute job: edit `src/site.config.ts`, set a domain in `astro.config.mjs`, and ship.

## What you get

- **Home page** — config-driven hero, services grid, "why us", "how it works", service areas, blog teaser, contact CTA.
- **About page** — story, values, "at a glance" sidebar.
- **Contact page** — phone, email, address, opening hours, Google Maps deep-link, enquiry form (Formspree-compatible).
- **Blog** — Markdown content collection with index and dynamic post pages; JSON-LD `BlogPosting` schema baked in.
- **SEO** — canonical URLs, OpenGraph, Twitter card, `LocalBusiness` JSON-LD, sitemap, robots.txt.
- **Accessibility** — skip link, focus rings, semantic landmarks, ARIA-correct mobile menu, reduced-motion fallback.
- **Design system** — one CSS file. Brand colour is injected per-site via CSS custom properties — no rebuild required.
- **Mobile-first responsive** — full-screen mobile menu, accordion mega-nav on small screens, three breakpoints.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro](https://astro.build) 5 | Zero JS by default. Ships HTML; hydrates only what you tell it to. |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) (or Vercel) | Global edge cache, free tier, automatic HTTPS. |
| Forms | [Formspree](https://formspree.io) (default) or any webhook | No backend needed. Swap the action URL in `contact.astro`. |
| Email | [Resend](https://resend.com) (optional) | Wire up in a serverless function if you need transactional email. |
| CAPTCHA | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) (optional) | Privacy-friendly, EU-hostable, no cookies. |
| Payments | [Stripe Elements](https://stripe.com/payments/elements) (optional) | Drop-in payment form. PCI scope minimised. |

## Why I ship this stack

I have shipped 200+ small-business sites on this skeleton. Some patterns hold up:

- **Sub-second loads everywhere.** Static HTML + edge cache + no client-side framework runtime means LCP under a second on a 4G phone in a field.
- **Near-perfect Core Web Vitals out of the box.** The default styles avoid layout shift; images are sized; fonts are preconnected.
- **Zero JS by default.** The only client-side script is the mobile menu, which is ~30 lines of vanilla JS. No React, no hydration, no waterfalls.
- **Cloudflare edge cache.** Free, global, fast. Pair with `cache-control: public, max-age=31536000, immutable` on hashed assets.
- **One config file.** Designers and copywriters can edit `src/site.config.ts` without touching templates. New site in 30 minutes.
- **Cheap to host.** Cloudflare Pages free tier covers most small-business traffic. Vercel hobby tier likewise.

## Quick start

```bash
# 1. Scaffold a new project from this template
pnpm create astro@latest -- --template github:sansware/site-templates my-client-site

# 2. Install dependencies
cd my-client-site
pnpm install

# 3. Dev server
pnpm dev
# → http://localhost:4321

# 4. Build
pnpm build
# → dist/
```

If you prefer `npm` or `yarn`, swap them in — they all work with Astro.

## Customising for a client

There are five files you need to touch. Everything else, leave alone.

### 1. `src/site.config.ts` — every customer-facing string

This is the file. It has the business name, phone, email, address, hours, brand colour, navigation, hero copy, services, "why us" points, "how it works" steps, service areas, the about page, the contact page, and the CTA band footer. Edit it and the whole site updates.

The fields are typed, so your editor will tell you if you drop one.

### 2. `astro.config.mjs` — canonical URL

```js
export default defineConfig({
  site: "https://your-client-domain.co.uk",  // ← change this
  integrations: [sitemap()],
  // ...
});
```

This drives the sitemap and every canonical URL. Get it right before deploying.

### 3. `public/favicon.svg` — favicon

Replace the placeholder with a 64×64 SVG that matches the brand. Inline SVG is fastest; keep it under 1KB.

### 4. `src/pages/contact.astro` — enquiry form endpoint

Find this line and replace `your-form-id` with the real Formspree ID (or swap the whole form to your own webhook):

```html
<form ... action="https://formspree.io/f/your-form-id" method="POST" ...>
```

### 5. `public/robots.txt` — sitemap URL

Replace `example.com` with the real domain.

## Brand colours

Four CSS custom properties drive the entire colour scheme:

```ts
brand: {
  accent: "#2563eb",       // primary buttons, links, accents
  accentDark: "#1d4ed8",   // hover state, dark fills
  accentGlow: "#60a5fa",   // light highlights on dark backgrounds
  ink: "#0f172a",          // headings, dark surfaces
}
```

`Base.astro` reads these and injects them as inline CSS variables on `<html>`. The shared `global.css` references `var(--accent)` etc. — so the entire site re-themes from this one block.

## Schema.org / JSON-LD

The home page emits `LocalBusiness` schema by default. To switch — for example for a cafe, dental practice, or auto repair — change `schemaType` in `site.config.ts` to a more specific `schema.org` type (`CafeOrCoffeeShop`, `Dentist`, `AutoRepair`, etc.).

Blog posts emit `BlogPosting` schema automatically.

## Optional integrations

The `.env.example` lists the env vars used by optional integrations. Copy to `.env`, fill in the values you need, and they will be picked up by Astro's `import.meta.env`:

- `PUBLIC_FORM_ENDPOINT` — alternate form endpoint (Web3Forms, your own webhook).
- `PUBLIC_TURNSTILE_SITE_KEY` — if you want CAPTCHA on the contact form.
- `RESEND_API_KEY` — server-only; only used in serverless functions.
- `PUBLIC_STRIPE_PUBLISHABLE_KEY` — if the site has Stripe Elements anywhere.

Never commit `.env`. The `.gitignore` already excludes it.

## Deploying

### Cloudflare Pages

1. Push your repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `pnpm build`. Output directory: `dist`.
4. Add a custom domain.

### Vercel

1. Push your repo to GitHub.
2. Vercel → Add New → Project → Import.
3. Framework preset: Astro. Build settings detected automatically.
4. Add a custom domain.

Both work. Cloudflare Pages has the more generous free tier; Vercel has better preview deploys.

## File structure

```
.
├── astro.config.mjs           # Canonical URL + integrations
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg            # Replace per client
│   └── robots.txt             # Replace domain per client
└── src/
    ├── site.config.ts         # ⭐ Every customer-facing string
    ├── content.config.ts      # Blog collection schema
    ├── content/blog/          # Markdown posts
    ├── layouts/
    │   └── Base.astro         # Shared layout (Header + Footer + SEO)
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Hero.astro
    │   └── Seo.astro
    ├── pages/
    │   ├── index.astro        # Home — service grid, why, how, areas, blog, contact
    │   ├── about.astro
    │   ├── contact.astro
    │   └── blog/
    │       ├── index.astro
    │       └── [...slug].astro
    └── styles/
        └── global.css         # Entire design system
```

## License

MIT. Use it for client work, fork it, sell sites built on top of it — no attribution required (a link in the footer is appreciated but not demanded).

## Credit

Built and maintained by [sansware](https://github.com/sansware). The same template I use day-to-day for production small-business sites. If you find a bug or want a feature, open an issue or PR.

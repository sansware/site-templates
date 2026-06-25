/*
 * site-templates — per-site configuration (sample data).
 *
 * Every customer-facing string lives here. Replace the SAMPLE values with
 * real business details and the whole site picks them up — header, hero,
 * services, footer, SEO and JSON-LD schema. There is nothing customer-
 * specific anywhere else in src/ — keep it that way.
 */
export const site = {
  name: "[CLIENT_NAME]",
  domain: "example.com",
  url: "https://example.com",
  phone: "01234 567 890",
  phoneE164: "+441234567890",
  email: "hello@example.com",
  tagline: "Short single-sentence promise about what you do, and for whom",
  intro:
    "A one-paragraph plain-English description of the business — what you do, where you do it, and why someone should choose you. Two sentences is plenty. This text appears in the home meta description, the OpenGraph card and the JSON-LD schema, so write it for both humans and search engines.",
  schemaType: "LocalBusiness",
  address: { street: "1 Example Street", locality: "Example Town", postcode: "AB1 2CD" },
  hours: [
    { day: "Monday – Friday", time: "9:00 – 17:30" },
    { day: "Saturday", time: "10:00 – 14:00" },
    { day: "Sunday", time: "Closed" },
  ],
  brand: { accent: "#2563eb", accentDark: "#1d4ed8", accentGlow: "#60a5fa", ink: "#0f172a" },
  social: {},
  nav: [
    {
      label: "Services", href: "#services",
      mega: [
        { heading: "What we do", links: [
          { label: "Service one", href: "#services" },
          { label: "Service two", href: "#services" },
          { label: "Service three", href: "#services" },
          { label: "Service four", href: "#services" },
          { label: "Service five", href: "#services" },
          { label: "Service six", href: "#services" },
        ]},
      ],
    },
    { label: "Why us", href: "#why" },
    { label: "How it works", href: "#how" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: "Short qualifier · Where you operate · When you open",
    h1: "A short, confident headline.",
    lede:
      "A 1–2 sentence supporting paragraph that explains what the business does and the main benefit to the customer. Keep it specific — concrete words convert; vague ones do not.",
  },
  trust: [
    { strong: "Trust point", label: "One-line proof" },
    { strong: "Trust point", label: "One-line proof" },
    { strong: "Trust point", label: "One-line proof" },
    { strong: "Trust point", label: "One-line proof" },
  ],
  services: [
    { ico: "★", title: "Service one", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
    { ico: "★", title: "Service two", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
    { ico: "★", title: "Service three", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
    { ico: "★", title: "Service four", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
    { ico: "★", title: "Service five", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
    { ico: "★", title: "Service six", text: "Two sentences describing this service. Lead with the benefit, follow with the detail. Avoid jargon." },
  ],
  why: [
    { title: "Reason one", text: "Why customers should choose this business over the competition. Be specific — concrete claims beat vague ones." },
    { title: "Reason two", text: "Why customers should choose this business over the competition. Be specific — concrete claims beat vague ones." },
    { title: "Reason three", text: "Why customers should choose this business over the competition. Be specific — concrete claims beat vague ones." },
    { title: "Reason four", text: "Why customers should choose this business over the competition. Be specific — concrete claims beat vague ones." },
  ],
  how: [
    { title: "Step one", text: "What the customer does first. One short paragraph." },
    { title: "Step two", text: "What happens next. One short paragraph." },
    { title: "Step three", text: "How the engagement is delivered. One short paragraph." },
  ],
  areas: ["Town one", "Town two", "Town three", "County", "Region", "Surrounding area"],
  servicesHeading: "What we do — described in plain English.",
  servicesSub: "A one-line summary of the service range. Keep it tight.",
  whyHeading: "The right choice for [CLIENT_NAME]'s customers.",
  whyText:
    "A 2–3 sentence paragraph expanding on why this business is the right pick. Lean on real specifics — years of experience, certifications, local roots, materials, or outcomes — rather than empty marketing language.",
  howHeading: "How it works, start to finish.",
  areasHeading: "Where we work.",
  areasSub: "A one-line description of the geographic footprint.",
  blogHeading: "Advice, guides & news",
  about: {
    heading: "About [CLIENT_NAME]",
    lead: "A single-paragraph summary of the business — written warmly and in plain English. This is what appears on the About page hero.",
    story: [
      "Paragraph one of the longer story. Who started the business, why, and what it stands for.",
      "Paragraph two. What has changed since then, and what makes the business worth choosing today.",
      "Paragraph three. A short note on how to get in touch or what to do next.",
    ],
    valuesHeading: "What we believe in",
    values: [
      { title: "Value one", text: "A one-sentence description of a guiding value." },
      { title: "Value two", text: "A one-sentence description of a guiding value." },
      { title: "Value three", text: "A one-sentence description of a guiding value." },
    ],
  },
  contact: {
    heading: "Get in touch",
    intro: "Tell us what you need and we will get back to you — usually the same day.",
  },
  ctaBand: {
    eyebrow: "How to reach us",
    heading: "Ready to get started?",
    label: "Get in touch",
  },
};
export type Site = typeof site;

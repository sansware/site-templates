// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` drives canonical URLs, the sitemap and SEO. Set per client.
// Override at build time with the `SITE` env var, or edit the default below.
const PLACEHOLDER_SITE = "https://example.com";
const site = process.env.SITE || PLACEHOLDER_SITE;

// Build-time guard: refuse to ship with the placeholder domain.
// `astro dev` is fine — only fail the production build.
if (process.argv.includes("build") && site === PLACEHOLDER_SITE) {
  throw new Error(
    "[site-templates] `site` is still set to the placeholder " +
      `"${PLACEHOLDER_SITE}". Set the SITE env var or edit astro.config.mjs ` +
      "before running `astro build` so canonical URLs, the sitemap and SEO are correct.",
  );
}

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});

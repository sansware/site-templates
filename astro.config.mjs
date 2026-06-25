// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` drives canonical URLs, the sitemap and SEO. Set per client.
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});

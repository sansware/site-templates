import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* Blog collection — drop a Markdown file in src/content/blog/ and it appears. */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default("[CLIENT_NAME]"),
  }),
});

export const collections = { blog };

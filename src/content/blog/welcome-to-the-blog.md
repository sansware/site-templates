---
title: "Welcome to the blog"
description: "A sample blog post to demonstrate the Markdown content collection. Replace or delete this file when adding real articles."
date: 2026-01-01
author: "[CLIENT_NAME]"
---

This is a sample blog post that ships with the `site-templates` starter. It exists to demonstrate the Markdown content collection — and to give the home page and blog index a card to render against on day one.

## How content collections work

Astro reads every `.md` file in `src/content/blog/` and exposes them via the typed `getCollection("blog")` API. The schema lives in `src/content.config.ts` — each post must have a `title`, `description`, `date`, and an optional `author` (defaulting to the client name).

The home page automatically pulls the three most recent posts. The blog index (`/blog`) lists every post in reverse chronological order. Individual posts render at `/blog/<slug>/` via `[...slug].astro`.

## Writing tips

- Use plain English. Two-syllable words beat four-syllable words.
- Lead with the benefit to the reader, not the credentials of the author.
- Aim for 800–1,500 words for the kind of "advice & guides" piece that builds search authority over time.
- Use H2 (`##`) for section breaks. Use H3 (`###`) sparingly.

## Replacing this post

Delete this file and drop your own Markdown into `src/content/blog/`. The slug is the filename. No registration step, no rebuild config — Astro picks it up automatically.

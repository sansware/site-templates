# Contributing

Thanks for considering a contribution. This template is small and opinionated on purpose, so contributions are most welcome when they fit the shape below.

## In scope

- Bug fixes (broken builds, accessibility regressions, SEO breakage)
- Small, clearly-justified improvements to defaults (e.g. better caching headers, sharper Core Web Vitals)
- Documentation fixes and clarifications

## Out of scope (please open an issue first)

- New page templates or routes
- New integrations or dependencies
- Framework or build-tool swaps
- Styling overhauls

## Workflow

1. Fork and create a branch off `main`.
2. Make your change. Keep diffs focused — one concern per PR.
3. Run `pnpm install && pnpm build` locally. The CI job on your PR must pass.
4. Open a PR using the template. Link any related issue.

## Style

- Match the existing code style. No formatter is enforced; if in doubt, follow the file you are editing.
- Keep comments minimal. Only explain the *why* if it is not obvious.
- No new runtime dependencies without discussion.

## License

By contributing you agree your work is released under the [MIT License](./LICENSE).

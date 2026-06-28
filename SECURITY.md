# Security policy

## Reporting a vulnerability

If you find a security issue in this template, please **do not** open a public GitHub issue.

Email **security@ukwebmarketing.com** with:

- A description of the issue
- Steps to reproduce
- The affected file(s) and version (commit SHA or release tag)
- Your name / handle if you would like credit

You should receive an acknowledgement within 2 working days. We aim to ship a fix or mitigation within 14 days for confirmed issues. Coordinated disclosure is appreciated.

## Scope

This template is consumed by many UK Web Marketing client sites. Issues that meaningfully apply across consumers — for example template-injection, default-config disclosure, weak CSP defaults, or insecure form-handling examples — are in scope.

Issues affecting a single live deployment (rather than the template itself) should be reported to the operator of that site.

## Out of scope

- Findings on third-party services referenced in `.env.example` (Formspree, Resend, Stripe, Cloudflare Turnstile) — report those to the respective vendors.
- Best-practice suggestions with no concrete impact — please open a regular GitHub issue or PR instead.

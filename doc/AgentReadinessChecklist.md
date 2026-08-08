# Agent Readiness Checklist

Source: https://isitagentready.com/andrewgreenhill.dev

## Recommendation Progress

- [x] 1. robots.txt: Added root-level robots file and verified 200 text/plain.
- [x] 2. sitemap.xml: Added root-level sitemap and linked it from robots.txt.
- [ ] 3. Link headers on homepage: discovery resources added; homepage Link header still pending CDN rule.
- [ ] 4-14) Remaining recommendations pending implementation (to be added here in exact order from your report).

## Recommendation 3 Details

- Title: Link headers
- Goal: Include Link response headers for agent discovery (RFC 8288)
- Issue: No Link headers found on homepage
- Fix summary: Add Link response headers on `/` that point to agent-useful resources.
- Skill: https://isitagentready.com/.well-known/agent-skills/link-headers/SKILL.md
- Docs: https://www.rfc-editor.org/rfc/rfc8288 and https://www.rfc-editor.org/rfc/rfc9727#section-3

### Implemented in Repo

- Added API catalog target at `/.well-known/api-catalog.json`.
- Added service documentation target at `/docs/api.md`.

### Required Hosting/CDN Step (Cloudflare)

- Add response header on path `/`:
	- Name: `Link`
	- Value: `</.well-known/api-catalog.json>; rel="api-catalog", </docs/api.md>; rel="service-doc"`
- This header is required in the HTTP response itself; HTML `<link>` tags are not sufficient for this check.

## Post-Deploy Scan

- Scan run: 2026-08-08
- Level: Basic Web Presence
- robots.txt: pass (robots.txt exists with valid format)
- sitemap.xml: pass (sitemap.xml exists with valid structure)
- link headers: fail (No Link headers found on homepage)

## Post-Deploy Scan (After Recommendation #3 Repo Changes)

- Scan run: 2026-08-08
- Level: Basic Web Presence
- link headers: fail (No Link headers found on homepage)
- Direct check: `GET /` returns 200 but no `Link` response header.
- Outcome: repo-side targets are published; CDN response header rule is still required.

## Notes

- Recommendation #2 was inferred from scan check ordering and status details from the public scan API.
- This project is currently a static Vite site, so some protocol/auth recommendations may be phased in later.
- For GitHub Pages origin deployments, Link response headers are best added at Cloudflare via Transform Rules or a Worker.

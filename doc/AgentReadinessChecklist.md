# Agent Readiness Checklist

Source: https://isitagentready.com/andrewgreenhill.dev

## Recommendation Progress

- [x] 1. robots.txt: Added root-level robots file and verified 200 text/plain.
- [x] 2. sitemap.xml: Added root-level sitemap and linked it from robots.txt.
- [x] 3. Link headers on homepage: Cloudflare response header rule added; check now passes.
- [x] 4. DNS for AI Discovery (DNS-AID): HTTPS records and DNSSEC enabled; check now passes.
- [ ] 5-14) Remaining recommendations pending implementation (to be added here in exact order from your report).

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

### Completion Status

- Cloudflare proxy enabled for site traffic.
- Link response header rule deployed at Cloudflare.
- Current scan status: pass.

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

## Post-Deploy Scan (After Cloudflare Rule + Proxy)

- Scan run: 2026-08-09
- Level: Basic Web Presence
- robots.txt: pass
- sitemap.xml: pass
- link headers: pass
- dns-aid: fail (DNS for AI Discovery (DNS-AID) well-known entrypoint records not found)

## Recommendation 4 Details

- Title: DNS for AI Discovery (DNS-AID)
- Goal: Publish DNS for AI Discovery (DNS-AID) records for DNS-based agent discovery.
- Issue: DNS for AI Discovery (DNS-AID) well-known entrypoint records not found.
- Fix summary: publish SVCB/HTTPS records under the `_agents` namespace and ensure DNSSEC is enabled for authenticated responses.
- Skill: https://isitagentready.com/.well-known/agent-skills/dns-aid/SKILL.md
- Docs: https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/ and https://www.rfc-editor.org/rfc/rfc9460

### Audit Summary

- Resolver checks for `_index._agents`, `_a2a._agents`, and `_mcp._agents` returned NXDOMAIN for SVCB/HTTPS/TXT.
- Conclusion from scanner: DNS-AID well-known entrypoint records not found.

### Required DNS Changes (Cloudflare DNS)

- Add at least one ServiceMode service binding record under `_agents`.
- Recommended starting records:
  - Type: `HTTPS`
  - Name: `_index._agents`
  - Priority: `1`
  - Target: `andrewgreenhill.dev`
  - SvcParams: `alpn="h2,h3" port="443"`
- Optional additional discovery records:
  - Type: `HTTPS`, Name: `_a2a._agents`, Priority: `1`, Target: `andrewgreenhill.dev`, SvcParams: `alpn="h2,h3" port="443"`
  - Type: `HTTPS`, Name: `_mcp._agents`, Priority: `1`, Target: `andrewgreenhill.dev`, SvcParams: `alpn="h2,h3" port="443"`
- Ensure DNSSEC is enabled in Cloudflare for the zone.

### Verification for Recommendation 4

- Re-run scanner and confirm `checks.discoverability.dnsAid.status` is `pass`.
- Optional quick DNS-over-HTTPS spot checks:
  - `_index._agents.andrewgreenhill.dev` type `65` (HTTPS) should return at least one answer.
  - `_a2a._agents.andrewgreenhill.dev` type `65` should return an answer if configured.
  - `_mcp._agents.andrewgreenhill.dev` type `65` should return an answer if configured.

### Completion Status

- Added HTTPS DNS records for `_index._agents`, `_a2a._agents`, and `_mcp._agents` in Cloudflare.
- Enabled DNSSEC and confirmed DS publication for `andrewgreenhill.dev`.
- Re-scan outcome: DNS-AID check passed.

## Notes

- Recommendation #2 was inferred from scan check ordering and status details from the public scan API.
- This project is currently a static Vite site, so some protocol/auth recommendations may be phased in later.
- For GitHub Pages origin deployments, Link response headers are best added at Cloudflare via Transform Rules or a Worker.
- DNS-AID and DNSSEC are infrastructure-level changes in Cloudflare DNS, not Git repo content changes.

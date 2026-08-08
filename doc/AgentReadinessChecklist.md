# Agent Readiness Checklist

Source: https://isitagentready.com/andrewgreenhill.dev

## Recommendation Progress

- [x] 1. robots.txt: Added root-level robots file and verified 200 text/plain.
- [x] 2. sitemap.xml: Added root-level sitemap and linked it from robots.txt.
- [ ] 3. Link headers on homepage: currently failing (No Link headers found on homepage).
- [ ] 4-14) Remaining recommendations pending implementation (to be added here in exact order from your report).

## Post-Deploy Scan

- Scan run: 2026-08-08
- Level: Basic Web Presence
- robots.txt: pass (robots.txt exists with valid format)
- sitemap.xml: pass (sitemap.xml exists with valid structure)
- link headers: fail (No Link headers found on homepage)

## Notes

- Recommendation #2 was inferred from scan check ordering and status details from the public scan API.
- This project is currently a static Vite site, so some protocol/auth recommendations may be phased in later.

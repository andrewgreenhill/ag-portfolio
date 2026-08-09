# API Documentation

This site is primarily a static portfolio and does not expose a public versioned REST API.

## Contact Submission

- Purpose: Receive contact form submissions from the portfolio site.
- Endpoint: Configured through runtime environment variable `VITE_SEND_EMAIL_ENDPOINT`.
- Authentication: Managed by the backing service provider.
- Notes: The endpoint implementation is external to this static site repository.

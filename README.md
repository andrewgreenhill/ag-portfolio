# Andrew Greenhill's Portfolio

This repo is _in progress_. It will contain a summary of Andrew's projects, and other details including a Contact form, Skills list, "About" page, and social media links.

**Repo set up**

- npm install

**_Environmental variables_**

- Set VITE_SEND_EMAIL_ENDPOINT to contain the email send endpoint. Note: I generated the code in that endpoint by initially using with my email address, and then trying it, and then the email service emailed me the code.
- Set VITE_RECAPTCHA_SITE_KEY to contain a Google ReCAPTCHA key.
- For local dev: set the environmental variables in ".env.local".
- For prod: When deploying to prod (eg Netlify, Vercel, or GitHub Pages), set the environment variable in the dashboard, e.g. in Netlify: 1. Go to your site's settings. 2. Find Environment Variables. 3. Add the variables shown in .env.local and set suitable values. For Vercel, that's under Project Settings > Environment Variables.

**Run the repo using**  
npm run dev
=> http://localhost:5173/

**Run tests using**  
npm test

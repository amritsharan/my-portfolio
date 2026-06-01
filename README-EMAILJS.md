Vercel CLI — EmailJS environment variable setup
===============================================

This project supports two modes for sending EmailJS messages:

- Direct client mode (client posts to EmailJS API): uses `REACT_APP_EMAILJS_*` env vars at build time.
- Proxy server mode (recommended for control): client posts to `/api/send-email`; the Vercel serverless function forwards to EmailJS using `EMAILJS_*` env vars at runtime.

Use the Vercel CLI to add environment variables to your project. The CLI will prompt you for the value when you run `vercel env add`.

Example (interactive):

1. Install and login to Vercel CLI (if not already):

```bash
npm i -g vercel
vercel login
```

2. Add build-time client variables (only needed if you use client mode):

```bash
vercel env add REACT_APP_EMAILJS_SERVICE_ID production
# enter value when prompted (e.g. service_xxx)
vercel env add REACT_APP_EMAILJS_TEMPLATE_ID production
# enter value when prompted (e.g. template_xxx)
vercel env add REACT_APP_EMAILJS_PUBLIC_KEY production
# enter value when prompted (e.g. user_xxx)
vercel env add REACT_APP_USE_API_PROXY production
# enter value when prompted (true or false)
```

3. Add server/runtime variables (for the serverless proxy):

```bash
vercel env add EMAILJS_SERVICE_ID production
vercel env add EMAILJS_TEMPLATE_ID production
vercel env add EMAILJS_PUBLIC_KEY production
vercel env add EMAIL_TO_EMAIL production
# the above values are used by the /api/send-email serverless function
```

Notes on environments
- Use `production`, `preview`, or `development` when adding variables. Add variables for each environment you need.
- `REACT_APP_*` variables must be present at build time for CRA to include them in the client bundle. If you change a `REACT_APP_*` variable, trigger a new build/deploy.
- Server-side envs (non-`REACT_APP_*`) are available at runtime to your Vercel serverless functions immediately after deployment.

Download envs locally (optional)
- To pull environment variables into a local `.env` file for development, use:

```bash
vercel env pull .env.local
```

Trigger a redeploy
- After adding or changing build-time env vars, trigger a new deploy (push a commit or run `vercel --prod`). Example:

```bash
git commit --allow-empty -m "ci: redeploy after env changes"
git push
```

Quick checklist
- [ ] Add the appropriate env vars (client or proxy) via `vercel env add`.
- [ ] If using `REACT_APP_*`, ensure they exist for `production` (and `preview` if you want previews to work).
- [ ] Set `REACT_APP_USE_API_PROXY=true` if you want the client to call the serverless proxy;
      then set `EMAILJS_*` variables for runtime.
- [ ] Redeploy and test the contact form on the deployed URL.

If you want, I can add these commands to a short deploy script or a `CONTRIBUTING.md` file. Would you like that? 

# ScoreBoard Intelligence™ Website

Standalone product website engineering workspace for ScoreBoard Intelligence™ by Bitstar®.

## Baseline

The approved working reference is:

`docs/ScoreBoard_Intelligence_Website_Design_Baseline_V1.0.docx`

Do not introduce material changes to product positioning, brand architecture, public/internal IP boundaries, or homepage structure without explicitly reviewing the baseline.

## Engineering stack

- Next.js 16.3.8 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS 4.x
- Motion 13.x for purposeful UI animation

Next.js 16.3.8 is an Active LTS release as of the project start date. Motion is used instead of the older `framer-motion` package naming.

## Step 1 status

The first engineering slice contains:

- project foundation
- approved brand assets
- global design tokens
- responsive navigation shell
- first hero implementation
- animated infrastructure field
- initial ScoreBoard intelligence convergence concept
- placeholder transition into the next approved homepage section

The remaining homepage is intentionally not implemented yet. We will build it section-by-section and validate each slice before proceeding.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production validation:

```bash
npm run build
npm start
```


## Production V1.1 — Privacy, Legal & Analytics

This update adds ScoreBoard-specific Privacy Policy, Terms of Use, Cookie Policy, and an optional Plausible Analytics integration.

Analytics is intentionally disabled until the production Plausible site-specific script is configured. Set `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC` to the exact site installation script URL supplied by Plausible for the final ScoreBoard domain. The integration is designed around Plausible's current site-specific installation model.

Before public launch, Bitstar should have the legal text reviewed by its legal counsel and confirm the final governing-law/jurisdiction language.

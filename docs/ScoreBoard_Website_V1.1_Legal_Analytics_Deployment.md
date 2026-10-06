# ScoreBoard Intelligence™ Website — V1.1 Legal & Analytics Deployment

## Scope

This V1.1 update preserves the approved Production V1.0 visual/interactive website and adds:

- `/privacy` — Privacy Policy
- `/terms` — Terms of Use
- `/cookies` — Cookie Policy
- Footer links to the three pages
- Privacy-first Plausible Analytics integration

## Plausible setup

1. Create a Plausible account and add **scoreboardintelligence.ai** as the site domain.
2. Obtain the **current site-specific installation snippet** from Plausible Site Settings → General → Tracking → Site installation.
3. Set the deployment environment variable `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC` to the site-specific JavaScript URL shown in that snippet (for example, a `https://plausible.io/js/pa-XXXXX.js` URL).
4. Deploy the site.
5. Verify the Plausible installation using Plausible's own installation checker and the browser Network tab.

The integration is deliberately disabled when the environment variable is absent, so local development does not send analytics.

## Production domain

Canonical website domain: **https://scoreboardintelligence.ai/**

Use the HTTPS production domain above consistently for the Plausible site configuration, canonical metadata, and public website references.

## Privacy model

The intended configuration is Plausible's privacy-first, cookieless analytics. Do not add Google Analytics, advertising pixels, retargeting tags, session recording, or other persistent visitor identifiers without a separate privacy/legal review.

## Legal review

The included policies are a product-website draft based on the Bitstar/ScoreBoard relationship and the planned analytics model. **Bitstar legal counsel should review and approve the final wording before public launch**, particularly governing law, jurisdiction, international data transfers, data-retention periods, and any future third-party services.

## Important

Do not replace the V1.0 design or restructure the website. This is a controlled V1.1 legal/privacy/analytics addition.

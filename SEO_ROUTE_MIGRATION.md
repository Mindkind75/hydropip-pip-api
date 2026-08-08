# HydroPip Branded SEO Route Migration

## Current safe state

The public discovery guides are hosted and indexed on Render because the equivalent Wix routes do not yet exist. Their canonicals and the Render sitemap intentionally point to these working URLs:

- `https://hydropip-pip-api.onrender.com/field-guide`
- `https://hydropip-pip-api.onrender.com/how-it-works`
- `https://hydropip-pip-api.onrender.com/hydroponic-tower-placement`
- `https://hydropip-pip-api.onrender.com/track-start`

Do not change those canonicals to `hydropip.com` until the matching Wix routes return the actual page instead of a 404.

## Branded-domain migration

1. Create thin Wix pages at `/field-guide`, `/how-it-works`, `/hydroponic-tower-placement`, and `/track-start`.
2. Give each page one full-width HTML embed with no Wix header/footer spacer above or below it.
3. Load the matching clean Render route in the embed.
4. Use the shared resize bridge for document-style pages so Wix owns the page scroll.
5. Copy each page's title, description, Open Graph image, and structured-data intent into Wix SEO settings.
6. Confirm every branded URL returns HTTP 200 and renders the correct page on desktop and mobile.
7. Change each Render page canonical and `og:url` to the matching branded URL.
8. Add the branded URLs to the Wix sitemap and remove the Render URLs from the submitted sitemap.
9. Add permanent redirects from the old Render discovery URLs only when Render can preserve asset/API routes and the embed architecture no longer depends on those pages.
10. Request indexing for the four branded URLs in Google Search Console.

## Acceptance checks

- No branded route returns a Wix 404.
- Each topic has only one indexable canonical URL.
- The Render embed source remains crawlable only where intentionally needed.
- Internal links favor branded URLs after migration.
- Search Console reports the branded URL as the selected canonical.

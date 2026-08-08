# Wix SEO Settings

These settings belong on the Wix page wrappers. The embedded Render pages also contain matching metadata, but Wix owns the public `hydropip.com` response seen first by search engines and social platforms.

Current architecture note: Wix currently owns Home, Track My Build, Pip, and Search Results. How It Works and Field Guide are indexable Render pages, not Wix pages; their canonicals and sitemap entries must remain on the Render origin until branded Wix wrappers are intentionally created and tested.

## Home

- URL: `https://www.hydropip.com/`
- Title: `DIY Hydroponic Tower System for Growing Food | HydroPip`
- Description: `Build a four-tower DIY hydroponic system from off-the-shelf parts. Get free instructions, a parts checklist, and Pip guidance from setup to harvest.`
- Index: Yes
- Canonical: `https://www.hydropip.com/`

## Track My Build

- URL: `https://www.hydropip.com/track-my-build`
- Title: `DIY Hydroponic Tower Cost and Parts List | HydroPip`
- Description: `Estimate your DIY hydroponic tower cost, adjust the tower count, mark parts you own, and organize the complete HydroPip build checklist.`
- Index: Yes
- Canonical: `https://www.hydropip.com/track-my-build`

Wix publishes `https://www.hydropip.com/sitemap.xml` automatically. Render publishes the Field Guide, How It Works, and Track My Build entry-page sitemap at `https://hydropip-pip-api.onrender.com/sitemap.xml`.

Request indexing for the Wix homepage and Track My Build page. Submit the Render sitemap only if HydroPip intentionally wants those educational pages indexed on the Render hostname before branded wrappers are built.

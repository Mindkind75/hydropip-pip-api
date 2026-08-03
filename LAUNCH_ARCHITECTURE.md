# HydroPip Launch Architecture

## Recommended Ownership

Wix should own the public website:

- Homepage
- Learn/build story pages
- Photos and proof-of-build sections
- Parts/supplies landing content
- Member signup/login
- Pricing/Pip Pro page
- Merch store
- SEO titles, favicon, and social share cards

Render should own app/backend behavior:

- `/api/pip/*` AI and project endpoints
- OpenAI API key storage
- Pip RAG/knowledge base
- project memory and future database writes
- reminders/scheduling logic
- standalone app surfaces that may become mobile-app views

## Current Transitional Setup

The current Wix site embeds these Render pages:

- `home.html`
- `pip.html`
- `parts-checklist.html`
- `track-start.html`

That let us move quickly, but it creates launch issues:

- Wix iframe height can create blank space.
- Mobile layout can be affected by the Wix iframe width.
- SEO/social cards should be set on Wix pages, not Render utility pages.

## Corrections Added

- Render utility pages now send `HYDROPIP_EMBED_HEIGHT` messages to the parent Wix page.
- `wix-render-embed-resize-page-code.js` listens for those messages and resizes the Wix HTML component.
- Render utility pages are marked `noindex,nofollow` with canonical URLs pointing back to `hydropip.com`.
- Render remains safe for API secrets and AI logic.

## Wix Page-Code Needed

For any Wix page that still embeds a Render page, paste `wix-render-embed-resize-page-code.js` into that Wix page's code panel.

Recommended Wix HTML component IDs:

- Home page embed: `homeHtml`
- Pip page embed: `pipHtml`
- Track My Build page embed: `trackHtml`
- Parts checklist embed: `partsHtml`

The bridge also checks common fallback IDs like `html1`, `html2`, and `iFrame1`.

## Launch Path

1. Upgrade the Render web service instance so Pip does not sleep.
2. Keep Wix as the canonical site and member system.
3. Replace the homepage iframe with native Wix sections when practical.
4. Keep Pip as a Render-powered app page embedded or opened from Wix.
5. Keep Track My Build member-gated in Wix, with Render supplying the checklist/app UI until the native Wix version is rebuilt.
6. Add analytics on Wix CTAs and Amazon outbound clicks.
7. Add SEO/share card QA through Wix and Meta Sharing Debugger.

## Future Revenue Tracks

- Amazon affiliate parts and recurring nutrient/media/supply links.
- Pip Pro subscription for saved schedules, reminders, grow-zone timing, and support for other hydro systems.
- Seeds affiliate/partner program or curated seed packs.
- HydroPip preassembled flow kits: tubing, pumps, connectors, and smart outlet setup.
- Merch store using Wix Stores plus a print-on-demand provider.

## Future Engagement And Rewards

Do not implement until the core subscription, notifications, analytics, and merch fulfillment are stable.

- Give each member a referral code and share link; generate the invite QR code from that member-specific link.
- Award modest points for verified referrals and meaningful grow milestones, not raw clicks or repetitive button presses.
- Use capped monthly rewards such as a HydroPip shirt, hat, seed pack, nutrient credit, or one month of Pip Pro.
- Show progress privately in the member notebook; avoid a public leaderboard until fraud controls and clear rules exist.
- Require the referred member to verify an account or complete a qualifying action before points become final.
- Publish simple eligibility, tie-breaking, privacy, and prize terms before running monthly promotions.

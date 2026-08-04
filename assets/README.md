# HydroPip Asset Library

This folder is the working source of truth for HydroPip brand, product, marketing, website, app, sales, and media assets.

Existing files used by the live site have not been moved. New work should follow the structure below so assets remain easy to find and production files do not get mixed with drafts.

## Folder Map

```text
assets/
|-- _incoming/          New files waiting to be reviewed and named
|-- branding/           Logos, Pip mascot artwork, colors, type, and brand rules
|-- photos/             Existing live-site photography
|-- photography/        Organized original and processed photo library
|-- marketing/          Existing approved marketing and Pip Pro illustrations
|-- website/            Page-specific website images and social cards
|-- app-icons/          Existing Build, Pro, PWA, iOS, and Android icons
|-- app/                Store listings, screenshots, notifications, and app assets
|-- social/             Channel-specific social content and templates
|-- video/              Scripts, storyboards, footage, audio, captions, and exports
|-- copy/               Approved product, website, social, email, and store copy
|-- email/              Welcome, onboarding, beta, lifecycle, and campaign creative
|-- advertising/        Paid creative, copy, audiences, and final exports
|-- campaigns/          Complete campaign packages grouped by launch or season
|-- share/              Existing live social-sharing cards
|-- press/              Press kit, founder bio, product facts, and coverage
|-- affiliate/          Product images, link sheets, disclosures, and campaigns
|-- merch/              Art, mockups, print-ready files, and product listings
|-- research/           Competitors, customer research, and visual references
|-- working/            Editable source files, drafts, and temporary exports
`-- archive/            Retired assets preserved for reference
```

## Working Rule

1. Put every newly received file in `_incoming`.
2. Rename it before use.
3. Keep the untouched original in `photography`, `video/source`, or `working/source-files`.
4. Put edited master files in the appropriate product or channel folder.
5. Put final platform-ready exports in that channel's export or page folder.
6. Archive replaced assets instead of deleting them when they may still appear in old posts or campaigns.

## Starter Management Files

- `ASSET_REGISTER.csv`: master catalog for ownership, rights, usage, and versions
- `social/content-calendar/social-content-calendar.csv`: publishing plan and performance record
- `affiliate/link-sheets/affiliate-link-register.csv`: canonical product and availability tracker
- `campaigns/CAMPAIGN_BRIEF_TEMPLATE.md`: repeatable campaign planning brief
- `video/scripts/VIDEO_BRIEF_TEMPLATE.md`: explainer, short-form, and product-video brief
- `branding/colors/hydropip-color-palette.md`: current digital palette
- `branding/guidelines/VOICE_AND_MESSAGING.md`: public-copy and Pip voice guardrails

## File Naming

Use lowercase kebab-case:

```text
hydropip-[subject]-[use]-[size]-v01.ext
```

Examples:

```text
hydropip-four-towers-home-hero-2400x1350-v01.jpg
pip-pro-planner-tab-1200x1200-v02.png
hydropip-beta-instagram-reel-cover-1080x1920-v01.jpg
hydropip-build-app-store-screen-01-1290x2796-v01.png
```

Do not use names such as `final`, `final2`, `new`, `photo 1`, or `copy of`. Increase the version number instead.

## Approval Labels

Use the folder location, not filename clutter, to show status:

- `_incoming`: unreviewed
- `working/drafts`: in progress
- channel folder: approved master
- `exports`: ready to upload
- `archive`: retired

## Image Standards

- Keep an original full-resolution copy before cropping.
- Use JPG for photography, PNG or WebP for transparent Pip artwork, and SVG for true vector logos when available.
- Export web photography in sRGB.
- Keep text out of flexible website hero images whenever HTML can provide the text.
- Maintain safe margins around Pip, logos, and text for mobile cropping.
- Do not stretch mascot artwork or remove the leaf ears, hat, face shape, or HydroPip color identity.
- Use real HydroPip system photography when the viewer needs to understand the build or inspect results.

## Common Export Sizes

### Website

- Hero landscape: 2400 x 1350
- Content landscape: 1600 x 900
- Square card: 1200 x 1200
- Social share/Open Graph: 1200 x 630
- Transparent mascot: at least 1600 px on the longest side

### Social

- Vertical short video/Reel/TikTok: 1080 x 1920
- Instagram portrait: 1080 x 1350
- Square post: 1080 x 1080
- Facebook/link share: 1200 x 630
- YouTube thumbnail: 1280 x 720
- Pinterest pin: 1000 x 1500

### App

- Store source icon: 1024 x 1024, no transparency for Apple submission
- Android feature graphic: 1024 x 500
- App screenshots: preserve original device resolution and store clean masters before adding captions

### Print And Merch

- 300 DPI at final print size
- Transparent PNG for simple print-on-demand art when vector is unavailable
- Keep editable layered source files in `working/source-files`
- Confirm each printer's color profile, bleed, safe area, and maximum ink coverage before export

## Current Approved Assets

### Brand

- `branding/pip-mascot-transparent.png`
- `branding/pip-head-transparent.png`

### App Icons

- Build icons in 180, 192, 512, and 1024 px
- Pro icons in 180, 192, 512, and 1024 px
- Shared HydroPip app icon masters

### Product Photography

- `photos/hydropip-mature-four-tower-system.jpg`

### Pip And Marketing Artwork

- Pip photo-guidance poster
- Pip planning illustration
- Pip maintenance illustration
- Pip history artwork
- Pip Pro workspace artwork
- Pip checklist artwork
- Pip Pro notebook-tab heads for profile, planner, calendar, seeds, grow log, history, and build

### Sharing

- `share/hydropip-beta-share.jpg`

## Copy Source

The current product and feature reference is [HYDROPIP_FEATURE_OVERVIEW.md](../HYDROPIP_FEATURE_OVERVIEW.md). Check that document before writing web, social, app-store, affiliate, press, or advertising claims.

Planned features must not be presented as live until the feature overview moves them out of the roadmap section.

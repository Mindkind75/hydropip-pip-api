# Growing Guide content

Edit data/growing-guide.json, then run npm run build:guide. The generator updates the marked notebook/build sections in pip.html, the public field-guide.html articles, and the printable print-build-guide.html pages. Do not hand-edit generated article text. npm run qa:guide verifies shared content stays synchronized.

HydroPip-specific articles are explicitly scoped to timed-feed towers. General seed/transplant guidance includes extension sources. Review those sources and system instructions when changing procedures.

Notebook actions only prepare drafts; existing task drafts are preserved. Saving uses existing Planner and Grow Journal forms. Ask Pip carries projectId and a draft prompt; calculator links use the existing authenticated tool handoff. No new AI calls or database schema are introduced.

Run npm run qa:guide-ui for signed-in local interaction/layout tests (PLAYWRIGHT_MODULE may point to an installed Playwright package). These tests use fictional users with AI disabled. Run npm run qa:all for regression checks.

# Notebook choice release — September 19, 2026

Follow-up: Notebook guidance is now a visible three-option selector: Guide me, Full notebook, Custom. Custom uses checked-to-hide tab choices and saves them to the account. Arrange retains tab order/opening-tab settings. All tools appears only when tools are hidden and toggles to Hide tools; both it and the colored tabs share one horizontal row. On phones the row scrolls sideways and the navigation scrolls away with the page. The blank desktop guidance wrapper was removed. Verified with the notebook-choice API/mobile/desktop suite, rack browser suite, smoke and site checks. Existing custom tool selections migrate to Custom without losing their saved values.

Batch 1: seed-first planting, optional setup, user-selected tools and reliable shared records.

- Tower planting defaults to direct sowing. Transplants are available under More planting options.
- Guided onboarding no longer invents tower count, capacity, reservoir size, medium or nutrient brand. Profile no longer fills unknown medium/brand values with recommendations.
- Just my tools creates an empty notebook without equipment or maintenance requirements.
- Arrange → Favorite tools & opening tab saves account preferences across devices. All tools remains accessible, Account stays available, and direct links can reveal the selected tab. Existing users retain all tools until they choose favorites.
- Opening a notebook does not create tasks. The legacy defaults endpoint is now read-only, including for old open clients. Planner offers optional HydroPip care tasks through the existing explicit review/save workflow. Existing records are preserved.
- Seed form edits send the loaded timestamp. A conflicting save is rejected; pending form input remains, and the list refreshes so the user can reopen the latest record. PostgreSQL locks the row while checking and saving. Internal callers without a supplied timestamp remain compatible.
- Planting from Seed Vault preserves the exact source ID. Rhythm and Pip receive transplant counts/dates without inventing sowing dates.

Validation: 26 existing API/regression/browser suites passed (the legacy auto-default smoke assertion was updated and rerun successfully), plus new notebook-choice API and phone/desktop checks against file storage and isolated PostgreSQL. New coverage includes two-device preferences, concurrent edits, retained conflict drafts, guided and skipped setup, explicit task acceptance/deletion and source identity. Site syntax/link checks passed after final UI changes. The new API suite is included in qa:all for CI.

Backup: fresh Render logical export completed September 19 at 9:01 AM Eastern; retained by Render. No local download was attempted because the browser previously reported an organizational download restriction. Point-in-time recovery is also available in Render.

No schema migration or bulk data rewrite. Existing profiles with previously saved assumptions are not silently changed. No original photo retention added. Crop lifecycle expansion and outcome/input analytics remain future batches.

Rollback: redeploy f2a6afc4051f4ed8ab9b9605eb4f3e4ed0eee1b6 if necessary; this restores the previous behavior, including its automatic-task issue. New preference fields are additive and can remain stored. Database recovery is unnecessary for a code-only rollback and should not be performed casually because it can discard subsequent user activity.

# Tower planning — visual level map

The default map shows one crop/variety per level, with all towers on desktop (up to four) and a tower selector on phones. Tap a level for suggestions, planting quantity and crop updates; individual pot selection is under “Manage pots separately.” Existing mixed plantings remain intact. Seed selection and setup details are collapsed below/above the map rather than a long inventory preceding it.

Level suggestions save separately from planting. Partial stage changes and removal split crop records while preserving the other positions and avoiding duplicate seed counts. The latest saved plan/crop action can be undone across devices, guarded by revision and source fingerprints. Undo corrects records only. Prior planting receipts remain retained to prevent old requests being reapplied. No new schema migration is required for this update.

This feature lives in **My Crops → Plan my towers**. Profile is the source of system dimensions, arrangement, spacing, pot volume, lighting, supports, reservoir connections, feeding schedule, and food preferences. Seed Vault is the source of owned varieties and their reviewed planting facts. A saved plan is separate from confirmed plantings.

## Grower flow

1. Complete missing setup details in Profile. Capacity is calculated from tower count × levels × pots per level. Existing profiles are not assigned guessed dimensions.
2. Add mature spacing and review variety suitability in the existing Seed Vault editing form. Indoor growing needs a reviewed local planting window; outdoor guidance can use the existing seasonal zone calendar. Dates are estimates, not live weather forecasts. Packet quantities remain packet quantities.
3. If crops are already growing but lack positions, select their actual pots and link the existing crop record. This does not create duplicate plantings. Correcting positions retains the existing plan for review and marks it stale.
4. Select owned varieties and desired quantities. Prepare a draft, inspect the position labels and any unplaced quantities, then save the reviewed plan. Saving does not mark anything planted.
5. Select only the pots actually planted. Confirm date, seedlings versus one seed per pot, and suitability. The transaction writes separate My Crops records and changes those positions to Growing. Unselected positions remain planned. Seed packets are not automatically deducted.
6. After removing all plants in a planting record, mark that crop finished through the tower planner. Rebuild the plan before reusing positions.

Levels count upward from the bottom. Faces use A onward, clockwise viewed from above; the grower labels A toward the chosen light/reference side. Printable tower/level/face labels are included.

## Position meaning

- Plant here: seasonal candidate; verify conditions and readiness before planting.
- Plant later: timing not ready, or protected starts required first. Confirmation is refused until a current planting window is supported.
- Growing: linked to a confirmed planting record.
- Keep empty: mature-spacing clearance around a planned or existing plant.
- Available: no assignment. It is not an implied succession reservation.

## Rules and limits

The first release uses conservative spacing checks from the grower's saved minimum distances and reviewed packet/crop spacing. It checks along levels and across pot faces; adjacent towers are conservatively separated when their minimum spacing is insufficient. It does not simulate a three-dimensional canopy, sun movement, nutrient compatibility, root performance, or household yield. Arrangement, light, supports and shared feeding are retained for review and Pip context; saving them is not an automated horticultural certification.

Quantities begin with small editable values, not a recommendation to occupy every pot. Unsupported timing or missing variety fit remains blocked rather than guessed. Larger fruiting crops require a support plan. Soil/container recommendations should not be silently treated as validated HydroPip tower specifications. Packet-specific/local guidance takes precedence over the broad zone calendar.

Automatic succession scheduling, seed shopping/wish lists, and optimization of quantities from consumption/yield data remain the second batch. Photo originals are not stored.

Relevant reference guidance consulted:

- [University of Maryland Extension: Growing Vegetables in Containers and Salad Tables](https://www.extension.umd.edu/resource/growing-vegetables-containers-and-salad-tables) — crop light and container considerations.
- [University of Minnesota Extension: Growing tomatoes](https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/growing-tomatoes) — variety and support distinctions.
- [University of Minnesota Extension: Crop planning tools](https://extension.umn.edu/vegetable-growing-guides-farmers/crop-and-field-planning-tools-vegetable-farmers) — quantities, timing and spacing are related planning inputs.

## Persistence and integrity

`004-tower-plans.sql` adds one JSONB plan row per grow; it does not rewrite existing crop or profile records. It runs through the existing additive migration chain. PostgreSQL operations lock the owning project and its seed rows, and commit a planting receipt, the updated plan, and crop records together. File storage performs the same mutation against one copied state. Confirmation operation IDs are retry-safe. Revisions and canonical fingerprints detect changes on other devices and prevent stale plans from being planted. Changes to Profile, packets or crops require another review. Ownership and Pro entitlement are enforced server-side.

Confirmed seedlings have `plantsPlanted` and `plantedAt`; their original sowing date is not invented. Direct sowing records one seed per selected pot. Extra seeds require a separate accurate sowing record. Mapped crops use the planner's turnover flow instead of the older seeds-only edit dialog.

Pip receives the saved plan with the distinction between proposed and confirmed positions. Position context is bounded and marked when truncated; Pip must not claim a complete map from truncated or stale data or claim it can change the map through chat.

## Validation / release

- `npm run qa:towers`: API, Profile capacity, owned inventory, access isolation, read-only preview, optimistic conflicts, partial planting, duplicate retries, unchanged packets, existing crop mapping, turnover, clearance, future-date checks and Pip context.
- `npm run qa:towers-ui`: browser coverage of phone/desktop layout, prepare/save, actual planting confirmation and My Crops update, Profile field persistence and calculated capacity.
- `node server/tower-planner-test.js --postgres --ui`: same workflow against an isolated PostgreSQL database; set `PIP_TEST_DATABASE_URL` to that test database only.
- `qa:all` includes the new API suite. Existing notebook, journal, guide, grow-resource and note-reliability browser suites were also run.

No production data has been written during implementation. Before deployment, confirm the production branch still matches the starting release, back up production data using the established backup procedure, deploy the additive migration with the application, and verify the live service. Rolling the app back leaves the additive table intact so plans can be retained.

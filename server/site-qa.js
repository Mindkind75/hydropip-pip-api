import assert from "node:assert/strict";
import fs from "node:fs";

const files = ["home.html", "join.html", "how-it-works.html", "field-guide.html", "nutrient-calculator.html", "print-build-guide.html", "print-parts-guide.html", "pip.html", "parts-checklist.html", "track-start.html", "beta-test.html", "beta-admin.html", "admin-control-center.html", "privacy.html", "terms.html", "affiliate-disclosure.html", "safety.html", "cancellation.html"];
const bannedCopy = [/HydroSync/i, /My Site 2/i, /concept render/i, /\brebuild\b/i];

for (const file of files) {
  const html = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]));
  const hrefs = [...html.matchAll(/\shref=(["'])(.*?)\1/gi)].map((match) => match[2]);

  assert.ok(hrefs.length > 0, `${file} should contain working navigation`);
  assert.equal(hrefs.some((href) => !href.trim()), false, `${file} contains an empty link`);

  for (const href of hrefs) {
    if (href.startsWith("#") && href !== "#") assert.ok(ids.has(href.slice(1)), `${file} points to missing anchor ${href}`);
    if (/amazon\.com/i.test(href) && !/affiliate-program\.amazon\.com/i.test(href)) {
      assert.ok(href.includes("tag=hydrpip2002-20"), `${file} has an Amazon link without the HydroPip affiliate tag: ${href}`);
    }
  }

  for (const phrase of bannedCopy) {
    assert.equal(phrase.test(html), false, `${file} contains launch copy that should be removed: ${phrase}`);
  }
  assert.doesNotMatch(html, /5fe7cb_cdb3/i, `${file} still uses the old tan-background Pip artwork`);

  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)];
  for (const [, attributes, source] of scripts) {
    if (/application\/ld\+json/i.test(attributes)) continue;
    assert.doesNotThrow(() => new Function(source), `${file} contains invalid inline JavaScript`);
  }

  console.log(`${file}: ${hrefs.length} links and ${scripts.length} inline scripts checked`);
}

assert.equal(fs.existsSync(new URL("../assets/branding/pip-mascot-transparent.png", import.meta.url)), true, "Transparent full-body Pip artwork is missing");
assert.equal(fs.existsSync(new URL("../assets/branding/pip-head-transparent.png", import.meta.url)), true, "Transparent Pip chat avatar is missing");
assert.equal(fs.existsSync(new URL("../HydroPip_AIknowledge_base/zone_planting_calendar.json", import.meta.url)), true, "The local zone planting calendar is missing");

const pipHtml = fs.readFileSync(new URL("../pip.html", import.meta.url), "utf8");
const marketingHomeHtml = fs.readFileSync(new URL("../home.html", import.meta.url), "utf8");
const fieldGuideHtml = fs.readFileSync(new URL("../field-guide.html", import.meta.url), "utf8");
const joinHtml = fs.readFileSync(new URL("../join.html", import.meta.url), "utf8");
const howItWorksHtml = fs.readFileSync(new URL("../how-it-works.html", import.meta.url), "utf8");
const adminControlHtml = fs.readFileSync(new URL("../admin-control-center.html", import.meta.url), "utf8");
const adminControlManifest = JSON.parse(fs.readFileSync(new URL("../admin-control-center.webmanifest", import.meta.url), "utf8"));
assert.match(adminControlHtml, /api\/pip\/admin\/ip-status/, "The mobile Control Center should display staged admin IP status");
assert.doesNotMatch(adminControlHtml, /(?:localStorage|sessionStorage)\.(?:getItem|setItem)\([^\n]*AdminKey/i, "The Control Center must not persist or retrieve its recovery key from browser storage");
assert.doesNotMatch(adminControlHtml, /localStorage\.(?:getItem|setItem)\([^\n]*AdminKey/i, "The Control Center must never persist its admin key in localStorage");
assert.match(adminControlHtml, /api\/pip\/admin\/session\/key/, "The Control Center should exchange the recovery key for an HttpOnly admin session");
assert.match(adminControlHtml, /api\/pip\/admin\/passkeys\/authenticate\/options/, "The Control Center should support passkey unlock");
assert.match(adminControlHtml, /api\/pip\/admin\/session\/logout/, "The Control Center Lock action should clear the server session");
assert.match(adminControlHtml, /beta-admin\.html[\s\S]*pip-review-admin\.html/, "The Control Center should link to feedback and Pip review workflows");
assert.equal(adminControlManifest.start_url, "/admin-control-center", "The Control Center manifest should launch the protected dashboard route");
for (const asset of ["pip-take-a-pic-illustration.jpg", "pip-planning-illustration.jpg", "pip-maintenance-illustration.jpg"]) {
  assert.equal(fs.existsSync(new URL(`../assets/marketing/${asset}`, import.meta.url)), true, `Pip marketing asset is missing: ${asset}`);
  assert.match(pipHtml, new RegExp(asset.replaceAll(".", "\\.")), `Pip Pro should use ${asset}`);
}
assert.equal(fs.existsSync(new URL("../assets/marketing/pip-photo-guidance-poster.jpg", import.meta.url)), true, "The social photo-guidance poster should remain in the marketing library");
assert.match(marketingHomeHtml, /pip-photo-guidance-poster\.jpg/, "The homepage should use the Pip photo-guidance poster");
assert.equal(fs.existsSync(new URL("../assets/marketing/pip-history-poster-transparent.png", import.meta.url)), true, "The transparent Pip history poster should exist");
assert.match(marketingHomeHtml, /pip-history-poster-transparent\.webp/, "The homepage should use the optimized Pip Pro grow-memory artwork");
assert.match(marketingHomeHtml, /class="navField"[^>]*>Field Guide<\/a>/, "The homepage should distinguish the Field Guide in primary navigation");
assert.match(marketingHomeHtml, /class="navHow"[^>]*href="https:\/\/hydropip-pip-api\.onrender\.com\/how-it-works\.html"[^>]*>How It Works<\/a>/, "How It Works should open its concise overview instead of duplicating the Field Guide");
assert.match(howItWorksHtml, /href="https:\/\/www\.hydropip\.com\/"[^>]*>Home<\/a>/, "How It Works should provide a clear Home action");
assert.match(fieldGuideHtml, /href="https:\/\/www\.hydropip\.com\/"[^>]*>Home<\/a>/, "The Field Guide should provide a clear Home action");
assert.match(joinHtml, /Create free account/, "The branded account page should provide a clear signup action");
assert.match(joinHtml, /Already a member\? Sign in/, "The branded account page should separate returning-member login from signup");
assert.match(joinHtml, /No spam email/, "The branded account page should state the no-spam promise");
assert.match(marketingHomeHtml, /class="navTrack"[^>]*>Track My Build<\/a>/, "The homepage should make Track My Build a primary navigation path");
assert.match(marketingHomeHtml, /class="navPip"[^>]*>Ask Pip<\/a>/, "The homepage should name the Pip destination as Ask Pip");
assert.match(marketingHomeHtml, /class="navPro"[^>]*><span>Pip<\/span><span class="navProBadge">PRO<\/span>/, "The homepage should give Pip Pro a premium navigation treatment without repeating Pro");
assert.match(marketingHomeHtml, /class="navLogin"[^>]*pip\?pro=login[^>]*>Pro Login<\/a>/, "Returning Pip Pro members need a direct homepage login path");
assert.match(marketingHomeHtml, /pip\?pro=feedback/, "The homepage account menu should open the signed improvement form");
assert.match(marketingHomeHtml, /hydropipAccountAvatar/, "The homepage account circle should support the saved HydroPip profile picture");
assert.match(marketingHomeHtml, /pip\?pro=avatar/, "The profile-picture shortcut should use a query value the Wix bridge already forwards");
assert.match(pipHtml, /id="pipAvatarDialog"/, "Pip should provide a profile-picture picker");
assert.match(pipHtml, /id="pipFeedbackImpact"/, "Member suggestions should record how strongly an issue affected the user");
assert.match(pipHtml, /data-feedback-open/, "Signed-in members should have a clear Suggest an improvement action");
assert.equal((pipHtml.match(/data-member-only data-feedback-open/g) || []).length, 2, "Every Pip Pro account dropdown should contain Suggest an improvement");
assert.match(pipHtml, /pipQuery\.get\("pro"\) === "feedback"/, "Pip should support a direct signed feedback route");
assert.match(pipHtml, /authMode==="login"[\s\S]*pip\?pro=1/, "Pro Login should continue directly to the workspace after Wix verifies the member");
assert.match(pipHtml, /Pip organizes similar ideas/, "The feedback form should explain AI-assisted grouping without promising automatic changes");
assert.match(pipHtml, /pipQuery\.get\("pro"\) === "login" \? "login"/, "The branded account page should distinguish Wix login from signup");
assert.match(pipHtml, /pipQuery\.get\("pro"\) === "signup" \? "signup"/, "The branded account page should be able to open Wix signup through the Pip bridge");
assert.match(pipHtml, /class="auth-entry-screen"/, "Signup and login should open over a branded account welcome screen instead of active chat");
assert.match(pipHtml, /Your free account is ready\./, "Completed signup should confirm that the free member account is ready");
assert.match(pipHtml, /What do you want to do next\?/, "Completed signup should present a clear next-step decision");
assert.match(pipHtml, /Track My Build[\s\S]*Talk to Pip[\s\S]*Plan My Grow/, "Free member onboarding should link to the three primary HydroPip paths");
assert.match(pipHtml, /requestedStart==="grow"/, "Plan My Grow onboarding should open Pip with a useful crop-planning starter");
assert.match(pipHtml, /role="radiogroup"[\s\S]*role="radio"/, "Built-in Pip profile pictures should be exposed as selectable radio options");
assert.match(pipHtml, /id="pipAvatarUpload"[^>]*accept="image\/jpeg,image\/png,image\/webp"/, "Members should be able to upload a supported profile image");
assert.doesNotMatch(marketingHomeHtml, /<nav class="nav"[\s\S]*?<a[^>]*>Build<\/a>[\s\S]*?<\/nav>/, "The homepage primary navigation should not duplicate Track My Build with a Build link");
assert.doesNotMatch(marketingHomeHtml, /<nav class="nav"[\s\S]*?<a[^>]*>Parts<\/a>[\s\S]*?<\/nav>/, "The homepage primary navigation should not duplicate Track My Build with a Parts link");
assert.doesNotMatch(pipHtml, /class=["']history-feature["']/, "The Pro history notebook should prioritize saved activity over a large marketing block");
assert.match(pipHtml, /class=["']history-layout["']/, "The Pro history notebook should use the compact working layout");
assert.match(pipHtml, /pip-history-wide-concept\.jpg/, "The Pro sales page should explain saved grow memory visually");
assert.doesNotMatch(pipHtml, /pip-history-poster-concept\.jpg/, "The history poster with outdated branding must not appear on the live Pip page");
for (const asset of ["profile.png", "planner.png", "calendar.png", "seeds.png", "grow-log.png"]) {
  assert.equal(fs.existsSync(new URL(`../assets/marketing/pro-tabs/${asset}`, import.meta.url)), true, `Pip notebook guide is missing: ${asset}`);
  assert.match(pipHtml, new RegExp(`/assets/marketing/pro-tabs/${asset.replaceAll(".", "\\.")}`), `Pip Pro should use the ${asset} notebook guide`);
}
assert.equal(fs.existsSync(new URL("../assets/marketing/pro-tabs/historian.png", import.meta.url)), true, "The History notebook needs its transparent historian Pip");
assert.match(pipHtml, /\/assets\/marketing\/pro-tabs\/historian\.webp/, "The History notebook should use optimized historian Pip beside saved activity");
assert.deepEqual(
  fs.readFileSync(new URL("../assets/marketing/pro-tabs/calendar.png", import.meta.url)),
  fs.readFileSync(new URL("../assets/marketing/pro-tabs/planner.png", import.meta.url)),
  "Planner and Calendar should use the same planning Pip head"
);
assert.equal(fs.existsSync(new URL("../assets/marketing/pro-tabs/build.png", import.meta.url)), true, "The transparent Track Build notebook guide is missing");
assert.match(pipHtml, /\/assets\/marketing\/pro-tabs\/build\.png/, "Track Build should use its transparent construction Pip guide");
const partsChecklistHtml = fs.readFileSync(new URL("../parts-checklist.html", import.meta.url), "utf8");
const trackStartHtml = fs.readFileSync(new URL("../track-start.html", import.meta.url), "utf8");
assert.equal(fs.existsSync(new URL("../assets/marketing/pip-print-checklist.png", import.meta.url)), true, "The transparent Print checklist Pip is missing");
assert.match(partsChecklistHtml, /\/assets\/marketing\/pip-print-checklist\.png/, "Track My Build should guide members toward the Print button");
assert.match(partsChecklistHtml, /\/print-parts-guide\.html/, "Track My Build should open the dedicated printable parts guide");
assert.match(partsChecklistHtml, /\/data\/build-items\.json/, "Track My Build should load its prices from the centralized build catalog");
assert.match(partsChecklistHtml, /class="track-access"/, "Track My Build should hide the checklist behind a branded member gate until Wix verifies the session");
assert.match(partsChecklistHtml, /if\(sessionToken\)unlockTrackAccess\(\);else showTrackAccess\(\)/, "Track My Build must not unlock from client-supplied member labels without a signed session");
assert.match(partsChecklistHtml, /pro=signup&amp;return=track/, "Track My Build signup should return the new member to the checklist");
assert.match(pipHtml, /authReturn==="track"[\s\S]*hydropip\.com\/track-my-build/, "Pip authentication should return build-path members to Track My Build");
assert.doesNotMatch(trackStartHtml, /nutrient-calculator\.html/, "The pre-build Track page should not duplicate the member nutrient tool");
assert.match(trackStartHtml, /hydroponic-tower-placement/, "The pre-build Track page should help visitors plan their space before ordering");
const nutrientCalculatorHtml = fs.readFileSync(new URL("../nutrient-calculator.html", import.meta.url), "utf8");
const nutrientCalculatorJs = fs.readFileSync(new URL("../assets/js/nutrient-calculator.js", import.meta.url), "utf8");
assert.match(nutrientCalculatorJs, /\/api\/pip\/nutrient-programs/, "The nutrient calculator should load the signed member catalog from the server");
assert.match(nutrientCalculatorHtml, /HydroPip member tool/, "Visitors should see a branded member gate");
assert.match(nutrientCalculatorHtml, /href="https:\/\/www\.hydropip\.com\/" target="_top">Home<\/a>/, "The nutrient calculator should provide a clear Home action");
assert.match(nutrientCalculatorHtml, /Grow beyond the standard HydroPip recipe/, "Free members should see the Pip Pro calculator benefit");
assert.match(nutrientCalculatorJs, /hydropipToolSession/, "The calculator should use the signed member session passed by Pip");
assert.match(nutrientCalculatorHtml, /mixing a fresh reservoir batch/i, "The nutrient calculator must ask whether this is a fresh batch");
assert.match(nutrientCalculatorJs, /Do not add a complete recipe to a partially depleted reservoir/, "The nutrient calculator must block full dosing into a partial HydroPip batch");
assert.match(nutrientCalculatorHtml, /Calculate my nutrient mix/, "The nutrient calculator needs an explicit calculation action");
assert.match(nutrientCalculatorJs, /HydroPip nutrient calculations are educational estimates for a fresh reservoir batch/, "Calculated nutrient results need the exact educational safety disclaimer");
assert.match(nutrientCalculatorJs, /Another brand - use my label rate/, "The nutrient calculator should support growers using another labeled nutrient");
assert.doesNotMatch(nutrientCalculatorJs, /addEventListener\(["']change["'],\s*render\)/, "Changing an input must not calculate a recipe before the button is pressed");
assert.doesNotThrow(() => new Function(nutrientCalculatorJs), "The nutrient calculator JavaScript should parse");
assert.match(fieldGuideHtml, /pip\?tool=nutrients/, "The Field Guide should hand members into the nutrient calculator before planting");
assert.match(fieldGuideHtml, /Before adding seeds or transplants/, "The Field Guide should place nutrient calculation before planting");
const plannerPanelHtml = pipHtml.match(/<section class="workspace-section notebook-page" data-pro-panel="planner"[\s\S]*?<section class="workspace-section notebook-page" data-pro-panel="calendar"/)?.[0] || "";
const trackBuildPanelHtml = pipHtml.match(/<section class="workspace-section notebook-page" data-pro-panel="build"[\s\S]*?<section class="workspace-section notebook-page" data-pro-panel="account"/)?.[0] || "";
assert.match(plannerPanelHtml, /nutrient-calculator\.html/, "The nutrient calculator should live in the Pip Pro Planner");
assert.doesNotMatch(trackBuildPanelHtml, /nutrient-calculator\.html/, "Track My Build should stay focused on parts and construction");
assert.match(pipHtml, /requestedTool==="nutrients"/, "Pip should securely hand signed members into the Field Guide nutrient tool");
const nutrientPrograms = JSON.parse(fs.readFileSync(new URL("../data/nutrient-programs.json", import.meta.url), "utf8"));
for (const programId of ["hydropip_masterblend", "masterblend_label", "jacks_321", "gh_flora_3part"]) {
  assert.ok(nutrientPrograms.programs[programId], `The nutrient catalog is missing ${programId}`);
  assert.match(nutrientPrograms.programs[programId].sourceUrl, /^https:\/\//, `${programId} needs a reviewable source URL`);
}
assert.deepEqual(
  nutrientPrograms.programs.masterblend_label.stages.vegetative.components.map((item) => item.amount),
  [2.4, 1.5, 2.4],
  "The MasterBlend manufacturer program should remain 2.4 / 1.5 / 2.4 grams per gallon"
);
assert.deepEqual(
  nutrientPrograms.programs.jacks_321.stages.vegetative.components.map((item) => item.amount),
  [3.6, 1.1, 2.4],
  "Jack's official 3-2-1 program should remain 3.6 / 1.1 / 2.4 grams per gallon"
);
assert.deepEqual(
  nutrientPrograms.programs.gh_flora_3part.stages.seedling.components.map((item) => item.amount),
  [2, 2, 2],
  "FloraSeries General Use seedling rates should remain 2 ml/gal for each base nutrient"
);
assert.ok(Object.keys(nutrientPrograms.systems).length >= 8, "The calculator should cover the common hydroponic system families");
assert.ok(Object.keys(nutrientPrograms.crops).length >= 9, "The calculator should provide useful crop-specific pH and EC starting points");
const systemConfig = JSON.parse(fs.readFileSync(new URL("../data/hydropip-system.json", import.meta.url), "utf8"));
assert.deepEqual([systemConfig.stages.seeds.masterblendGrams, systemConfig.stages.seeds.calciumNitrateGrams, systemConfig.stages.seeds.magnesiumSulfateGrams], [300, 300, 150], "The seed recipe should remain 300 / 300 / 150");
assert.deepEqual([systemConfig.stages.growing.masterblendGrams, systemConfig.stages.growing.calciumNitrateGrams, systemConfig.stages.growing.magnesiumSulfateGrams], [400, 400, 200], "The growing recipe should remain 400 / 400 / 200");
assert.deepEqual([systemConfig.stages.fruiting.masterblendGrams, systemConfig.stages.fruiting.calciumNitrateGrams, systemConfig.stages.fruiting.magnesiumSulfateGrams], [600, 600, 300], "The production recipe should remain 600 / 600 / 300");
const buildConfig = JSON.parse(fs.readFileSync(new URL("../data/build-items.json", import.meta.url), "utf8"));
for (const requiredId of ["mixing-pump", "mix-return-hose", "mix-hose-adapter", "mix-hose-strap", "main-feed-hose"]) {
  assert.equal(buildConfig.items.some((item) => item.id === requiredId && item.active), true, `Build catalog is missing ${requiredId}`);
}
assert.notEqual(buildConfig.items.find((item) => item.id === "mix-return-hose").id, buildConfig.items.find((item) => item.id === "main-feed-hose").id, "Mixing circulation and tower feed hoses must remain distinct");
const notebookVisualGuideCount = (pipHtml.match(/class=["'][^"']*notebook-guide[^"']*["']/g) || []).length
  + (pipHtml.match(/class=["'][^"']*account-brand-panel[^"']*["']/g) || []).length;
assert.equal(notebookVisualGuideCount, 8, "Every main Pip Pro notebook section should have a visual guide");
assert.match(pipHtml, /account-brand-panel[\s\S]*pip-pro-workspace-transparent\.webp/, "The branded account hub should feature optimized Pip artwork");
assert.match(pipHtml, /id=["']proPhotoJoin["']/, "The photo-guidance story needs a working Pip Pro call to action");
assert.match(pipHtml, /id=["']proMemoryJoin["']/, "The grow-memory story needs a working Pip Pro call to action");
for (const id of ["pipProView", "proJoinButton", "proCompare", "proPlanButton", "proWorkspace", "proReminderForm", "proReminderList", "proCalendarBoard", "proCalendarDetails", "proCalendarTitle", "proReadingForm", "proChatLink", "pipConversationSelect", "pipNewConversation", "pipConversationMenu", "pipConversationDialog", "pipPhoto", "pipPhotoButton", "pipPhotoAllowance", "pipPhotoPreview", "pipPhotoRemove"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing Pip Pro control ${id}`);
}
for (const page of ["profile", "planner", "calendar", "log", "history"]) {
  assert.match(pipHtml, new RegExp(`data-pro-page=["']${page}["']`), `pip.html is missing the ${page} notebook tab`);
  assert.match(pipHtml, new RegExp(`data-pro-panel=["']${page}["']`), `pip.html is missing the ${page} notebook page`);
}
for (const id of ["proSeedDashboard", "proSeedPlantNow", "proSeedStartNext", "proSeedTiming", "proSeedUseDate", "proSeedAddPlanner"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing Seeds workspace control ${id}`);
}
assert.match(pipHtml, /seed-plan/, "The Seeds workspace should load zone-aware sowing recommendations");
assert.match(pipHtml, /reminders\/batch/, "The Seeds workspace should add approved seed tasks to Planner and Calendar");
assert.match(pipHtml, /activateProPage/, "Pip Pro notebook tabs are not wired to page navigation");
assert.match(pipHtml, /id=["']proArrangeTabs["']/, "Pip Pro needs an Arrange tabs control");
assert.match(pipHtml, /class=["'][^"']*workspace-tab[^"']*arrange-tabs[^"']*["'][^>]*id=["']proArrangeTabs["']/, "Arrange tabs should live inside the notebook tab strip");
assert.match(pipHtml, /appendChild\(proArrangeTabs\)/, "Arrange should remain pinned after member tab ordering is applied");
assert.match(pipHtml, /id=["']proTabOrderDialog["']/, "Pip Pro needs a mobile-friendly tab ordering panel");
assert.match(pipHtml, /\/api\/pip\/users\/me\/preferences/, "Pip Pro tab order should persist to the member account");
assert.match(pipHtml, /workspaceTabOrder/, "Pip Pro should apply the saved tab order across devices");
for (const id of ["pipProOnboardingDialog", "pipProOnboardingForm", "proFocusPanel", "proFocusTools", "proExperienceMode", "pipProToast"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing progressive Pro control ${id}`);
}
for (const mode of ["guided", "standard", "detailed"]) assert.match(pipHtml, new RegExp(`value=["']${mode}["']`), `Pip Pro is missing ${mode} guidance mode`);
assert.match(pipHtml, /id=["']proExperienceModeHelp["']/, "Guidance mode needs an immediate explanation");
assert.match(pipHtml, /guided:1,standard:3,detailed:4/, "Guidance modes should visibly change Focus Now density");
assert.match(pipHtml, /stageFocus/, "Pip Pro should promote tools based on the current grow stage");
assert.match(pipHtml, /function focusProPage/, "Focus Now actions should align the selected notebook panel in view");
assert.doesNotMatch(pipHtml, /proView\.scrollTo\(\{top:proWorkspace\.offsetTop/, "Focus Now actions must not jump to the workspace header");
assert.match(pipHtml, /Green dots mark the best tools for this grow stage/, "Recommended-tab dots need a visible explanation");
assert.match(pipHtml, /Recommended for the current grow stage/, "Recommended tabs need an accessible explanation");
assert.match(pipHtml, /proMilestones/, "Pip Pro should celebrate meaningful grow-stage unlocks");
assert.match(pipHtml, /celebratedMilestones/, "Pip Pro milestone celebrations should persist to the member account");
assert.match(pipHtml, /pro_milestone_unlocked/, "Pip Pro should track milestone unlock engagement");
assert.match(pipHtml, /reminders\/defaults/, "Pip-led onboarding should create the starter care rhythm");
assert.match(pipHtml, /seeds\/batch/, "Pip-led onboarding should save seed-pack inventory");
assert.match(pipHtml, /Your first Rhythm is ready/, "Pip-led onboarding should confirm completion and land on Rhythm");
for (const view of ["agenda", "day", "week", "month", "year"]) assert.match(pipHtml, new RegExp(`data-calendar-view=["']${view}["']`), `Pip Calendar is missing its ${view} view`);
assert.match(pipHtml, /function renderCalendar/, "Pip Calendar is not rendered from Planner tasks");
assert.match(pipHtml, /item\.canComplete/, "Rhythm should not offer Done for future tasks");
assert.match(pipHtml, /taskIsDueToday/, "Planner should not offer Done for future tasks");
assert.match(pipHtml, /Scheduled<\/span>/, "Future Rhythm tasks should be labeled Scheduled");
assert.match(pipHtml, /function renderCalendarWeek/, "Pip Calendar is missing weekly task grouping");
assert.match(pipHtml, /plannerReminders/, "Pip Planner and Calendar should share one reminder collection");
assert.match(pipHtml, /id=["']pipReturnTop["']/, "Pip needs a return-to-navigation handle on contained scroll views");
assert.match(pipHtml, /chat-nav-menu/, "Pip chat should keep account navigation beside the conversation selector");
assert.match(pipHtml, /function bestSavedProject\(/, "Pip chat should choose the most complete saved grow profile");
assert.match(pipHtml, /requestedProjectId\?projects\.find/, "Pip chat should prioritize an explicitly selected notebook");
assert.match(pipHtml, /\.top-actions a/, "Pip Pro shortcuts should link to the selected notebook");
assert.match(pipHtml, /body:not\(\.pro-mode\) \.return-top-handle\{display:none!important\}/, "Chat should use its persistent navigation instead of the floating top handle");
assert.match(pipHtml, /pip-pro-workspace-transparent\.webp/, "The Pip Pro notebook heading should feature the optimized Pro mascot");
assert.match(pipHtml, /class=["']pro-auth-loading["']/, "Pip Pro should show a neutral loading state while Wix resolves membership");
assert.match(pipHtml, /pro-auth-pending \.pro-view>\.pip-top/, "Pip Pro must hide public content while membership is unresolved");
assert.match(pipHtml, /function revealProPage\(\)/, "Pip Pro should reveal the correct view only after session resolution");
assert.match(pipHtml, /HYDROPIP_PIP_LOGIN_REQUEST/, "Pip Pro checkout bridge message is missing");
assert.match(pipHtml, /id=["']pipProCelebrationDialog["']/, "Pip Pro needs a successful-upgrade celebration");
assert.match(pipHtml, /pip-pro-celebration-transparent\.webp/, "The successful-upgrade celebration should feature optimized celebratory Pip");
assert.match(pipHtml, /Let's Go to Pip Pro/, "The successful-upgrade celebration needs a clear workspace call to action");
assert.match(pipHtml, /pendingProCheckout&&isPro\(\)/, "The celebration must wait until the member has verified Pip Pro access");
assert.match(pipHtml, /What do you want to do next\?/, "A newly signed-in member needs an obvious next-step choice");
assert.match(pipHtml, /post_signup_build_selected/, "Post-signup Track My Build activation must be measurable");
assert.match(pipHtml, /post_signup_pip_selected/, "Post-signup Pip activation must be measurable");
assert.match(pipHtml, /post_signup_grow_selected/, "Post-signup grow activation must be measurable");
assert.match(pipHtml, /data-account-action=["']subscriptions["']/, "Pro members need a subscription-management action");
assert.match(pipHtml, /data-account-action=["']wallet["']/, "Pro members need a payment-method action");
assert.match(pipHtml, /HYDROPIP_PIP_READY/, "The completed checkout flow should recheck Wix while Pro access propagates");
assert.match(pipHtml, /\/api\/pip\/projects\//, "Pip Pro workspace is not connected to project APIs");
assert.match(pipHtml, /requestedProjectType/, "Pip Pro project links should open the matching chat project");
assert.match(pipHtml, /How it works/, "Pip Pro should explain the subscription flow before checkout");
assert.match(pipHtml, /\/conversations/, "Pip chat is not connected to the saved-conversation API");
assert.match(pipHtml, /conversationId:activeConversationId/, "Pip chat requests are not scoped to the selected conversation");
assert.match(pipHtml, /New conversation/, "Pip should offer focused topic conversations");
assert.match(pipHtml, /input_image|image:imageAttachment/, "Pip photo uploads are not connected to chat requests");
assert.match(pipHtml, /thinking-dots/, "Pip should show an animated thinking state while requests are running");
assert.match(pipHtml, /pipProgressSteps/, "Pip should narrate useful progress while preparing an answer");
assert.match(pipHtml, /Examining your photo/, "Photo questions should show a specific analysis progress state");
assert.match(pipHtml, /Checking it against the parts list/, "Parts questions should show a specific matching progress state");
assert.match(pipHtml, /photo-allowance/, "Pip should show the member's remaining Build Checks");
assert.match(pipHtml, /photo_limit_reached|data\.photoAllowance/, "Pip should handle the server-enforced photo allowance");
assert.match(pipHtml, /pip_daily_limit_reached/, "Pip should explain daily AI limits without breaking local guidance");
assert.match(pipHtml, /Pip Credits are coming soon/, "Pip should set a friendly expectation while top-up checkout is pending");
assert.match(pipHtml, /function addUpgradeCta/, "Pip should show an inline Pip Pro action for subscription-only requests");
assert.match(pipHtml, /className=["']chat-upgrade["']/, "Pip Pro nudges should use a compact chat action instead of replacing the chat controls");
assert.doesNotMatch(pipHtml, /data\.subscriptionRequired&&!isPro\(\)\)setGate\(true,["']pro["']\)/, "A Pip Pro nudge must not lock free HydroPip build help");
assert.match(pipHtml, /your HydroPip grow partner/, "Pip should open with a clear capability-focused introduction");
assert.match(pipHtml, /class=["']chat-head["'][^>]*>[\s\S]*?pip-head-transparent\.webp/, "Pip chat header should use the optimized head-only avatar");
assert.match(pipHtml, /var mascot = ["']\/assets\/branding\/pip-head-transparent\.png["']/, "Pip replies should use the head-only avatar");
assert.match(pipHtml, /proPipFloat/, "The Pip Pro conversion hero should give Pip restrained motion");
assert.match(pipHtml, /Build the system step by step/, "Pip's introduction should explain build guidance");
assert.match(pipHtml, /in-app calendar and reminders/, "Pip's introduction should explain the Pro value without a long sales pitch");
assert.match(pipHtml, /pipBetaWelcomeDialog/, "Pip should include the beta welcome experience");
assert.match(pipHtml, /pipBetaChecklist/, "Pip Pro should include the beta test checklist");
assert.match(pipHtml, /Was this useful\?/, "Fresh Pip answers should support beta ratings");
assert.match(pipHtml, /Include this question and Pip's reply/, "Chat context sharing should be explicit");
assert.doesNotMatch(pipHtml, /Add to Home Screen|pipInstallNudge|requestInstall|webcal:|\/api\/pip\/users\/me\/calendar/, "Pip should stay in-app without legacy install or external-calendar flows");
assert.match(pipHtml, /Ready for your Calendar/, "Pip chat should present reviewable calendar actions");
assert.match(pipHtml, /\/reminders\/batch/, "Pip chat calendar actions should save through the authenticated batch endpoint");
assert.match(pipHtml, /Confirm Calendar change/, "Destructive Pip Calendar requests should display a real confirmation card");
assert.match(pipHtml, /\/reminders\/actions/, "Pip chat should execute confirmed update, replace, and delete actions through the authenticated endpoint");
assert.match(pipHtml, /\/api\/pip\/users\/me/, "Members should have a self-service Pip data deletion path");
for (const id of ["proInviteLink", "proCopyInvite", "proShareInvite", "proInviteShareChoices", "proInviteText", "proInviteEmail", "proInviteFacebook"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `Pip Invite is missing ${id}`);
}
assert.match(pipHtml, /HYDROPIP_INVITE_COPY_REQUEST/, "Pip Invite should ask the Wix parent page to copy when iframe clipboard access is blocked");
assert.match(pipHtml, /document\.execCommand\("copy"\)/, "Pip Invite should retain a legacy iframe copy fallback");
assert.match(pipHtml, /navigator\.share/, "Pip Invite should use the device share sheet when available");
assert.match(pipHtml, /window\.self!==window\.top/, "Pip Invite should avoid a blocked native share call inside the Wix iframe");
assert.match(pipHtml, /facebook\.com\/sharer\/sharer\.php/, "Pip Invite should offer a Facebook fallback when the share sheet is unavailable");

const partsHtml = fs.readFileSync(new URL("../parts-checklist.html", import.meta.url), "utf8");
assert.match(partsHtml, /Get your build organized\./, "Track My Build should open with focused procurement copy");
assert.match(partsHtml, /Parts ready\? Start the build\./, "Track My Build should lead collected members into the build guide");
assert.doesNotMatch(partsHtml, /supply-planner|Pip refill rhythm|data-filter=["']reorder["']/, "Recurring planning should stay in Pip Pro rather than Track My Build");
assert.match(partsHtml, /\.top\{position:static;top:auto/, "Track My Build navigation should scroll with the page on touch devices");
assert.match(partsHtml, /\[hidden\]\{display:none!important\}/, "Conditional calculator fields must remain hidden until their matching option is selected");
assert.match(partsHtml, /id=["']sectionJump["']/, "Track My Build needs a directional section navigator");
assert.match(partsHtml, /data-jump-to=["']#checklistTools["']/, "The calculator needs a clear continuation control into the parts list");
assert.match(partsHtml, /form\.addEventListener\(["']input["']/, "Calculator quantity inputs should update the ordering list immediately");
assert.match(partsHtml, /Ordering quantities synced for/, "The parts list should confirm the calculator quantity selection it is using");

const wixTrackBridge = fs.readFileSync(new URL("../wix-track-my-build-page-code.js", import.meta.url), "utf8");
assert.match(wixTrackBridge, /embed\.onMessage/, "The Wix Track My Build page must listen for iframe readiness and session messages");
assert.match(wixTrackBridge, /HYDROPIP_EMBED_HEIGHT/, "The Wix Track My Build page must recognize iframe resize messages");
assert.match(wixTrackBridge, /sizeTrackToViewport/, "Track My Build should use one fixed viewport-sized iframe");
assert.match(wixTrackBridge, /formFactor === "Desktop" \? 760 : 640/, "Track My Build needs an immediate viewport fallback when Wix geometry is late");
assert.match(wixTrackBridge, /embed\.height = fallbackHeight/, "Track My Build should apply its fallback before asynchronous viewport measurement");
assert.doesNotMatch(wixTrackBridge, /HYDROPIP_TRACK_SCROLL_SECTION/, "Track My Build section jumps should not move the outer Wix page");
assert.doesNotMatch(wixTrackBridge, /14950|25700/, "The Wix Track My Build page must not restore fixed legacy iframe heights");

const homeHtml = fs.readFileSync(new URL("../home.html", import.meta.url), "utf8");
const wixHomeBridge = fs.readFileSync(new URL("../wix-home-page-code.js", import.meta.url), "utf8");
assert.match(homeHtml, /postHeight\(true\)/, "Home must resend its measured height after the Wix bridge is ready");
assert.match(wixHomeBridge, /hasMeasuredHomeHeight/, "The Wix home bridge must protect measured height from fallback overrides");
assert.doesNotMatch(wixHomeBridge, /14000|12600|8300/, "The Wix home bridge must not restore oversized legacy fallback heights");
assert.match(wixHomeBridge, /1500/, "Home should use a compact loading height before its real content measurement arrives");
assert.match(homeHtml, /HYDROPIP_EMBED_WHEEL/, "The embedded Home page should forward mouse-wheel movement to Wix");
assert.match(wixHomeBridge, /HYDROPIP_EMBED_WHEEL/, "The Wix Home bridge should receive embedded mouse-wheel movement");
assert.match(wixHomeBridge, /wixWindowFrontend\.scrollBy/, "The Wix Home bridge should apply forwarded wheel movement to the outer page");
assert.match(homeHtml, /Start My Free Build/, "The mobile-first homepage CTA should state that build guidance is free");
assert.match(homeHtml, /is-wix-embed/, "Home should explicitly disable inner scrolling when embedded in Wix");
assert.match(homeHtml, /class=["']photoFeature singlePhoto["']/, "Home hero should feature a real HydroPip harvest");
assert.match(homeHtml, /assets\/photos\/hydropip-mustard-green-harvest-founder\.jpg/, "Home hero is missing the giant mustard green harvest photo");
assert.match(homeHtml, /This giant mustard green came from HydroPip/i, "Home hero should connect the harvest result to HydroPip");
assert.match(homeHtml, /No proprietary kit\. No parts markup\./i, "Home should clearly explain that HydroPip does not sell or mark up the parts");
assert.match(homeHtml, /commission at no extra cost to you/i, "Home should explain how affiliate links support the free guidance");
assert.match(homeHtml, /id=["']flip-day["']/, "Home should explain the tower turnover workflow");
assert.match(homeHtml, /move healthy mature plants into raised beds/i, "Tower turnover should explain how productive plants can keep growing");
assert.match(homeHtml, /One system\. Crop after crop\./, "Tower turnover should reinforce repeat growing");
assert.match(homeHtml, /field-guide/, "Home should link to the HydroPip Field Guide");
assert.match(homeHtml, /pipFloat/, "The Meet Pip conversion moment should give the mascot restrained motion");
assert.match(homeHtml, /deviceLandscape/, "Home should provide an automatic landscape presentation layout for phones and casting");
assert.match(homeHtml, /orientationchange/, "Home should react when a phone rotates between portrait and landscape");
assert.match(homeHtml, /root\.classList\.toggle\("deviceMobile",forceMobile\|\|\(handheld&&!landscape\)\)/, "Landscape phones should not remain locked to the portrait mobile layout");
assert.doesNotMatch(partsHtml, /html,body\{overflow-y:hidden\}/, "Track My Build must preserve vertical page scrolling");
assert.match(partsHtml, /html,body\{overflow-y:auto\}/, "Track My Build should use natural vertical scrolling");
assert.match(partsHtml, /if\(isWixEmbed\)return/, "Embedded Track My Build must not broadcast a document height to legacy resize listeners");
assert.match(partsHtml, /html\.is-wix-embed body\{height:100%;min-height:0;overflow-y:auto/, "Embedded Track My Build must own one viewport-sized internal scroll area");
assert.match(pipHtml, /\.pro-mode \.pro-view\{overscroll-behavior-y:contain\}/, "Pip Pro should not chain notebook scrolling into the surrounding Wix page");
assert.match(pipHtml, /id=["']pipProScrollContext["']/, "Pip Pro mobile layouts should identify the notebook page scroll position");
assert.match(pipHtml, /\.workspace-tabs\{overflow-y:hidden;overscroll-behavior-inline:contain;touch-action:pan-x\}/, "Notebook tab navigation should reserve swiping for horizontal movement");
assert.match(pipHtml, /\.pip-top\{position:relative;z-index:500;overflow:visible\}/, "The Pip Pro account menu header must stay above the notebook");
assert.match(pipHtml, /\.member-popover\{z-index:1200\}/, "The account dropdown must stay above all notebook controls");
assert.match(pipHtml, /function showFreeMemberNextSteps\(\)\{if\(!hasLead\(\)\)return/, "A completed free signup must activate its next-step screen after auth state is cleared");
assert.doesNotMatch(pipHtml, /function showFreeMemberNextSteps\(\)\{if\(!requestedAuthMode/, "The free-member success screen must not depend on a cleared auth request");
assert.match(homeHtml, /One reservoir\. Brief feeds\. Four towers growing real food\./, "Home should provide a concise How It Works overview");
assert.match(homeHtml, /class=["']howOverview["']/, "Home should use a single visual How It Works presentation");
assert.match(homeHtml, /#build,#flip-day,#photos,#parts,#signup\{display:none\}/, "Detailed material should not compete with the launch homepage funnel");
assert.match(homeHtml, /Pip walks with you from parts to first harvest\./, "Pip should be prominent in the opening homepage story");
assert.match(homeHtml, /class=["']navTrack["'][^>]*href=["']https:\/\/hydropip-pip-api\.onrender\.com\/track-start\.html["'][^>]*>Track My Build<\//, "Home navigation should consolidate parts and build organization under Track My Build");
assert.doesNotMatch(homeHtml, /href=["']#[^"']*["']/, "The embedded Home page must not use iframe-local hash links that cannot scroll the Wix parent page");
assert.match(homeHtml, /class=["']navHow["'][^>]*href=["']https:\/\/hydropip-pip-api\.onrender\.com\/how-it-works\.html["'][^>]*>How It Works<\//, "Home How It Works navigation should open the concise overview");
assert.match(homeHtml, /class=["']navPip["'][^>]*href=["']https:\/\/www\.hydropip\.com\/pip["'][^>]*>Ask Pip<\//, "Home Ask Pip navigation should open the working assistant");

for (const section of ["system-map", "quick-start", "care", "red-flags", "turnover"]) {
  assert.match(fieldGuideHtml, new RegExp(`id=["']${section}["']`), `Field Guide is missing its ${section} section`);
}
assert.match(fieldGuideHtml, /call 811/i, "Field Guide should put utility safety before support installation");
assert.match(fieldGuideHtml, /tower runoff does not return to the IBC/i, "Field Guide should explain the timed-feed runoff model");
assert.match(fieldGuideHtml, /\/print-build-guide\.html/, "Field Guide should open the dedicated printable build guide");
assert.match(fieldGuideHtml, /hydropip-system-map-v2\.webp/, "Field Guide should use the optimized accurate Pip-style system map");
assert.doesNotMatch(fieldGuideHtml, /class=["']systemStage["']/, "Field Guide should not render the old CSS tower diagram");
assert.match(fieldGuideHtml, /prefers-reduced-motion/, "Field Guide animation should respect reduced-motion preferences");
assert.match(fieldGuideHtml, /\.pipCue \.btn\{color:var\(--ink\)\}/, "Field Guide closing buttons need readable text contrast");
assert.match(fieldGuideHtml, /Turn the care rhythm into your calendar/, "Field Guide should explain the timely value of Pip Pro");
assert.match(fieldGuideHtml, /id=["']meet-pip["']/, "Field Guide should introduce Pip before the build stages");
assert.match(fieldGuideHtml, /Pip helps turn the guide into your next decision\./, "Field Guide needs a concise Pip capability introduction");
assert.match(fieldGuideHtml, /Pip Pro remembers your grow zone/, "Field Guide should explain the practical Pip Pro memory benefit");
assert.match(fieldGuideHtml, /class=["']heroPanel["']/, "Field Guide hero copy needs a high-contrast reading panel");
assert.match(fieldGuideHtml, /aria-label=["']Field Guide actions["']/, "Field Guide should provide clear global navigation");
assert.match(fieldGuideHtml, /href=["']https:\/\/www\.hydropip\.com\/["'][^>]*>Home</, "Field Guide should provide a direct Home path");
assert.match(fieldGuideHtml, /class=["']brand["'][^>]*href=["']https:\/\/www\.hydropip\.com\/["']|href=["']https:\/\/www\.hydropip\.com\/["'][^>]*class=["']brand["']/, "Field Guide brand should return home");
assert.equal((fieldGuideHtml.match(/href=["']https:\/\/www\.hydropip\.com\/pip\?pro=1["']/g) || []).length >= 2, true, "Field Guide should keep Pip Pro available without trapping users there");
const printBuildHtml = fs.readFileSync(new URL("../print-build-guide.html", import.meta.url), "utf8");
const printPartsHtml = fs.readFileSync(new URL("../print-parts-guide.html", import.meta.url), "utf8");
assert.match(printBuildHtml, /Page 4 of 4/, "The print build guide should contain four designed pages");
assert.match(printBuildHtml, /window\.print/, "The print build guide needs a print control");
assert.equal((printPartsHtml.match(/data-part=/g) || []).length, 28, "The printable parts guide should cover all 28 initial build items");
assert.match(printPartsHtml, /hydropipMemberPartsChecklist/, "The printable parts guide should carry over saved checklist progress");
assert.equal(fs.existsSync(new URL("../assets/website/field-guide/hydropip-system-map-v2.png", import.meta.url)), true, "The illustrated HydroPip system map is missing");
for (const linkedFile of ["home.html", "pip.html", "track-start.html", "parts-checklist.html"]) {
  const linkedHtml = fs.readFileSync(new URL(`../${linkedFile}`, import.meta.url), "utf8");
  assert.match(linkedHtml, /field-guide/, `${linkedFile} should make the Field Guide available`);
}

for (const productFile of ["home.html", "pip.html", "server/pipAgent.js", "server/pipTools.js", "data/build-items.json"]) {
  const productSource = fs.readFileSync(new URL(`../${productFile}`, import.meta.url), "utf8");
  assert.doesNotMatch(productSource, /B007TFTW3U/, `${productFile} still references the unavailable planter ASIN`);
  assert.match(productSource, /B007TFTXAC/, `${productFile} is missing the approved 1\/2-inch-center planter ASIN`);
}

for (const legalFile of ["privacy.html", "terms.html", "affiliate-disclosure.html", "safety.html", "cancellation.html"]) {
  const legalHtml = fs.readFileSync(new URL(`../${legalFile}`, import.meta.url), "utf8");
  assert.match(legalHtml, /Hartshorn Studios LLC|HydroPip Systems by Hartshorn Studios LLC/, `${legalFile} should identify the business`);
  assert.match(legalHtml, /info@hydropip\.com/, `${legalFile} should provide a contact email`);
  assert.match(legalHtml, /class=["']legal-button["'][^>]*>Home</, `${legalFile} should provide a clear Home button`);
  assert.match(legalHtml, /class=["']legal-button pro["'][^>]*>Pip Pro</, `${legalFile} should provide a clear Pip Pro button`);
}
assert.match(fs.readFileSync(new URL("../affiliate-disclosure.html", import.meta.url), "utf8"), /As an Amazon Associate I earn from qualifying purchases\./, "Affiliate disclosure needs Amazon's required statement");

const betaTestHtml = fs.readFileSync(new URL("../beta-test.html", import.meta.url), "utf8");
assert.match(betaTestHtml, /\/api\/pip\/beta\/apply/, "Beta application form must submit to the backend");
assert.match(betaTestHtml, /No payment information required/, "Beta applicants should understand the complimentary offer");
assert.match(betaTestHtml, /No spam or unrelated marketing/, "Beta application contact consent should be specific");
assert.match(betaTestHtml, /property="og:title" content="Join the HydroPip Closed Beta"/, "Beta application needs a branded Open Graph title");
assert.match(betaTestHtml, /property="og:image" content="https:\/\/hydropip-pip-api\.onrender\.com\/assets\/share\/hydropip-beta-share\.jpg"/, "Beta application needs its branded social card");
assert.match(betaTestHtml, /property="og:image:width" content="1200"/, "Beta social card should declare its width");
assert.match(betaTestHtml, /property="og:image:height" content="630"/, "Beta social card should declare its height");
assert.match(betaTestHtml, /name="twitter:card" content="summary_large_image"/, "Beta application needs a large Twitter/X share card");
assert.equal(fs.existsSync(new URL("../assets/share/hydropip-beta-share.jpg", import.meta.url)), true, "Beta social card asset is missing");

const betaAdminHtml = fs.readFileSync(new URL("../beta-admin.html", import.meta.url), "utf8");
assert.match(betaAdminHtml, /Authorization.*Bearer/, "Beta review data must send the private admin key in an authorization header");
assert.doesNotMatch(betaAdminHtml, /localStorage/, "Beta review must not persist an admin key beyond the browser session");
assert.match(betaAdminHtml, /Download CSV/, "Beta review should support operational exports");
assert.match(betaAdminHtml, /Tester progress/, "Beta review should show checklist progress");

const wixPipBridge = fs.readFileSync(new URL("../wix-pip-member-bridge-page-code.js", import.meta.url), "utf8");
assert.match(wixPipBridge, /\["pro", "project", "projectId"/, "Wix Pip bridge is not forwarding project context to the iframe");
for (const queryKey of ["return", "start", "tool", "focus", "avatar", "prompt"]) {
  assert.match(wixPipBridge, new RegExp(`"${queryKey}"`), `The Wix Pip bridge should forward the ${queryKey} entry intent`);
}
assert.doesNotMatch(wixPipBridge, /HYDROPIP_APP_INSTALL_REQUEST|"app", "install"/, "Wix Pip bridge should not route the retired Home Screen flow");
assert.match(wixPipBridge, /buildPipSource\(\)/, "Wix Pip bridge is not building a context-aware embed source");
assert.match(wixPipBridge, /PIP_HTML_SRC/, "Wix Pip bridge is not assigning the current Pip embed source");
assert.match(wixPipBridge, /HYDROPIP_INVITE_COPY_REQUEST/, "Wix Pip bridge should receive Invite copy requests");
assert.match(wixPipBridge, /copyToClipboard/, "Wix Pip bridge should copy Invite links from the top-level Wix page");
assert.match(wixPipBridge, /HYDROPIP_INVITE_COPY_RESULT/, "Wix Pip bridge should return the Invite copy result to Pip");
assert.match(wixPipBridge, /HYDROPIP_SCROLL_TOP/, "Wix Pip bridge should let contained pages return to the outer navigation");
assert.match(wixPipBridge, /scrollTo\(0, 0\)/, "Wix Pip bridge should reset the outer page scroll");
assert.match(wixPipBridge, /sessionRequestInFlight = deliverPipSession/, "Wix Pip bridge should serialize signed-member exchanges");
assert.match(wixPipBridge, /if \(member && !sessionToken\)/, "Wix Pip bridge should retry a failed signed-member exchange");
assert.match(wixPipBridge, /if \(sessionRetryCount < 4\)/, "Wix Pip bridge should bound signed-member exchange retries");
assert.match(wixPipBridge, /Boolean\(sessionToken\)/, "Wix Pip bridge should not cache a missing signed-member token as a successful exchange");
assert.doesNotMatch(wixPipBridge, /formFactor === "Desktop" \? 860 : 800/, "Wix Pip must not force an iframe taller than common phone viewports");
assert.match(wixPipBridge, /formFactor === "Desktop" \? 760 : 640/, "Wix Pip needs an immediate viewport fallback when Wix geometry is late");
assert.match(wixPipBridge, /pip\.height = fallbackHeight/, "Wix Pip should apply its fallback before asynchronous viewport measurement");

const agentSource = fs.readFileSync(new URL("./pipAgent.js", import.meta.url), "utf8");
assert.match(agentSource, /Honor the saved project profile experienceMode/, "Pip responses should honor the saved guidance mode");
assert.match(agentSource, /stripSummaryLabel/, "Pip should remove TL;DR-style labels from replies");
assert.equal((agentSource.match(/store:\s*false/g) || []).length >= 2, true, "Pip should disable OpenAI Responses application-state storage");
assert.match(agentSource, /input: \[\.\.\.responseInput, \.\.\.\(response\.output \|\| \[\]\), \.\.\.toolResults\]/, "Stored-disabled tool continuations must replay the original image, response output, and tool results");
assert.doesNotMatch(agentSource, /previous_response_id:\s*response\.id/, "Pip cannot use previous_response_id when OpenAI response storage is disabled");
assert.match(agentSource, /Never spend the whole reply describing the photo/, "Photo replies must reserve space for the user's next action");
assert.match(agentSource, /confirmation_required/, "Pip should require confirmation before adding AI-created calendar tasks");
assert.match(agentSource, /wantsCalendarChange/, "Pip Pro calendar requests should bypass static answers and reach AI tools");
assert.match(agentSource, /manage_calendar/, "Pip should support add, update, replace, and delete calendar tools");
assert.match(agentSource, /buildDirectCalendarConfirmation/, "Clear-all and starter-calendar requests should have deterministic confirmation behavior");
assert.match(agentSource, /Load my calendar/, "Pip should offer a one-tap starter calendar action after collecting availability");

const indexSource = fs.readFileSync(new URL("./index.js", import.meta.url), "utf8");
assert.match(indexSource, /claimBuildPhotoCheck/, "Build Check limits must be enforced by the server");
assert.match(indexSource, /refundBuildPhotoCheck/, "Failed photo analyses must refund the Build Check");
assert.match(indexSource, /photo_account_required/, "Photo uploads must require a member account");
assert.match(indexSource, /reserveAiUsage/, "OpenAI calls must reserve server-side usage before running");
assert.match(indexSource, /completeAiUsage/, "Successful OpenAI calls must finalize usage records");
assert.match(indexSource, /cancelAiUsageReservation/, "Failed OpenAI calls must release usage reservations");
assert.match(indexSource, /pip_daily_limit_reached/, "Daily AI limit responses must use a stable error code");
assert.match(indexSource, /reminders\/batch/, "Pip should expose a protected batch endpoint for confirmed AI schedules");
assert.match(indexSource, /reminders\/actions/, "Pip should expose an authenticated calendar action endpoint");

const memorySource = fs.readFileSync(new URL("./pipMemory.js", import.meta.url), "utf8");
assert.match(memorySource, /create table if not exists pip_usage_events/, "Postgres must persist Pip AI usage events");
assert.match(memorySource, /create table if not exists pip_credit_ledger/, "Postgres must keep an auditable Pip Credit ledger");
assert.match(memorySource, /applyProjectReminderAction/, "Pip memory should apply confirmed calendar actions server-side");
assert.doesNotMatch(memorySource, /pip_usage_events[\s\S]{0,800}\bprompt\b/i, "Usage events must not add a raw prompt column");

console.log("HydroPip site QA passed");

import assert from "node:assert/strict";
import fs from "node:fs";

const files = ["home.html", "field-guide.html", "pip.html", "parts-checklist.html", "track-start.html", "beta-test.html", "beta-admin.html", "privacy.html", "terms.html", "affiliate-disclosure.html", "safety.html", "cancellation.html"];
const bannedCopy = [/HydroSync/i, /My Site 2/i, /concept render/i, /\brebuild\b/i];

for (const file of files) {
  const html = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]));
  const hrefs = [...html.matchAll(/\shref=(["'])(.*?)\1/gi)].map((match) => match[2]);

  assert.ok(hrefs.length > 0, `${file} should contain working navigation`);
  assert.equal(hrefs.some((href) => !href.trim()), false, `${file} contains an empty link`);

  for (const href of hrefs) {
    if (href.startsWith("#") && href !== "#") assert.ok(ids.has(href.slice(1)), `${file} points to missing anchor ${href}`);
    if (/amazon\.com/i.test(href)) {
      assert.ok(href.includes("tag=hydrpip2002-20"), `${file} has an Amazon link without the HydroPip affiliate tag: ${href}`);
    }
  }

  for (const phrase of bannedCopy) {
    assert.equal(phrase.test(html), false, `${file} contains launch copy that should be removed: ${phrase}`);
  }

  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)];
  for (const [, attributes, source] of scripts) {
    if (/application\/ld\+json/i.test(attributes)) continue;
    assert.doesNotThrow(() => new Function(source), `${file} contains invalid inline JavaScript`);
  }

  console.log(`${file}: ${hrefs.length} links and ${scripts.length} inline scripts checked`);
}

const pipHtml = fs.readFileSync(new URL("../pip.html", import.meta.url), "utf8");
for (const id of ["pipProView", "proJoinButton", "proCompare", "proPlanButton", "proWorkspace", "proReminderForm", "proReminderList", "proCalendarBoard", "proCalendarDetails", "proCalendarTitle", "proReadingForm", "proChatLink", "pipConversationSelect", "pipNewConversation", "pipConversationMenu", "pipConversationDialog", "pipPhoto", "pipPhotoButton", "pipPhotoAllowance", "pipPhotoPreview", "pipPhotoRemove"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing Pip Pro control ${id}`);
}
for (const page of ["profile", "planner", "calendar", "log", "history"]) {
  assert.match(pipHtml, new RegExp(`data-pro-page=["']${page}["']`), `pip.html is missing the ${page} notebook tab`);
  assert.match(pipHtml, new RegExp(`data-pro-panel=["']${page}["']`), `pip.html is missing the ${page} notebook page`);
}
assert.match(pipHtml, /activateProPage/, "Pip Pro notebook tabs are not wired to page navigation");
for (const view of ["agenda", "day", "month", "year"]) assert.match(pipHtml, new RegExp(`data-calendar-view=["']${view}["']`), `Pip Calendar is missing its ${view} view`);
assert.match(pipHtml, /function renderCalendar/, "Pip Calendar is not rendered from Planner tasks");
assert.match(pipHtml, /plannerReminders/, "Pip Planner and Calendar should share one reminder collection");
assert.match(pipHtml, /HYDROPIP_PIP_LOGIN_REQUEST/, "Pip Pro checkout bridge message is missing");
assert.match(pipHtml, /\/api\/pip\/projects\//, "Pip Pro workspace is not connected to project APIs");
assert.match(pipHtml, /requestedProjectType/, "Pip Pro project links should open the matching chat project");
assert.match(pipHtml, /How it works/, "Pip Pro should explain the subscription flow before checkout");
assert.match(pipHtml, /\/conversations/, "Pip chat is not connected to the saved-conversation API");
assert.match(pipHtml, /conversationId:activeConversationId/, "Pip chat requests are not scoped to the selected conversation");
assert.match(pipHtml, /New conversation/, "Pip should offer focused topic conversations");
assert.match(pipHtml, /input_image|image:imageAttachment/, "Pip photo uploads are not connected to chat requests");
assert.match(pipHtml, /thinking-dots/, "Pip should show an animated thinking state while requests are running");
assert.match(pipHtml, /photo-allowance/, "Pip should show the member's remaining Build Checks");
assert.match(pipHtml, /photo_limit_reached|data\.photoAllowance/, "Pip should handle the server-enforced photo allowance");
assert.match(pipHtml, /pip_daily_limit_reached/, "Pip should explain daily AI limits without breaking local guidance");
assert.match(pipHtml, /Pip Credits are coming soon/, "Pip should set a friendly expectation while top-up checkout is pending");
assert.match(pipHtml, /your HydroPip grow partner/, "Pip should open with a clear capability-focused introduction");
assert.match(pipHtml, /Build the system step by step/, "Pip's introduction should explain build guidance");
assert.match(pipHtml, /in-app calendar and reminders/, "Pip's introduction should explain the Pro value without a long sales pitch");
assert.match(pipHtml, /pipBetaWelcomeDialog/, "Pip should include the beta welcome experience");
assert.match(pipHtml, /pipBetaChecklist/, "Pip Pro should include the beta test checklist");
assert.match(pipHtml, /Was this useful\?/, "Fresh Pip answers should support beta ratings");
assert.match(pipHtml, /Include this question and Pip's reply/, "Chat context sharing should be explicit");
assert.doesNotMatch(pipHtml, /Add to Home Screen|pipInstallNudge|requestInstall|webcal:|\/api\/pip\/users\/me\/calendar/, "Pip should stay in-app without legacy install or external-calendar flows");
assert.match(pipHtml, /Ready for your Calendar/, "Pip chat should present reviewable calendar actions");
assert.match(pipHtml, /\/reminders\/batch/, "Pip chat calendar actions should save through the authenticated batch endpoint");
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
assert.match(partsHtml, /Supply plan saved/, "The supply planner should visibly confirm a save");
assert.match(partsHtml, /Saved on this device/, "The supply planner should show persistent saved-state copy");
assert.match(partsHtml, /\.top\{position:static;top:auto/, "Track My Build navigation should scroll with the page on touch devices");

const wixTrackBridge = fs.readFileSync(new URL("../wix-track-my-build-page-code.js", import.meta.url), "utf8");
assert.match(wixTrackBridge, /embed\.onMessage/, "The Wix Track My Build page must listen for live iframe height updates");
assert.match(wixTrackBridge, /HYDROPIP_EMBED_HEIGHT/, "The Wix Track My Build page must recognize iframe height messages");
assert.doesNotMatch(wixTrackBridge, /14950|25700/, "The Wix Track My Build page must not restore fixed legacy iframe heights");

const homeHtml = fs.readFileSync(new URL("../home.html", import.meta.url), "utf8");
assert.match(homeHtml, /class=["']photoFeature singlePhoto["']/, "Home hero should feature the mature four-tower system");
assert.match(homeHtml, /assets\/photos\/hydropip-mature-four-tower-system\.jpg/, "Home hero is missing the mature four-tower photo");
assert.match(homeHtml, /id=["']flip-day["']/, "Home should explain the tower turnover workflow");
assert.match(homeHtml, /move healthy mature plants into raised beds/i, "Tower turnover should explain how productive plants can keep growing");
assert.match(homeHtml, /One system\. Crop after crop\./, "Tower turnover should reinforce repeat growing");
assert.match(homeHtml, /field-guide/, "Home should link to the HydroPip Field Guide");

const fieldGuideHtml = fs.readFileSync(new URL("../field-guide.html", import.meta.url), "utf8");
for (const section of ["system-map", "quick-start", "care", "red-flags", "turnover"]) {
  assert.match(fieldGuideHtml, new RegExp(`id=["']${section}["']`), `Field Guide is missing its ${section} section`);
}
assert.match(fieldGuideHtml, /call 811/i, "Field Guide should put utility safety before support installation");
assert.match(fieldGuideHtml, /does not route tower runoff back into the IBC/i, "Field Guide should explain the timed-feed runoff model");
assert.match(fieldGuideHtml, /window\.print/, "Field Guide should be printable");
assert.match(fieldGuideHtml, /waterPulse/, "Field Guide should animate the timed-feed water path");
assert.match(fieldGuideHtml, /prefers-reduced-motion/, "Field Guide animation should respect reduced-motion preferences");
assert.match(fieldGuideHtml, /Turn the care rhythm into your calendar/, "Field Guide should explain the timely value of Pip Pro");
for (const linkedFile of ["home.html", "pip.html", "track-start.html", "parts-checklist.html"]) {
  const linkedHtml = fs.readFileSync(new URL(`../${linkedFile}`, import.meta.url), "utf8");
  assert.match(linkedHtml, /field-guide/, `${linkedFile} should make the Field Guide available`);
}

for (const productFile of ["home.html", "pip.html", "parts-checklist.html", "server/pipAgent.js", "server/pipData.js", "server/pipTools.js"]) {
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
assert.match(betaAdminHtml, /X-Pip-Admin-Key/, "Beta review data must require the private admin key");
assert.match(betaAdminHtml, /Download CSV/, "Beta review should support operational exports");
assert.match(betaAdminHtml, /Tester progress/, "Beta review should show checklist progress");

const wixPipBridge = fs.readFileSync(new URL("../wix-pip-member-bridge-page-code.js", import.meta.url), "utf8");
assert.match(wixPipBridge, /\["pro", "project", "projectId"\]/, "Wix Pip bridge is not forwarding project context to the iframe");
assert.doesNotMatch(wixPipBridge, /HYDROPIP_APP_INSTALL_REQUEST|"app", "install"/, "Wix Pip bridge should not route the retired Home Screen flow");
assert.match(wixPipBridge, /buildPipSource\(\)/, "Wix Pip bridge is not building a context-aware embed source");
assert.match(wixPipBridge, /PIP_HTML_SRC/, "Wix Pip bridge is not assigning the current Pip embed source");
assert.match(wixPipBridge, /HYDROPIP_INVITE_COPY_REQUEST/, "Wix Pip bridge should receive Invite copy requests");
assert.match(wixPipBridge, /copyToClipboard/, "Wix Pip bridge should copy Invite links from the top-level Wix page");
assert.match(wixPipBridge, /HYDROPIP_INVITE_COPY_RESULT/, "Wix Pip bridge should return the Invite copy result to Pip");

const agentSource = fs.readFileSync(new URL("./pipAgent.js", import.meta.url), "utf8");
assert.match(agentSource, /stripSummaryLabel/, "Pip should remove TL;DR-style labels from replies");
assert.equal((agentSource.match(/store:\s*false/g) || []).length >= 2, true, "Pip should disable OpenAI Responses application-state storage");
assert.match(agentSource, /input: \[\.\.\.responseInput, \.\.\.\(response\.output \|\| \[\]\), \.\.\.toolResults\]/, "Stored-disabled tool continuations must replay the original image, response output, and tool results");
assert.doesNotMatch(agentSource, /previous_response_id:\s*response\.id/, "Pip cannot use previous_response_id when OpenAI response storage is disabled");
assert.match(agentSource, /Never spend the whole reply describing the photo/, "Photo replies must reserve space for the user's next action");
assert.match(agentSource, /confirmation_required/, "Pip should require confirmation before adding AI-created calendar tasks");
assert.match(agentSource, /wantsCalendarChange/, "Pip Pro calendar requests should bypass static answers and reach AI tools");

const indexSource = fs.readFileSync(new URL("./index.js", import.meta.url), "utf8");
assert.match(indexSource, /claimBuildPhotoCheck/, "Build Check limits must be enforced by the server");
assert.match(indexSource, /refundBuildPhotoCheck/, "Failed photo analyses must refund the Build Check");
assert.match(indexSource, /photo_account_required/, "Photo uploads must require a member account");
assert.match(indexSource, /reserveAiUsage/, "OpenAI calls must reserve server-side usage before running");
assert.match(indexSource, /completeAiUsage/, "Successful OpenAI calls must finalize usage records");
assert.match(indexSource, /cancelAiUsageReservation/, "Failed OpenAI calls must release usage reservations");
assert.match(indexSource, /pip_daily_limit_reached/, "Daily AI limit responses must use a stable error code");
assert.match(indexSource, /reminders\/batch/, "Pip should expose a protected batch endpoint for confirmed AI schedules");

const memorySource = fs.readFileSync(new URL("./pipMemory.js", import.meta.url), "utf8");
assert.match(memorySource, /create table if not exists pip_usage_events/, "Postgres must persist Pip AI usage events");
assert.match(memorySource, /create table if not exists pip_credit_ledger/, "Postgres must keep an auditable Pip Credit ledger");
assert.doesNotMatch(memorySource, /pip_usage_events[\s\S]{0,800}\bprompt\b/i, "Usage events must not add a raw prompt column");

console.log("HydroPip site QA passed");

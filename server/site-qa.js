import assert from "node:assert/strict";
import fs from "node:fs";

const files = ["home.html", "pip.html", "parts-checklist.html", "track-start.html", "privacy.html", "terms.html", "affiliate-disclosure.html", "safety.html", "cancellation.html"];
const bannedCopy = [/HydroSync/i, /My Site 2/i, /concept render/i, /\brebuild\b/i];

for (const file of files) {
  const html = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]));
  const hrefs = [...html.matchAll(/\shref=(["'])(.*?)\1/gi)].map((match) => match[2]);

  assert.ok(hrefs.length > 0, `${file} should contain working navigation`);
  assert.equal(hrefs.some((href) => !href.trim()), false, `${file} contains an empty link`);

  for (const href of hrefs) {
    if (href.startsWith("#")) assert.ok(ids.has(href.slice(1)), `${file} points to missing anchor ${href}`);
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
for (const id of ["pipProView", "proJoinButton", "proCompare", "proPlanButton", "proWorkspace", "proReminderForm", "proReadingForm", "proChatLink", "pipConversationSelect", "pipNewConversation", "pipConversationMenu", "pipConversationDialog", "pipInstallDialog", "pipInstallIcon", "pipInstallNudge", "pipInstallNudgeAction", "pipPhoto", "pipPhotoPreview", "pipPhotoRemove"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing Pip Pro control ${id}`);
}
for (const page of ["profile", "schedule", "log", "history"]) {
  assert.match(pipHtml, new RegExp(`data-pro-page=["']${page}["']`), `pip.html is missing the ${page} notebook tab`);
  assert.match(pipHtml, new RegExp(`data-pro-panel=["']${page}["']`), `pip.html is missing the ${page} notebook page`);
}
assert.match(pipHtml, /activateProPage/, "Pip Pro notebook tabs are not wired to page navigation");
assert.match(pipHtml, /HYDROPIP_PIP_LOGIN_REQUEST/, "Pip Pro checkout bridge message is missing");
assert.match(pipHtml, /\/api\/pip\/projects\//, "Pip Pro workspace is not connected to project APIs");
assert.match(pipHtml, /requestedProjectType/, "Pip Pro project links should open the matching chat project");
assert.match(pipHtml, /How it works/, "Pip Pro should explain the subscription flow before checkout");
assert.match(pipHtml, /\/conversations/, "Pip chat is not connected to the saved-conversation API");
assert.match(pipHtml, /conversationId:activeConversationId/, "Pip chat requests are not scoped to the selected conversation");
assert.match(pipHtml, /New conversation/, "Pip should offer focused topic conversations");
assert.match(pipHtml, /input_image|image:imageAttachment/, "Pip photo uploads are not connected to chat requests");
assert.match(pipHtml, /thinking-dots/, "Pip should show an animated thinking state while requests are running");
assert.match(pipHtml, /window\.open\(destination,"_top"\)/, "Home Screen install should have a direct top-level navigation fallback");
assert.match(pipHtml, /Your Pip Pro workspace is ready/, "Pro activation should offer a Home Screen install CTA");
assert.match(pipHtml, /\/api\/pip\/users\/me/, "Members should have a self-service Pip data deletion path");

const partsHtml = fs.readFileSync(new URL("../parts-checklist.html", import.meta.url), "utf8");
assert.match(partsHtml, /Supply plan saved/, "The supply planner should visibly confirm a save");
assert.match(partsHtml, /Saved on this device/, "The supply planner should show persistent saved-state copy");

const homeHtml = fs.readFileSync(new URL("../home.html", import.meta.url), "utf8");
assert.match(homeHtml, /class=["']featureSplit["']/, "Home hero should compare the new tower with mature growth");
assert.match(homeHtml, /5fe7cb_264e8a42fb11486b808d289b14e6b079/, "Home hero is missing the mature tower photo");

for (const legalFile of ["privacy.html", "terms.html", "affiliate-disclosure.html", "safety.html", "cancellation.html"]) {
  const legalHtml = fs.readFileSync(new URL(`../${legalFile}`, import.meta.url), "utf8");
  assert.match(legalHtml, /Hartshorn Studios LLC|HydroPip Systems by Hartshorn Studios LLC/, `${legalFile} should identify the business`);
  assert.match(legalHtml, /info@hydropip\.com/, `${legalFile} should provide a contact email`);
}
assert.match(fs.readFileSync(new URL("../affiliate-disclosure.html", import.meta.url), "utf8"), /As an Amazon Associate I earn from qualifying purchases\./, "Affiliate disclosure needs Amazon's required statement");

const wixPipBridge = fs.readFileSync(new URL("../wix-pip-member-bridge-page-code.js", import.meta.url), "utf8");
assert.match(wixPipBridge, /\["pro", "project", "projectId", "app", "install"\]/, "Wix Pip bridge is not forwarding project and app-install context to the iframe");
assert.match(wixPipBridge, /HYDROPIP_APP_INSTALL_REQUEST/, "Wix Pip bridge is not routing the tier-specific Home Screen flow");
assert.match(wixPipBridge, /buildPipSource\(\)/, "Wix Pip bridge is not building a context-aware embed source");
assert.match(wixPipBridge, /PIP_HTML_SRC/, "Wix Pip bridge is not assigning the current Pip embed source");

const agentSource = fs.readFileSync(new URL("./pipAgent.js", import.meta.url), "utf8");
assert.match(agentSource, /stripSummaryLabel/, "Pip should remove TL;DR-style labels from replies");
assert.equal((agentSource.match(/store:\s*false/g) || []).length >= 2, true, "Pip should disable OpenAI Responses application-state storage");
assert.match(agentSource, /input: \[\.\.\.responseInput, \.\.\.\(response\.output \|\| \[\]\), \.\.\.toolResults\]/, "Stored-disabled tool continuations must replay the original image, response output, and tool results");
assert.doesNotMatch(agentSource, /previous_response_id:\s*response\.id/, "Pip cannot use previous_response_id when OpenAI response storage is disabled");

for (const manifest of ["manifest-build.webmanifest", "manifest-pro.webmanifest"]) {
  const value = JSON.parse(fs.readFileSync(new URL(`../${manifest}`, import.meta.url), "utf8"));
  assert.equal(value.display, "standalone", `${manifest} should launch without browser chrome when supported`);
  assert.ok(value.icons.some((icon) => icon.sizes === "192x192"), `${manifest} needs a 192px icon`);
  assert.ok(value.icons.some((icon) => icon.sizes === "512x512"), `${manifest} needs a 512px icon`);
}

console.log("HydroPip site QA passed");

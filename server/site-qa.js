import assert from "node:assert/strict";
import fs from "node:fs";

const files = ["home.html", "pip.html", "parts-checklist.html", "track-start.html"];
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
for (const id of ["pipProView", "proJoinButton", "proCompare", "proPlanButton", "proWorkspace", "proReminderForm", "proReadingForm", "proChatLink", "pipConversationSelect", "pipNewConversation", "pipConversationMenu", "pipConversationDialog", "pipInstallDialog", "pipInstallIcon"]) {
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

const wixPipBridge = fs.readFileSync(new URL("../wix-pip-member-bridge-page-code.js", import.meta.url), "utf8");
assert.match(wixPipBridge, /\["pro", "project", "projectId", "app", "install"\]/, "Wix Pip bridge is not forwarding project and app-install context to the iframe");
assert.match(wixPipBridge, /HYDROPIP_APP_INSTALL_REQUEST/, "Wix Pip bridge is not routing the tier-specific Home Screen flow");
assert.match(wixPipBridge, /buildPipSource\(\)/, "Wix Pip bridge is not building a context-aware embed source");
assert.match(wixPipBridge, /PIP_HTML_SRC/, "Wix Pip bridge is not assigning the current Pip embed source");

const agentSource = fs.readFileSync(new URL("./pipAgent.js", import.meta.url), "utf8");
assert.match(agentSource, /stripSummaryLabel/, "Pip should remove TL;DR-style labels from replies");

for (const manifest of ["manifest-build.webmanifest", "manifest-pro.webmanifest"]) {
  const value = JSON.parse(fs.readFileSync(new URL(`../${manifest}`, import.meta.url), "utf8"));
  assert.equal(value.display, "standalone", `${manifest} should launch without browser chrome when supported`);
  assert.ok(value.icons.some((icon) => icon.sizes === "192x192"), `${manifest} needs a 192px icon`);
  assert.ok(value.icons.some((icon) => icon.sizes === "512x512"), `${manifest} needs a 512px icon`);
}

console.log("HydroPip site QA passed");

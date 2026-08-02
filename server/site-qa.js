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
for (const id of ["pipProView", "proJoinButton", "proCompare", "proPlanButton", "proWorkspace", "proReminderForm", "proReadingForm", "proChatLink"]) {
  assert.match(pipHtml, new RegExp(`id=["']${id}["']`), `pip.html is missing Pip Pro control ${id}`);
}
assert.match(pipHtml, /HYDROPIP_PIP_LOGIN_REQUEST/, "Pip Pro checkout bridge message is missing");
assert.match(pipHtml, /\/api\/pip\/projects\//, "Pip Pro workspace is not connected to project APIs");
assert.match(pipHtml, /requestedProjectType/, "Pip Pro project links should open the matching chat project");
assert.match(pipHtml, /How it works/, "Pip Pro should explain the subscription flow before checkout");

const wixPipBridge = fs.readFileSync(new URL("../wix-pip-member-bridge-page-code.js", import.meta.url), "utf8");
assert.match(wixPipBridge, /wixLocation\.query\?\.pro === "1"/, "Wix Pip bridge is not forwarding Pro mode to the iframe");
assert.match(wixPipBridge, /PIP_HTML_SRC/, "Wix Pip bridge is not assigning the current Pip embed source");

const agentSource = fs.readFileSync(new URL("./pipAgent.js", import.meta.url), "utf8");
assert.match(agentSource, /stripSummaryLabel/, "Pip should remove TL;DR-style labels from replies");

console.log("HydroPip site QA passed");

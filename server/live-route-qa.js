import assert from "node:assert/strict";

const siteBase = String(process.env.HYDROPIP_LIVE_SITE_URL || "https://www.hydropip.com").replace(/\/$/, "");
const apiBase = String(process.env.HYDROPIP_QA_API_URL || "https://hydropip-pip-api.onrender.com").replace(/\/$/, "");
const attempts = Math.max(1, Number(process.env.HYDROPIP_ROUTE_QA_ATTEMPTS || 1));
const retryDelayMs = Math.max(1000, Number(process.env.HYDROPIP_ROUTE_QA_RETRY_DELAY_MS || 15000));

const routes = [
  { name: "Home", url: `${siteBase}/` },
  { name: "Join", url: `${siteBase}/join`, marker: /Build with Pip beside you\./i },
  { name: "Signup alias", url: `${siteBase}/signup`, marker: /Build with Pip beside you\./i },
  { name: "Beta application", url: `${siteBase}/beta-test`, marker: /Grow with Pip before everyone else\./i },
  { name: "Pip Buddy", url: `${siteBase}/pip` },
  { name: "Track My Build", url: `${siteBase}/track-my-build` },
  { name: "Render Join", url: `${apiBase}/join`, marker: /Build with Pip beside you\./i },
  { name: "Render Beta application", url: `${apiBase}/beta-test`, marker: /Grow with Pip before everyone else\./i },
  { name: "Render health", url: `${apiBase}/api/pip/health`, marker: /"ok"\s*:\s*true/i }
];

let lastFailures = [];
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  lastFailures = await checkRoutes();
  if (!lastFailures.length) break;
  if (attempt < attempts) {
    console.warn(`Live route check attempt ${attempt} failed; retrying in ${Math.round(retryDelayMs / 1000)} seconds.`);
    await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
  }
}

assert.deepEqual(lastFailures, [], `HydroPip live route failures:\n${JSON.stringify(lastFailures, null, 2)}`);
console.log(`HydroPip live route QA passed for ${routes.length} critical paths`);

async function checkRoutes() {
  const failures = [];
  for (const route of routes) {
    try {
      const response = await fetch(route.url, {
        redirect: "follow",
        signal: AbortSignal.timeout(25000),
        headers: { "User-Agent": "HydroPip-Live-Route-QA/1.0" }
      });
      const body = await response.text();
      const issue = [];
      if (!response.ok) issue.push(`HTTP ${response.status}`);
      if (route.marker && !route.marker.test(body)) issue.push("expected page content missing");
      if (/ERROR:\s*PAGE NOT FOUND|404 Error:\s*Page Not Found/i.test(body)) issue.push("Wix 404 page returned");
      if (issue.length) failures.push({ name: route.name, requestedUrl: route.url, finalUrl: response.url, issue });
      console.log(`[${issue.length ? "FAIL" : "PASS"}] ${route.name} -> ${response.status} ${response.url}`);
    } catch (error) {
      failures.push({ name: route.name, requestedUrl: route.url, issue: [error.message] });
      console.log(`[FAIL] ${route.name} -> ${error.message}`);
    }
  }
  return failures;
}

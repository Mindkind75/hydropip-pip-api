import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const renderOrigin = "https://hydropip-pip-api.onrender.com";

function read(file) {
  return fs.readFileSync(new URL(file, root), "utf8");
}

function elementAttribute(html, selector, attribute) {
  const elements = [...html.matchAll(selector)];
  for (const [element] of elements) {
    const match = element.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"));
    if (match) return match[1];
  }
  return "";
}

function meta(html, key, value) {
  const tags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]);
  const tag = tags.find((candidate) => new RegExp(`${key}=["']${value}["']`, "i").test(candidate));
  return tag ? elementAttribute(tag, /<meta\b[^>]*>/gi, "content") : "";
}

function canonical(html) {
  const tags = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => match[0]);
  const tag = tags.find((candidate) => /rel=["']canonical["']/i.test(candidate));
  return tag ? elementAttribute(tag, /<link\b[^>]*>/gi, "href") : "";
}

function title(html) {
  return (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || "";
}

const indexablePages = [
  { file: "field-guide.html", url: `${renderOrigin}/field-guide`, renderRoute: "/field-guide" },
  { file: "how-it-works.html", url: `${renderOrigin}/how-it-works`, renderRoute: "/how-it-works" },
  { file: "hydroponic-tower-placement.html", url: `${renderOrigin}/hydroponic-tower-placement`, renderRoute: "/hydroponic-tower-placement" },
  { file: "track-start.html", url: `${renderOrigin}/track-start`, renderRoute: "/track-start" }
];

for (const page of indexablePages) {
  const html = read(page.file);
  const pageTitle = title(html);
  const description = meta(html, "name", "description");
  const robots = meta(html, "name", "robots");

  assert.ok(pageTitle.length >= 30 && pageTitle.length <= 65, `${page.file} needs a focused 30-65 character title`);
  assert.ok(description.length >= 110 && description.length <= 180, `${page.file} needs a useful 110-180 character description`);
  assert.match(robots, /^index,follow/, `${page.file} must be indexable`);
  assert.equal(canonical(html), page.url, `${page.file} canonical must match its clean Render URL`);
  assert.equal(meta(html, "property", "og:url"), page.url, `${page.file} Open Graph URL must match its canonical`);
  assert.ok(meta(html, "property", "og:title"), `${page.file} needs an Open Graph title`);
  assert.ok(meta(html, "property", "og:description"), `${page.file} needs an Open Graph description`);
  assert.ok(meta(html, "property", "og:image"), `${page.file} needs an Open Graph image`);
  assert.match(html, /<h1\b/i, `${page.file} needs one visible primary heading`);

  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(jsonLdBlocks.length > 0, `${page.file} needs structured data`);
  for (const block of jsonLdBlocks) assert.doesNotThrow(() => JSON.parse(block[1]), `${page.file} contains invalid JSON-LD`);
}

const home = read("home.html");
assert.match(title(home), /DIY Hydroponic Tower/i, "home title must target DIY hydroponic tower intent");
assert.match(home, /commercial-quality DIY hydroponic tower system/i, "home H1 must explain the product immediately");
assert.match(read("field-guide.html"), /How to Build a DIY Hydroponic Tower/i, "Field Guide must target build intent");
assert.match(read("how-it-works.html"), /FAQPage/, "How It Works must include FAQ structured data");
assert.match(read("hydroponic-tower-placement.html"), /approximately 12 by 8 feet/i, "Placement guide must provide a practical four-tower footprint");
assert.match(read("hydroponic-tower-placement.html"), /call 811/i, "Placement guide must include utility-location safety guidance");
assert.match(read("track-start.html"), /DIY Hydroponic Tower Cost and Parts List/i, "Track My Build must target cost and parts intent");

for (const [file, canonicalUrl] of [
  ["home.html", "https://www.hydropip.com/"],
  ["pip.html", "https://www.hydropip.com/pip"]
]) {
  const html = read(file);
  const robots = meta(html, "name", "robots");
  assert.match(robots, /noindex/, `${file} must not compete with its Wix wrapper`);
  assert.match(robots, /indexifembedded/, `${file} should remain indexable as embedded Wix content`);
  assert.match(robots, /follow/, `${file} should expose useful links to crawlers`);
  assert.equal(canonical(html), canonicalUrl, `${file} must canonicalize to Wix`);
}

for (const file of [
  "beta-admin.html",
  "pip-review-admin.html",
  "parts-checklist.html",
  "print-build-guide.html",
  "print-parts-guide.html"
]) {
  assert.match(meta(read(file), "name", "robots"), /noindex/, `${file} must stay out of search results`);
}

for (const file of [
  "affiliate-disclosure.html",
  "beta-test.html",
  "cancellation.html",
  "join.html",
  "nutrient-calculator.html",
  "privacy.html",
  "safety.html",
  "terms.html"
]) {
  const robots = meta(read(file), "name", "robots");
  assert.match(robots, /noindex/, `${file} must stay out of search results`);
  assert.match(robots, /follow/, `${file} should still pass discovery through its links`);
}

const sitemap = read("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(sitemapUrls, indexablePages.map((page) => page.url), "Render sitemap must contain its canonical public discovery pages");

const robots = read("robots.txt");
assert.match(robots, /Disallow: \/api\//, "robots.txt should keep API routes out of crawler queues");
assert.match(robots, new RegExp(`Sitemap: ${renderOrigin.replaceAll(".", "\\.")}\/sitemap\\.xml`), "robots.txt must advertise the Render sitemap");

const server = read("server/index.js");
for (const page of indexablePages) {
  const route = page.renderRoute;
  assert.match(server, new RegExp(`\\["${route.replaceAll("/", "\\/")}\"`), `Express must serve the clean route ${route}`);
}
assert.match(server, /X-Robots-Tag/, "API and admin responses need crawler-blocking headers");

console.log(`SEO QA passed for ${indexablePages.length} indexable pages, embedded Wix canonicals, private pages, robots.txt, and sitemap.xml.`);

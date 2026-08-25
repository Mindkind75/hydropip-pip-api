import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  amazonAffiliateTag,
  hasValidAmazonAffiliateTag,
  normalizeAmazonAffiliateLinks,
  tagAmazonUrl
} from "./pipProductLinks.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([".git", "node_modules", "assets"]);
const checkedExtensions = new Set([".html", ".js", ".json", ".md"]);
const amazonUrlPattern = /https?:\/\/(?:[a-z0-9-]+\.)?amazon\.com\/[^\s<>"'`\\{}$]+/gi;
const shortUrlPattern = /https?:\/\/(?:www\.)?(?:a\.co|amzn\.to)\//i;
const violations = [];

assert.equal(tagAmazonUrl("https://www.amazon.com/dp/B07L54HB83"), `https://www.amazon.com/dp/B07L54HB83?tag=${amazonAffiliateTag}`);
assert.equal(tagAmazonUrl("https://amazon.com/dp/B07L54HB83?tag=wrong-20&th=1"), `https://www.amazon.com/dp/B07L54HB83?tag=${amazonAffiliateTag}&th=1`);
assert.match(normalizeAmazonAffiliateLinks("Pump: https://www.amazon.com/dp/B07L54HB83."), new RegExp(`tag=${amazonAffiliateTag.replaceAll("-", "\\-")}\\.`));
assert.doesNotMatch(normalizeAmazonAffiliateLinks("https://a.co/d/example"), shortUrlPattern);

for (const file of walk(rootDir)) {
  const extension = path.extname(file).toLowerCase();
  if (!checkedExtensions.has(extension)) continue;
  const relative = path.relative(rootDir, file).replaceAll("\\", "/");
  if (relative === "server/affiliate-link-test.js") continue;
  const source = fs.readFileSync(file, "utf8");
  if (shortUrlPattern.test(source)) violations.push(`${relative}: contains an Amazon shortened URL`);
  for (const match of source.matchAll(amazonUrlPattern)) {
    const candidate = match[0].replace(/[),.;!?\]}]+$/, "");
    let parsed;
    try {
      parsed = new URL(candidate);
    } catch {
      continue;
    }
    if (candidate.endsWith("=")) continue;
    if (parsed.hostname.toLowerCase() === "affiliate-program.amazon.com") continue;
    if (!hasValidAmazonAffiliateTag(candidate)) {
      const line = source.slice(0, match.index).split(/\r?\n/).length;
      violations.push(`${relative}:${line}: ${candidate}`);
    }
  }
}

assert.deepEqual(violations, [], `Amazon affiliate link violations:\n${violations.join("\n")}`);
console.log(`Amazon affiliate links use ${amazonAffiliateTag}; dynamic normalization and repository scan passed.`);

function* walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else yield fullPath;
  }
}

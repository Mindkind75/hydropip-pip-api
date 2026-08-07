import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const kbDir = path.join(rootDir, "HydroPip_AIknowledge_base");

const STOPWORDS = new Set([
  "a", "about", "after", "all", "am", "an", "and", "are", "as", "at", "be", "but", "by", "can",
  "do", "for", "from", "get", "give", "had", "has", "have", "help", "how", "i", "if", "in",
  "into", "is", "it", "me", "my", "need", "of", "on", "or", "our", "should", "so", "that",
  "the", "their", "them", "then", "there", "this", "to", "up", "use", "was", "we", "what",
  "when", "where", "with", "you", "your"
]);

const SYNONYMS = {
  ec: ["tds", "ppm", "nutrient strength"],
  tds: ["ec", "ppm", "nutrient strength"],
  ibc: ["tank", "reservoir", "tote"],
  tank: ["ibc", "reservoir", "tote"],
  pump: ["feed pump", "circulation pump", "submersible"],
  feed: ["watering", "schedule", "timer", "runoff"],
  schedule: ["feed", "timer", "reminder"],
  media: ["perlite", "vermiculite", "substrate"],
  reuse: ["reset", "recover", "recycle media"],
  pipe: ["post", "galvanized steel", "metal support", "support"],
  tower: ["stack", "planter", "four-pot"],
  parts: ["amazon", "materials", "shopping", "buy"],
  safety: ["ibc", "chemical", "food-safe", "cleaning"],
  nutrient: ["masterblend", "mix", "ph", "ec", "tds"]
};

let cachedIndex;

export function retrieveHydroPipContext(query, options = {}) {
  const limit = Number(options.limit || 6);
  const index = getKnowledgeIndex();
  const queryTerms = expandTerms(tokenize(query));

  if (!queryTerms.size) {
    return {
      query,
      matches: index.slice(0, Math.min(limit, index.length)).map(toPublicMatch)
    };
  }

  const scored = index
    .map((chunk) => ({ ...chunk, score: scoreChunk(chunk, queryTerms) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score || a.source.localeCompare(b.source))
    .slice(0, limit)
    .map(toPublicMatch);

  return { query, matches: scored };
}

export function getKnowledgeIndex() {
  if (cachedIndex) return cachedIndex;

  const docs = [];
  for (const file of fs.readdirSync(kbDir)) {
    const fullPath = path.join(kbDir, file);
    if (!fs.statSync(fullPath).isFile()) continue;
    if (!/\.(md|json)$/i.test(file)) continue;
    const raw = fs.readFileSync(fullPath, "utf8");
    const text = file.endsWith(".json") ? jsonToText(JSON.parse(raw)) : raw;
    docs.push(...chunkDocument(file, text));
  }

  cachedIndex = docs.map((chunk) => ({
    ...chunk,
    terms: expandTerms(tokenize(`${chunk.title} ${chunk.text}`))
  }));

  return cachedIndex;
}

export function resetKnowledgeIndex() {
  cachedIndex = null;
}

export function formatContextForPrompt(searchResult) {
  if (!searchResult.matches.length) {
    return "No directly relevant HydroPip knowledge-base note was found. Use the authoritative saved profile and sound hydroponic or horticultural reasoning; ask one focused follow-up only if a necessary fact is missing.";
  }

  return searchResult.matches
    .map((match, index) => {
      return `HydroPip reference ${index + 1}\n${match.text}`;
    })
    .join("\n\n---\n\n");
}

function tokenize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9./-]+/g, " ")
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1 && !STOPWORDS.has(term));
}

function expandTerms(terms) {
  const expanded = new Set(terms);
  for (const term of terms) {
    for (const synonym of SYNONYMS[term] || []) {
      for (const piece of tokenize(synonym)) expanded.add(piece);
    }
  }
  return expanded;
}

function scoreChunk(chunk, queryTerms) {
  let score = 0;
  for (const term of queryTerms) {
    if (chunk.terms.has(term)) score += 1;
    if (chunk.title.toLowerCase().includes(term)) score += 1.5;
    if (chunk.source.toLowerCase().includes(term)) score += 0.75;
  }
  return score / Math.sqrt(chunk.terms.size || 1);
}

function chunkDocument(source, text) {
  const sections = [];
  let current = { title: path.basename(source), lines: [] };

  for (const line of text.split(/\r?\n/)) {
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading && current.lines.join("\n").trim()) {
      sections.push(current);
      current = { title: heading[2].trim(), lines: [line] };
      continue;
    }
    if (heading) current.title = heading[2].trim();
    current.lines.push(line);
  }
  if (current.lines.join("\n").trim()) sections.push(current);

  return sections.flatMap((section) => splitLongSection(source, section));
}

function splitLongSection(source, section) {
  const clean = section.lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  const words = clean.split(/\s+/);
  if (words.length <= 260) return [{ source, title: section.title, text: clean }];

  const chunks = [];
  for (let start = 0; start < words.length; start += 220) {
    chunks.push({
      source,
      title: `${section.title} (${chunks.length + 1})`,
      text: words.slice(start, start + 260).join(" ")
    });
  }
  return chunks;
}

function jsonToText(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.map((item, index) => jsonToText(item, `${prefix} item ${index + 1}`)).join("\n");
  }
  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, child]) => jsonToText(child, prefix ? `${prefix} ${key}` : key))
      .join("\n");
  }
  return `${prefix}: ${String(value)}`;
}

function toPublicMatch(match) {
  return {
    source: match.source,
    title: match.title,
    score: Number(match.score?.toFixed(3) || 0),
    text: match.text
  };
}

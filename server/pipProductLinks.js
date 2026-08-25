export const amazonAffiliateTag = String(process.env.AMAZON_ASSOCIATE_TAG || "hydrpip2002-20").trim();

const amazonUrlPattern = /https?:\/\/(?:[a-z0-9-]+\.)?amazon\.com\/[^\s<>"']+/gi;
const amazonShortUrlPattern = /https?:\/\/(?:www\.)?(?:a\.co|amzn\.to)\/[^\s<>"']+/gi;

export function tagAmazonUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return raw;
  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    if (host === "affiliate-program.amazon.com") return raw;
    if (host !== "amazon.com" && !host.endsWith(".amazon.com")) return raw;
    url.protocol = "https:";
    url.hostname = "www.amazon.com";
    url.searchParams.set("tag", amazonAffiliateTag);
    return url.toString();
  } catch {
    return raw;
  }
}

export function normalizeAmazonAffiliateLinks(value) {
  return String(value || "")
    .replace(amazonShortUrlPattern, "[Amazon short link removed; ask Pip for a tagged product link]")
    .replace(amazonUrlPattern, (candidate) => {
      const trailing = candidate.match(/[),.;!?\]}]+$/)?.[0] || "";
      const url = trailing ? candidate.slice(0, -trailing.length) : candidate;
      return `${tagAmazonUrl(url)}${trailing}`;
    });
}

export function hasValidAmazonAffiliateTag(value) {
  try {
    const url = new URL(String(value || ""));
    const host = url.hostname.toLowerCase();
    if (host === "affiliate-program.amazon.com") return true;
    if (host !== "amazon.com" && !host.endsWith(".amazon.com")) return true;
    return url.searchParams.get("tag") === amazonAffiliateTag;
  } catch {
    return false;
  }
}

function amazonSearch(query) {
  return tagAmazonUrl(`https://www.amazon.com/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}`);
}

export const pestProductLinks = Object.freeze({
  btKurstaki: amazonSearch("Bacillus thuringiensis kurstaki caterpillar control vegetables"),
  btiFungusGnats: amazonSearch("Bacillus thuringiensis israelensis fungus gnat control plants"),
  insecticidalSoap: amazonSearch("insecticidal soap aphids whiteflies mites vegetables"),
  spinosad: amazonSearch("spinosad garden insect spray vegetables thrips leaf miners"),
  neemOil: amazonSearch("neem oil garden spray vegetables aphids mites powdery mildew"),
  horticulturalOil: amazonSearch("horticultural oil scale mites vegetables garden"),
  yellowStickyTraps: amazonSearch("yellow sticky traps fungus gnats whiteflies aphids"),
  blueStickyTraps: amazonSearch("blue sticky traps thrips garden greenhouse"),
  beneficialNematodes: amazonSearch("beneficial nematodes fungus gnat larvae plants"),
  copperFungicide: amazonSearch("copper fungicide vegetables garden powdery mildew")
});

const namedProductSearches = [
  { label: "Bti fungus-gnat control", url: pestProductLinks.btiFungusGnats, patterns: [/\bbti\b/i, /bacillus thuringiensis (?:subsp\.?|subspecies )?israelensis/i] },
  { label: "Bt caterpillar control", url: pestProductLinks.btKurstaki, patterns: [/\bbtk\b/i, /\bbt\b/i, /bacillus thuringiensis (?:subsp\.?|subspecies )?kurstaki/i] },
  { label: "Insecticidal soap", url: pestProductLinks.insecticidalSoap, patterns: [/insecticidal soap/i, /potassium salts of fatty acids/i] },
  { label: "Spinosad garden spray", url: pestProductLinks.spinosad, patterns: [/\bspinosad\b/i] },
  { label: "Neem oil garden spray", url: pestProductLinks.neemOil, patterns: [/\bneem oil\b/i] },
  { label: "Horticultural oil", url: pestProductLinks.horticulturalOil, patterns: [/horticultural oil/i] },
  { label: "Yellow sticky traps", url: pestProductLinks.yellowStickyTraps, patterns: [/yellow sticky traps?/i] },
  { label: "Blue sticky traps", url: pestProductLinks.blueStickyTraps, patterns: [/blue sticky traps?/i] },
  { label: "Beneficial nematodes", url: pestProductLinks.beneficialNematodes, patterns: [/beneficial nematodes?/i] },
  { label: "Copper fungicide", url: pestProductLinks.copperFungicide, patterns: [/copper fungicide/i] }
];

export function appendNamedProductSearchLinks(answer, { maxLinks = 3 } = {}) {
  const text = String(answer || "").trim();
  if (!text) return text;
  const matches = namedProductSearches
    .filter((item) => item.patterns.some((pattern) => pattern.test(text)) && !text.includes(item.url))
    .slice(0, maxLinks);
  if (!matches.length) return text;
  const links = matches.map((item) => `- ${item.label}: ${item.url}`).join("\n");
  return `${text}\n\nFind the treatment Pip named:\n${links}`;
}

export function affiliateProductLabel(url) {
  return namedProductSearches.find((item) => url === item.url)?.label || null;
}

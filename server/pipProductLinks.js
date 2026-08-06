const affiliateTag = "hydrpip2002-20";

function amazonSearch(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}&tag=${affiliateTag}`;
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

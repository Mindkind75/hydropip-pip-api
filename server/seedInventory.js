const NUMBER_WORDS = Object.freeze({
  a: 1,
  an: 1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
});

const COUNT_PATTERN = "(?:\\d{1,3}|a|an|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)";
const LEADING_INTENT = /^(?:(?:i\s+(?:have|got|bought|picked\s+up)|i've\s+got|please|can\s+you|could\s+you|add|list|track|record|save|put)\s+)+/i;

export function parseSeedPackInventory(message) {
  const original = String(message || "").trim();
  if (!/\b(?:seed\s+)?pack(?:s|ets)?\b/i.test(original)) return null;
  const seedContext = /\bseeds?\b/i.test(original)
    || /\b(add|list|track|record|save|put)\b.*\b(?:my\s+)?(?:inventory|packs?)\b/i.test(original)
    || /\b(bean|beans|tomato|tomatoes|pepper|peppers|lettuce|greens|basil|cilantro|parsley|dill|kale|mustard|mizuna|chard|spinach|arugula|cucumber|squash|strawberr(?:y|ies)|herbs?|radish|carrot|okra|pea|peas)\b/i.test(original);
  if (!seedContext) return null;
  if (/^\s*(?:how many|which|what)\b/i.test(original) && !/\b(?:i have|i've got|add|list|track|record|save|put)\b/i.test(original)) return null;

  const segments = original
    .replace(/[.!?]+$/g, "")
    .replace(/\s+&\s+/g, " and ")
    .split(/\s*(?:,|;|\n|\band\b)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);

  const parsed = [];
  let pendingCrop = "";
  for (const rawSegment of segments) {
    const segment = rawSegment.replace(LEADING_INTENT, "").trim();
    if (!segment) continue;
    const countFirst = segment.match(new RegExp(`^(${COUNT_PATTERN})\\s+(?:seed\\s+)?pack(?:s|ets)?(?:\\s+of)?\\s+(.+)$`, "i"));
    const cropFirst = segment.match(new RegExp(`^(.+?)\\s*[:=\\-]?\\s+(${COUNT_PATTERN})\\s+(?:seed\\s+)?pack(?:s|ets)?$`, "i"));
    const countOnly = segment.match(new RegExp(`^(${COUNT_PATTERN})\\s+(?:seed\\s+)?pack(?:s|ets)?$`, "i"));
    if (countFirst) {
      addParsedItem(parsed, countFirst[2], parseCount(countFirst[1]));
      pendingCrop = "";
    } else if (cropFirst) {
      addParsedItem(parsed, cropFirst[1], parseCount(cropFirst[2]));
      pendingCrop = "";
    } else if (countOnly && pendingCrop) {
      addParsedItem(parsed, pendingCrop, parseCount(countOnly[1]));
      pendingCrop = "";
    } else if (!/^(?:seed\s+)?pack(?:s|ets)?\b/i.test(segment)) {
      pendingCrop = cleanCropName(segment);
    }
  }

  if (!parsed.length) return null;
  const merged = new Map();
  for (const item of parsed) {
    const key = item.crop.toLowerCase();
    const existing = merged.get(key);
    if (existing) existing.packsOnHand += item.packsOnHand;
    else merged.set(key, { ...item });
  }
  return { items: [...merged.values()].slice(0, 20) };
}

export function formatSeedPackSummary(items = []) {
  return items.map((item) => `${item.crop}: ${item.packsOnHand} pack${item.packsOnHand === 1 ? "" : "s"}`).join(", ");
}

function addParsedItem(output, crop, count) {
  const cleanCrop = cleanCropName(crop);
  if (!cleanCrop || !count) return;
  output.push({ crop: cleanCrop, packsOnHand: Math.min(999, count) });
}

function parseCount(value) {
  const normalized = String(value || "").trim().toLowerCase();
  const numeric = NUMBER_WORDS[normalized] ?? Number(normalized);
  return Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric) : null;
}

function cleanCropName(value) {
  const clean = String(value || "")
    .replace(LEADING_INTENT, "")
    .replace(/^(?:my|some|the)\s+/i, "")
    .replace(/\s+(?:seed|seeds)$/i, "")
    .replace(/[^a-z0-9' -]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean || /^(?:seed|seeds|inventory|pack|packs|packets)$/i.test(clean)) return "";
  return clean.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

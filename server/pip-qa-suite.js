import assert from "node:assert/strict";
import { askPip } from "./pipAgent.js";

const apiUrl = process.env.HYDROPIP_QA_API_URL || "";
const proUrl = "https://www.hydropip.com/pricing-plans";

const cases = [
  { q: "Can I make the system shorter? What if I only wanted 2 five pot high towers?", type: "free", must: ["short", "four-pot"], avoid: ["Tell me the step"] },
  { q: "Will two towers fit on my patio if I only have 4 feet by 8 feet?", type: "free", must: ["space"], avoid: ["Tell me the step"] },
  { q: "My lettuce leaves are yellow but the pump is running. What should I check first?", type: "free", must: ["pH"], avoid: ["return plumbing"] },
  { q: "The roots smell bad and look brown. Is my system ruined?", type: "free", must: ["root"], avoid: ["recirculating"] },
  { q: "I have green slime in the IBC. What do I do?", type: "free", must: ["light"], avoid: ["return line"] },
  { q: "What pH should I target for leafy greens?", type: "free", must: ["pH"], avoid: ["Pip Pro"] },
  { q: "My EC is super high and leaf tips are burned. What now?", type: "free", must: ["EC"], avoid: ["Tell me the step"] },
  { q: "How often should the mixing pump run after I add nutrients?", type: "free", must: ["45"], avoid: ["Pip Pro"] },
  { q: "I need the Amazon link for the pumps.", type: "product", must: ["B07L54HB83", "hydrpip2002-20"] },
  { q: "What link do I need for the end of the hose so I can add more towers later?", type: "product", must: ["B013646334", "B09B16KTNM", "hydrpip2002-20"] },
  { q: "Where do I buy seeds for this?", type: "product", must: ["seed", "hydrpip2002-20"] },
  { q: "Give me the full 4 tower shopping list with links.", type: "detailed", must: ["B007TFTW3U", "B07L54HB83"] },
  { q: "Can you save a reminder to prune basil every Friday?", type: "pro", must: ["Pip Pro", proUrl] },
  { q: "Can you track my pH readings over the next month?", type: "pro", must: ["Pip Pro", proUrl] },
  { q: "Can you build a schedule for my DWC bucket?", type: "pro", must: ["Pip Pro", proUrl] },
  { q: "Can you optimize my NFT rail system?", type: "pro", must: ["Pip Pro", proUrl] },
  { q: "Can I move mature plants into a raised bed when I flip the towers?", type: "free", must: ["raised"], avoid: ["Pip Pro"] },
  { q: "Do I need return plumbing?", type: "free", must: ["No"], avoid: ["recirculating tower kit"] },
  { q: "What if the pump fails while I am at work?", type: "free", must: ["pump"], avoid: ["Tell me the step"] },
  { q: "Can I use rainwater in the IBC?", type: "free", must: ["pH"], avoid: ["Tell me the step"] },
  { q: "How do I clean and reuse the perlite vermiculite mix?", type: "free", must: ["reuse"], avoid: ["Pip Pro"] },
  { q: "Can tomatoes grow in this?", type: "free", must: ["tomato"], avoid: ["Tell me the step"] },
  { q: "What if mosquitoes get in the tank?", type: "free", must: ["cover"], avoid: ["Tell me the step"] },
  { q: "Should I flush the main line?", type: "free", must: ["flush"], avoid: ["return plumbing"] },
  { q: "Why are my plants wilting even though the media is wet?", type: "free", must: ["pump"], avoid: ["Tell me the step"] },
  { q: "My seedlings are tall and leggy. What should I change?", type: "free", must: ["light"], avoid: ["Pip Pro"] },
  { q: "My lettuce is bolting and getting bitter. What now?", type: "free", must: ["heat"], avoid: ["Tell me the step"] },
  { q: "There is white fuzzy mold near the tower pockets.", type: "free", must: ["airflow"], avoid: ["Pip Pro"] },
  { q: "What if the IBC water gets too hot?", type: "free", must: ["cool"], avoid: ["return plumbing"] },
  { q: "Can you write me a football bet?", type: "offtopic", must: ["HydroPip"], avoid: ["odds"] }
];

const results = [];
for (const item of cases) {
  const data = await ask(item.q);
  const answer = String(data.answer || "");
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const detailed = item.type === "detailed";
  const maxWords = detailed ? 220 : 125;

  const failures = [];
  if (words > maxWords) failures.push(`too long: ${words} words`);
  for (const token of item.must || []) {
    if (!answer.toLowerCase().includes(token.toLowerCase())) failures.push(`missing: ${token}`);
  }
  for (const token of item.avoid || []) {
    if (answer.toLowerCase().includes(token.toLowerCase())) failures.push(`bad phrase: ${token}`);
  }
  if (item.type === "product" && !answer.includes("hydrpip2002-20")) failures.push("missing affiliate tag");
  if (item.type === "pro" && !answer.includes(proUrl)) failures.push("missing Pro signup URL");

  results.push({ question: item.q, type: item.type, words, mode: data.mode, failures, answer });
}

const failed = results.filter((result) => result.failures.length);
for (const result of results) {
  console.log(`\n[${result.failures.length ? "FAIL" : "PASS"}] ${result.type} | ${result.words} words | ${result.question}`);
  if (result.failures.length) console.log(`Failures: ${result.failures.join(", ")}`);
  console.log(result.answer.replace(/\s+/g, " ").slice(0, 420));
}

assert.equal(failed.length, 0, `${failed.length} Pip QA case(s) failed`);

async function ask(message) {
  if (apiUrl) {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/pip/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        subscription: { active: false, plan: "free_member" },
        user: { id: "qa-suite", email: "qa@hydropip.com" }
      })
    });
    if (!response.ok) throw new Error(`API ${response.status}: ${await response.text()}`);
    return response.json();
  }
  return askPip({
    message,
    subscription: { active: false, plan: "free_member" },
    user: { id: "qa-suite", email: "qa@hydropip.com" }
  });
}


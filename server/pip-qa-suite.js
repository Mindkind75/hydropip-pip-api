import assert from "node:assert/strict";
import { askPip, classifyQuestionIntent } from "./pipAgent.js";
import { classifyPhotoRequest } from "./pipPhotoAccess.js";
import { assessSiteFit } from "./pipTools.js";

const apiUrl = process.env.HYDROPIP_QA_API_URL || "";
const proUrl = "https://www.hydropip.com/pip?pro=1";

assert.equal(classifyQuestionIntent("Where should I put this system in my yard?"), "site_planning");
assert.equal(classifyQuestionIntent("Can you check this proposed HydroPip location?", { image: true }), "site_photo");
assert.equal(classifyPhotoRequest({ message: "Can you check this proposed HydroPip location?", projectType: "hydropip_build" }).access, "free_build");
assert.equal(classifyPhotoRequest({ message: "Can you plan this DWC location?", projectType: "existing_system_setup" }).access, "pip_pro_required");
assert.deepEqual(assessSiteFit({ towerCount: 4 }).recommended, { widthFeet: 12, depthFeet: 8 });
assert.equal(assessSiteFit({ towerCount: 4, availableWidthFeet: 12, availableDepthFeet: 8 }).fit, "recommended");

const cases = [
  { q: "Can I make the system shorter? What if I only wanted 2 five pot high towers?", type: "free", must: ["short", "four-pot"], avoid: ["Tell me the step"] },
  { q: "Will two towers fit on my patio if I only have 4 feet by 8 feet?", type: "free", must: ["space"], avoid: ["Tell me the step"] },
  { q: "I am a new customer. Where should I put HydroPip in my yard and how much room does four towers need?", type: "free", must: ["12 x 8", "sun", "GFCI", "track-my-build"], avoid: ["Tell me the step", "Pip Pro"] },
  { q: "Will four HydroPip towers fit in a 12 by 8 foot area?", type: "free", must: ["fits", "3 ft", "Track My Build"], avoid: ["Tell me the step", "Pip Pro"] },
  { q: "Can I upload a picture of the yard spot so Pip can help me place HydroPip?", type: "free", must: ["photo", "measurement"], avoid: ["Pip Pro", "Tell me the step"] },
  { q: "Can you review a photo and make a site plan for my NFT rails?", type: "pro", must: ["Pip Pro", proUrl] },
  { q: "My lettuce leaves are yellow but the pump is running. What should I check first?", type: "free", must: ["pH"], avoid: ["return plumbing"] },
  { q: "The roots smell bad and look brown. Is my system ruined?", type: "free", must: ["root"], avoid: ["recirculating"] },
  { q: "I have green slime in the IBC. What do I do?", type: "free", must: ["light"], avoid: ["return line"] },
  { q: "What pH should I target for leafy greens?", type: "free", must: ["pH"], avoid: ["Pip Pro"] },
  { q: "My EC is super high and leaf tips are burned. What now?", type: "free", must: ["EC"], avoid: ["Tell me the step"] },
  { q: "How often should the mixing pump run after I add nutrients?", type: "free", must: ["evenly blended", "secured hose"], avoid: ["Pip Pro", "45 minutes"] },
  { q: "Only one small area of my IBC is moving when the mixing pump runs.", type: "free", must: ["reposition", "top"], avoid: ["return loop"] },
  { q: "The mixing hose is splashing water outside the IBC.", type: "free", must: ["down", "secure", "No drilling"], avoid: ["must drill"] },
  { q: "I am starting a fresh 275 gallon batch for seeds. How much nutrient do I add?", type: "free", must: ["300", "150", "magnesium sulfate"], avoid: ["top off"] },
  { q: "My nutrient tank is half full. Should I add another full dose?", type: "free", must: ["One tank. One nutrient batch.", "Do not add"], avoid: ["600 grams"] },
  { q: "How much is a two tower system if I already own the IBC?", type: "free", must: ["2-tower", "$476", "IBC excluded", "track-my-build"], avoid: ["$400-$550"] },
  { q: "Can I place the IBC 25 feet uphill from the towers?", type: "free", must: ["head"], avoid: ["Tell me the step"] },
  { q: "My tap water smells like chlorine. Can I still mix nutrients with it?", type: "free", must: ["chlorine"], avoid: ["Tell me the step"] },
  { q: "Can I add two more towers to the hose I already have?", type: "free", must: ["flow", "B09B16KTNM"], avoid: ["Tell me the step"] },
  { q: "I need the Amazon link for the pumps.", type: "product", must: ["B07L54HB83", "hydrpip2002-20"] },
  { q: "I need the tubing from the main hose.", type: "product", must: ["B0GQQP8M83", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "I just need to purchase the tubing.", type: "product", must: ["B0GQQP8M83", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "What do I buy for the small line that feeds each tower?", type: "product", must: ["B0GQQP8M83", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "I need the tool to poke holes in the hose.", type: "product", must: ["tubing+punch", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "Where do I get the main hose from the pump to the towers?", type: "product", must: ["garden+hose", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "What pipe supports each tower and where do I buy it?", type: "free", must: ["galvanized steel", "rigid metal", "8-10", "100537138"], avoid: ["garden+hose", "PVC pipe"] },
  { q: "How do I drive the tower post into the ground?", type: "free", must: ["811", "call811.com", "utility", "private"], avoid: ["just drive", "no need"] },
  { q: "I need the smart timer plug.", type: "product", must: ["B091FXH2FR", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "I need the grow medium.", type: "product", must: ["B0FYTT7D6F", "B08WF8C5CL", "hydrpip2002-20"], avoid: ["Tell me what you want"] },
  { q: "What link do I need for the end of the hose so I can add more towers later?", type: "product", must: ["B013646334", "B09B16KTNM", "hydrpip2002-20"] },
  { q: "What piece goes on the end of the main hose?", type: "product", must: ["B013646334", "B09B16KTNM", "hydrpip2002-20"], avoid: ["Main garden hose feed line"] },
  { q: "I need a gasket for the garden hose shutoff valve.", type: "product", must: ["B0F1TRNY2K", "standard 3/4-inch garden hose washers", "hydrpip2002-20"], avoid: ["I need HydroPip team review"] },
  {
    q: "What size should it be?",
    type: "product",
    history: [
      { role: "user", content: "I need the piece for the end of the main hose so I can add more towers later." },
      { role: "assistant", content: "Use the shutoff/flush valve plus hose adapters for future extensions." }
    ],
    must: ["3/4-inch", "GHT", "B013646334", "hydrpip2002-20"],
    avoid: ["Tell me the step", "narrow this"]
  },
  { q: "Where do I buy seeds for this?", type: "product", must: ["seed", "hydrpip2002-20"] },
  { q: "Give me the full 4 tower shopping list with links.", type: "detailed", must: ["B007TFTXAC", "B07L54HB83"] },
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
  { q: "Can I grow strawberries in this?", type: "free", must: ["Strawberries"], avoid: ["Tell me the step"] },
  { q: "My basil tastes bitter. What happened?", type: "free", must: ["basil"], avoid: ["Pip Pro"] },
  { q: "The leaves have tiny holes. What should I do?", type: "free", must: ["pests", "hydrpip2002-20"], avoid: ["Tell me the step"] },
  { q: "I found cabbage worms. Should I use BT?", type: "product", must: ["Bacillus+thuringiensis+kurstaki+caterpillar+control+vegetables", "hydrpip2002-20"], avoid: ["food+safe+garden+pest+control"] },
  { q: "There are aphids all over my kale. What spray should I buy?", type: "product", must: ["insecticidal+soap+aphids+whiteflies+mites+vegetables", "hydrpip2002-20"], avoid: ["food+safe+garden+pest+control"] },
  { q: "I have fungus gnats around the tower media. What should I use?", type: "product", must: ["Bacillus+thuringiensis+israelensis+fungus+gnat+control+plants", "hydrpip2002-20"], avoid: ["food+safe+garden+pest+control"] },
  { q: "Can I use fish tank water in the IBC?", type: "free", must: ["clean water"], avoid: ["Pip Pro"] },
  { q: "Is this safe around kids and pets?", type: "free", must: ["safe"], avoid: ["Tell me the step"] },
  { q: "Can I run this during a storm?", type: "free", must: ["GFCI"], avoid: ["Tell me the step"] },
  { q: "What grow zone should I use for plant timing?", type: "free", must: ["zone"], avoid: ["Tell me the step"] },
  {
    q: "Got the towers set. What should I plant this time of year?",
    type: "free",
    profile: { growZone: "9", location: "Ocala, FL", areaType: "outdoor_open", systemStage: "growing", towerCount: 4 },
    must: ["Zone 9"],
    avoid: ["Use two pumps in the IBC", "Ask one specific thing", "daytime high", "overnight low"]
  },
  { q: "Can you write me a football bet?", type: "offtopic", must: ["HydroPip"], avoid: ["odds"] }
];

const results = [];
for (const item of cases) {
  const data = await ask(item.q, item.history || [], item.profile || null);
  const answer = String(data.answer || "");
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const detailed = item.type === "detailed";
  const maxWords = detailed ? 220 : 125;

  const failures = [];
  if (words > maxWords) failures.push(`too long: ${words} words`);
  for (const token of item.must || []) {
    const presentInAnswer = answer.toLowerCase().includes(token.toLowerCase());
    const presentAsAction = token === proUrl && data.upgradeCta?.url === proUrl;
    if (!presentInAnswer && !presentAsAction) failures.push(`missing: ${token}`);
  }
  for (const token of item.avoid || []) {
    if (answer.toLowerCase().includes(token.toLowerCase())) failures.push(`bad phrase: ${token}`);
  }
  if (item.type === "product" && !answer.includes("hydrpip2002-20")) failures.push("missing affiliate tag");
  if (/https?:\/\/(?:www\.)?amazon\.com/i.test(answer) && !answer.includes("As an Amazon Associate I earn from qualifying purchases.")) {
    failures.push("missing Amazon disclosure");
  }
  if (item.type === "pro" && data.upgradeCta?.url !== proUrl && !answer.includes(proUrl)) failures.push("missing Pro signup action");

  results.push({ question: item.q, type: item.type, words, mode: data.mode, failures, answer });
}

const failed = results.filter((result) => result.failures.length);
for (const result of results) {
  console.log(`\n[${result.failures.length ? "FAIL" : "PASS"}] ${result.type} | ${result.words} words | ${result.question}`);
  if (result.failures.length) console.log(`Failures: ${result.failures.join(", ")}`);
  console.log(result.answer.replace(/\s+/g, " ").slice(0, 420));
}

assert.equal(failed.length, 0, `${failed.length} Pip QA case(s) failed`);

async function ask(message, history = [], profile = null) {
  if (apiUrl) {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/pip/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history,
        profile,
        subscription: { active: false, plan: "free_member" },
        user: { id: "qa-suite", email: "qa@hydropip.com" }
      })
    });
    if (!response.ok) throw new Error(`API ${response.status}: ${await response.text()}`);
    return response.json();
  }
  return askPip({
    message,
    history,
    profile,
    subscription: { active: false, plan: "free_member" },
    user: { id: "qa-suite", email: "qa@hydropip.com" }
  });
}


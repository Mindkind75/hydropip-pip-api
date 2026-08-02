import { buildSteps, parts, schedulingRules, setupWizardSchema } from "./pipData.js";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const affiliateLinks = {
  hoseEndValve: "https://www.amazon.com/dp/B013646334?tag=hydrpip2002-20",
  hoseAdapters: "https://www.amazon.com/dp/B09B16KTNM?tag=hydrpip2002-20",
  mainHose: "https://www.amazon.com/s?k=garden+hose+1%2F2+inch+50+ft&tag=hydrpip2002-20",
  dripIrrigation: "https://www.amazon.com/dp/B0BNG66HGP?tag=hydrpip2002-20",
  diffuserTubing: "https://www.amazon.com/s?k=1%2F2+inch+vinyl+tubing+flexible+hose&tag=hydrpip2002-20",
  tubingPunch: "https://www.amazon.com/s?k=drip+irrigation+tubing+punch+tool&tag=hydrpip2002-20",
  pumps: "https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20",
  smartPlug: "https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20",
  nutrients: "https://www.amazon.com/dp/B0727VTWH5?tag=hydrpip2002-20",
  perlite: "https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20",
  vermiculite: "https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20",
  phCalibration: "https://www.amazon.com/s?k=pH+calibration+solution+4.01+7.00+hydroponics&tag=hydrpip2002-20",
  phUpDown: "https://www.amazon.com/s?k=pH+up+pH+down+hydroponics+kit&tag=hydrpip2002-20",
  ecTdsMeter: "https://www.amazon.com/s?k=EC+TDS+meter+hydroponics&tag=hydrpip2002-20",
  ecTdsCalibration: "https://www.amazon.com/s?k=EC+TDS+calibration+solution+hydroponics&tag=hydrpip2002-20",
  seeds: "https://www.amazon.com/s?k=hydroponic+lettuce+herb+seeds&tag=hydrpip2002-20",
  stickyTraps: "https://www.amazon.com/s?k=yellow+sticky+traps+for+plants&tag=hydrpip2002-20",
  foodSafePestControl: "https://www.amazon.com/s?k=food+safe+garden+pest+control+vegetables&tag=hydrpip2002-20",
  mediaTopOff: "https://www.amazon.com/s?k=perlite+vermiculite+hydroponic+growing+medium&tag=hydrpip2002-20"
};
const configuredProSignupUrl = process.env.PIP_PRO_SIGNUP_URL || "";
const proSignupUrl = configuredProSignupUrl.includes("pricing-plans") ? "https://www.hydropip.com/pip?pro=1" : configuredProSignupUrl || "https://www.hydropip.com/pip?pro=1";

export function normalizeProfile(profile = {}) {
  return {
    towerCount: Number(profile.towerCount || 4),
    crop: String(profile.crop || "lettuce").toLowerCase(),
    plantingDate: profile.plantingDate || new Date().toISOString().slice(0, 10),
    reservoirGallons: Number(profile.reservoirGallons || schedulingRules.defaults.reservoirGallons),
    climateMode: String(profile.climateMode || "warm").toLowerCase(),
    feedDurationMinutes: Number(profile.feedDurationMinutes || 5),
    runoffLevel: String(profile.runoffLevel || "unknown").toLowerCase(),
    ph: profile.ph === "" || profile.ph == null ? null : Number(profile.ph),
    ec: profile.ec || null
  };
}

export function getBuildStep({ stepId } = {}) {
  if (!stepId) return { steps: buildSteps };
  return buildSteps.find((step) => step.id === stepId) || { error: `Unknown build step: ${stepId}` };
}

export function recommendParts({ towerCount = 4 } = {}) {
  const count = Math.max(1, Number(towerCount || 4));
  return {
    towerCount: count,
    parts: parts.map((part) => ({
      ...part,
      suggestedQuantity:
        part.name.includes("Four-pot") ? `${count * 2} orders total` :
        part.name.includes("Schedule 40") || part.name.includes("PVC tee") || part.name.includes("cinder") ? `${count} total` :
        part.quantity
    }))
  };
}

export function createGrowPlan(input = {}) {
  const profile = normalizeProfile(input);
  const start = new Date(`${profile.plantingDate}T12:00:00`);
  const tasks = [];

  for (const task of schedulingRules.baseTasks) {
    if (Number.isFinite(task.offsetDays)) {
      tasks.push(toReminder(start, task.offsetDays, task.title, task.note, task.category));
    }
    if (Number.isFinite(task.repeatEveryDays)) {
      for (let offset = task.repeatEveryDays; offset <= 42; offset += task.repeatEveryDays) {
        tasks.push(toReminder(start, offset, task.title, task.note, task.category));
      }
    }
  }

  for (const task of schedulingRules.cropTasks[profile.crop] || []) {
    tasks.push(toReminder(start, task.offsetDays, task.title, task.note, "crop"));
  }

  tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  return {
    profile,
    recommendations: buildRecommendations(profile),
    reminders: tasks,
    subscriptionGate: {
      free: "Pip can generate this plan for free.",
      paid: "Saving this grow, sending reminders, and tracking future readings require Pip Pro."
    }
  };
}

export function createReminder({ user, reminder, subscription } = {}) {
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Pip can explain the reminder for free, but saving reminders requires Pip Pro.",
      upgradeReason: "Pip Pro stores grow profiles, sends reminders, and tracks logs over time."
    };
  }

  return {
    status: "queued",
    userId: user?.id || "demo-user",
    reminder: {
      id: `rem_${Date.now()}`,
      ...reminder
    }
  };
}

export function getWizardSchema() {
  return setupWizardSchema;
}

export function highConfidenceAnswer(question = "", retrieval = { matches: [] }) {
  const q = question.toLowerCase();
  const contextLead = buildContextLead(retrieval);

  if (wantsTowerFeedTubing(q) || wantsTubingPurchase(q)) return tubingSupplyAnswer(contextLead);
  if (wantsHoseEnd(q)) return hoseEndSupplyAnswer(contextLead);
  if (wantsPart(q, ["main hose", "main feed hose", "garden hose", "feed hose", "hose from pump", "hose to towers"])) {
    return `${contextLead}For the main feed line, use a garden hose long enough to run from the feed pump past each tower.\n- Main hose search: ${affiliateLinks.mainHose}\n- Leave extra length for flushing and future expansion.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["punch", "awl", "hole tool", "poke hole", "punch hole", "hole in the hose"])) {
    return `${contextLead}Use a tubing punch or awl to make cleaner holes in the main hose.\n- Tubing punch/awl: ${affiliateLinks.tubingPunch}\n- Clean holes seal better around the small tower feed tubes.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["pump", "pumps", "feed pump", "mixing pump", "circulation pump"])) {
    return `${contextLead}Use two pumps in the IBC: one for circulation and one for feeding the towers.\n- Pump link: ${affiliateLinks.pumps}\n- Keep a spare on hand once plants are established.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["smart plug", "timer", "kasa", "outdoor plug"])) {
    return `${contextLead}Use an outdoor two-outlet smart plug/timer so the mix pump and feed pump can be scheduled separately.\n- Smart plug: ${affiliateLinks.smartPlug}\n- Keep pump schedules short until runoff is measured.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["nutrient", "nutrients", "masterblend", "master blend"])) {
    return `${contextLead}Use the MasterBlend-style nutrient kit for the IBC mix.\n- Nutrients: ${affiliateLinks.nutrients}\n- Circulate 45-60 minutes after mixing, then test pH and EC/TDS.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["perlite", "vermiculite", "media", "medium", "grow medium", "growing medium"])) {
    return `${contextLead}Use a reusable 50/50 perlite and vermiculite blend in the tower pots.\n- Perlite: ${affiliateLinks.perlite || "https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20"}\n- Vermiculite: ${affiliateLinks.vermiculite || "https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20"}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["ph meter", "ph tester", "ph test", "tds meter", "ec meter", "ppm meter"])) {
    return `${contextLead}For testing, start with pH and EC/TDS.\n- pH meter: https://www.amazon.com/dp/B08HLXBBK4?tag=hydrpip2002-20\n- EC/TDS meter: ${affiliateLinks.ecTdsMeter}\n- pH calibration solution: ${affiliateLinks.phCalibration}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["seed", "seeds", "starter plugs", "seed starting"])) {
    return `${contextLead}For seeds, start with leafy greens and herbs while dialing in HydroPip.\n- Seeds: ${affiliateLinks.seeds}\n- Later, Pip can use your grow zone for better variety timing.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["ibc cover", "tank cover", "tote cover", "cover"])) {
    return `${contextLead}Cover the IBC to block light and slow algae growth.\n- IBC cover: https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20\n- Keep lid openings tight around hoses.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["ibc tote", "275 gallon", "reservoir", "tank"])) {
    return `${contextLead}Use a 275-gallon IBC only if prior contents were food-safe or non-hazardous.\n- IBC reference: https://www.amazon.com/dp/B0876C67GR?tag=hydrpip2002-20\n- Used totes are often cheaper locally; clean thoroughly.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (wantsPart(q, ["stackable", "planter", "tower stack", "four pot", "4 pot", "pots"])) {
    return `${contextLead}Use two orders of the four-pot stackable planter sections per tower.\n- Planter sections: https://www.amazon.com/dp/B007TFTW3U?tag=hydrpip2002-20\n- Four towers need 8 orders total.\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }

  return null;
}

export function fallbackAnswer(question = "", retrieval = { matches: [] }) {
  const q = question.toLowerCase();
  const contextLead = buildContextLead(retrieval);
  const direct = highConfidenceAnswer(question, retrieval);
  if (direct) return direct;
  if (/\b(shorter|short|smaller|fit|space|footprint|height|compact|scale down|two towers|2 towers|fewer towers|less towers)\b/.test(q) && /\b(tower|towers|system|pots|pot)\b/.test(q)) {
    return `${contextLead}Yes, you can scale HydroPip down to fit a smaller space.\n- HydroPip uses four-pot stack sections, so five sections equals 20 pockets per tower.\n- Keep each center pipe securely driven and the 3/4 inch tee loose/removable.\n- Recalibrate feed time by runoff because shorter towers wet faster.\n\nSend width, depth, height, and wind exposure and I will sanity-check it.`;
  }
  if (/\b(full|complete|entire|4 tower|four tower|shopping list|parts list|materials list)\b/.test(q) && /\b(link|links|buy|shopping|parts|materials|tower|system)\b/.test(q)) {
    return `${contextLead}Core 4-tower shopping links:\n- Planter sections: https://www.amazon.com/dp/B007TFTW3U?tag=hydrpip2002-20\n- Two pumps: https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20\n- Smart plug: https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20\n- Nutrients: ${affiliateLinks.nutrients}\n- Perlite/vermiculite: https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20 and https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20\n\nLocal: 1/2 inch Schedule 40 pipe, 3/4 inch tees, cinder blocks.`;
  }
  if (/\b(yellow|chlorosis|pale)\b/.test(q) && /\b(leaf|leaves|lettuce|plant|plants)\b/.test(q)) {
    return `${contextLead}Check pH first, then nutrient strength.\n- If pH is out of range, plants can look hungry even with nutrients present.\n- Check EC/TDS before adding more feed.\n- Inspect roots and media moisture if yellowing is sudden.\n\nUseful tools: ${affiliateLinks.ecTdsMeter} and ${affiliateLinks.phCalibration}`;
  }
  if (/\b(root|roots)\b/.test(q) && /\b(brown|slimy|smell|stink|rot|bad|foul)\b/.test(q)) {
    return `${contextLead}That sounds like possible root stress or root rot.\n- Check water temperature, smell, and oxygen/circulation.\n- Remove badly affected plants so it does not spread.\n- Clean light leaks/debris and restart with healthy roots if needed.\n\nSend a root photo plus pH/EC and I will triage it.`;
  }
  if (/\b(green slime|slime|algae|green film)\b/.test(q)) {
    return `${contextLead}Green slime usually means light is reaching nutrient water.\n- Cover the IBC and any exposed wet spots.\n- Scrub/flush the affected area.\n- Retest pH/EC after cleanup.\n\nIBC cover link: https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20`;
  }
  if (/\b(white fuzz|white mold|mould|mold|powdery mildew|fuzzy)\b/.test(q)) {
    return `${contextLead}White fuzz means moisture plus poor airflow is hanging around too long.\n- Remove badly affected leaves or surface debris.\n- Improve airflow and avoid wetting foliage.\n- Check tower pockets for constantly soaked media and shorten feeds if needed.`;
  }
  if (/\b(wilt|wilting|limp|drooping|droopy)\b/.test(q)) {
    return `${contextLead}Wilting in HydroPip usually means water delivery, roots, heat, or EC is off.\n- Confirm the feed pump actually runs and each tower drips.\n- Check roots for brown/slimy smell.\n- Test pH/EC before adding nutrients.`;
  }
  if (/\b(leggy|stretching|stretched|pale seedlings|weak seedlings)\b/.test(q)) {
    return `${contextLead}Leggy seedlings usually need more light or less heat.\n- Move starts into stronger light sooner.\n- Keep airflow gentle but steady.\n- Transplant once roots can hold the 50/50 media without drying out.`;
  }
  if (/\b(bolt|bolting|going to seed|bitter lettuce)\b/.test(q)) {
    return `${contextLead}Bolting is usually heat, age, or stress.\n- Harvest greens earlier in hot weather.\n- Add shade during peak sun if needed.\n- Replant fast; tower flips are designed to make that easy.`;
  }
  if (/\b(water temp|water temperature|reservoir temp|tank temp|too hot|hot water)\b/.test(q)) {
    return `${contextLead}Keep the IBC as cool and shaded as you can.\n- Cover the tote and block sunlight from nutrient water.\n- Circulate before testing pH/EC.\n- If roots look stressed, reduce heat exposure before chasing nutrients.\n\nIBC cover: https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20`;
  }
  if (/\b(fungus gnat|gnats|aphid|aphids|pest|pests|bugs on)\b/.test(q)) {
    return `${contextLead}Handle pests early before they spread tower to tower.\n- Remove badly infested leaves and check undersides.\n- Add sticky traps nearby: ${affiliateLinks.stickyTraps}\n- Use crop-safe controls only: ${affiliateLinks.foodSafePestControl}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (/\b(tiny holes|holes in.*leaves|chewed|caterpillar|worm|leaf miner|leafminer)\b/.test(q)) {
    return `${contextLead}Tiny holes usually mean chewing pests, not a nutrient problem.\n- Check leaf undersides in the morning/evening.\n- Remove damaged leaves and visible pests.\n- Sticky traps: ${affiliateLinks.stickyTraps}\n- Food-safe controls: ${affiliateLinks.foodSafePestControl}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (/\b(strawberry|strawberries)\b/.test(q)) {
    return `${contextLead}Strawberries can work in HydroPip, but they are slower than greens.\n- Give them strong light and steady moisture without soaking crowns.\n- Keep pH/EC steady.\n- Start with greens/herbs first if you are still tuning the system.`;
  }
  if (/\b(basil|herb|herbs)\b/.test(q) && /\b(bitter|taste|flavor|flower|flowers)\b/.test(q)) {
    return `${contextLead}Bitter basil is usually stress or flowering.\n- Pinch flowers early and harvest tips often.\n- Reduce heat stress where possible.\n- Check pH/EC before changing nutrients.`;
  }
  if (/\b(fish tank|aquarium|pond water)\b/.test(q)) {
    return `${contextLead}I would not use fish-tank water as the normal HydroPip reservoir mix.\n- It can carry waste, algae, pathogens, and unpredictable nutrients.\n- Use clean water plus measured nutrients.\n- If experimenting, keep it separate from your main grow.`;
  }
  if (/\b(kid|kids|child|children|pet|pets|dog|cat|safe around)\b/.test(q)) {
    return `${contextLead}Make the build physically and electrically safe first.\n- Secure towers so they cannot tip.\n- Keep the IBC covered and cords on outdoor-rated GFCI-protected power.\n- Store nutrients and pH adjusters away from kids and pets.`;
  }
  if (/\b(storm|lightning|hurricane|heavy rain|wind|freeze|frost)\b/.test(q)) {
    return `${contextLead}Bad weather is mostly a stability and power-management problem.\n- Secure towers and hoses before wind hits.\n- Keep plugs elevated, outdoor-rated, and GFCI protected.\n- Pause feeding during unsafe electrical conditions, then inspect pumps/runoff afterward.`;
  }
  if (/\b(grow zone|zone|usda zone|planting zone)\b/.test(q)) {
    return `${contextLead}Grow zone helps with crop timing and variety choices.\n- Tell me your USDA zone or ZIP-level climate area.\n- I can suggest HydroPip crops and planting windows.\n- Saving zone-based schedules and reminders is Pip Pro: ${proSignupUrl}`;
  }
  if (/\b(grow light|lights|lighting|sun|shade|how much light)\b/.test(q)) {
    return `${contextLead}HydroPip works best when plants get strong, consistent light without cooking the reservoir.\n- Greens usually like bright sun with heat management.\n- Add afternoon shade in brutal heat.\n- Keep the IBC covered so light does not feed algae.`;
  }
  if (/\b(mixing pump|circulation pump|circulate|mixing)\b/.test(q) && /\b(how often|after|nutrient|nutrients|run)\b/.test(q)) {
    return `${contextLead}For the IBC mixing pump:\n- Run about 15 minutes every 3 daytime hours as a baseline.\n- After adding nutrients, circulate 45-60 minutes before testing.\n- Then check pH and EC/TDS before adjusting.`;
  }
  if (/\b(ph|pH)\b/.test(question) && /\b(target|range|should|ideal|leafy|greens|lettuce)\b/.test(q)) {
    return `${contextLead}For leafy greens, use pH as your first guardrail.\n- Aim around 5.8-6.3 as a practical HydroPip range.\n- Circulate 45-60 minutes after nutrients before trusting the reading.\n- Adjust slowly, then retest.`;
  }
  if (/\b(ec|tds|ppm|nutrient strength|leaf tips|tip burn|burned)\b/.test(q) && /\b(high|super high|burn|burned|tips|dilute|flush)\b/.test(q)) {
    return `${contextLead}High EC plus burned tips usually means the mix is too strong.\n- Dilute with clean water and retest.\n- Check pH so nutrients are available.\n- Resume shorter feeds after runoff looks normal.\n\nEC/TDS meter: ${affiliateLinks.ecTdsMeter}`;
  }
  if (/\b(rainwater|rain water)\b/.test(q)) {
    return `${contextLead}Rainwater can work, but test it first.\n- Filter debris and avoid contaminated roof runoff.\n- Check pH and EC/TDS before nutrients.\n- After nutrients circulate 45-60 minutes, test again before adjusting.`;
  }
  if (/\b(mosquito|mosquitoes|larvae|bugs in the tank)\b/.test(q)) {
    return `${contextLead}Keep mosquitoes out by covering access to standing water.\n- Cover IBC openings and light gaps.\n- Secure hoses through the lid.\n- Inspect after rain and flush debris.\n\nIBC cover link: https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20`;
  }
  if (/\b(reorder|refill|monthly|recurring|subscription|subscribe|supplies)\b/.test(q) && /\b(nutrient|nutrients|ph|ec|tds|seed|media|ibc|tank|calibration)\b/.test(q)) {
    return `${contextLead}Recurring supplies to keep stocked:\n- Nutrients: ${affiliateLinks.nutrients}\n- pH calibration / pH Up-Down: ${affiliateLinks.phCalibration} and ${affiliateLinks.phUpDown}\n- Seeds and media top-off: ${affiliateLinks.seeds} and ${affiliateLinks.mediaTopOff}\n\nTrack My Build estimates checks now. Saved refill reminders are Pip Pro: ${proSignupUrl}`;
  }
  if (q.includes("part") || q.includes("buy") || q.includes("amazon")) {
    return `${contextLead}Core HydroPip parts: stackable four-pot sections, 1/2 inch Schedule 40 support pipe, loose 3/4 inch tee, cinder block, 275-gallon IBC, two pumps, smart plug, hose/tubing, 50/50 perlite-vermiculite, nutrients, and pH/EC tools.\n\nAsk for any item by name and I will give the matching link.`;
  }
  if (q.includes("feed") || q.includes("schedule") || q.includes("runoff")) {
    return `${contextLead}Start with timed feeds and tune from runoff.\n- Mild: about 2 feed windows/day.\n- Warm: about 3/day.\n- Hot or mature plants: 4-6 shorter windows.\n\nTell me crop, feed minutes, runoff, pH, and EC/TDS and I will tune it.`;
  }
  if (q.includes("build") || q.includes("step") || q.includes("setup")) {
    return `${contextLead}Build order: anchor the 10-foot 1/2 inch Schedule 40 pipe, level the cinder block, stack the four-pot planters, use the 3/4 inch PVC tee as a loose top hose guide, add feed tubes and diffusers, install two IBC pumps, then calibrate timed feeds by runoff.`;
  }
  if (q.includes("remind") || q.includes("track") || q.includes("save")) {
    return `${contextLead}I can definitely help plan it, but saving reminders/tracking is Pip Pro: ${proSignupUrl}\n\nFree Pip can still tell you what to do next for the HydroPip build and current grow.`;
  }
  if (q.includes("ibc") || q.includes("tank")) {
    return `${contextLead}Use a 275-gallon IBC only if prior contents are known food-safe or non-hazardous.\n- One pump circulates the tank.\n- One pump feeds the towers.\n- Circulate 45-60 minutes after nutrients, then test pH/EC before adjusting.`;
  }
  if (/\b(raised bed|raised beds|soil bed|move.*bed|transplant)\b/.test(q)) {
    return `${contextLead}Yes, that is a HydroPip advantage.\n- When you flip towers, mature plants do not have to be wasted.\n- Healthy larger plants can move into raised beds and keep producing.\n- Shake/recover the perlite-vermiculite media first, then replant the tower pockets.`;
  }
  if (/\b(return plumbing|return line|recirculating|recycle runoff|drain line)\b/.test(q)) {
    return `${contextLead}No return plumbing for the HydroPip build.\n- Feed short timed cycles.\n- Measure runoff to tune duration.\n- Avoid recycling tower runoff back into the IBC; it keeps the system simpler and cleaner.`;
  }
  if (/\b(pump fails|pump failed|pump failure|pump dies|pump stops|power outage)\b/.test(q)) {
    return `${contextLead}If the feed pump fails, act like it is a watering interruption.\n- Check the smart plug/timer first.\n- Swap in a backup pump if plants are wilting.\n- Recheck media moisture and runoff after restart.\n\nPump link: ${affiliateLinks.pumps}`;
  }
  if (/\b(reuse|clean|recover|shake)\b/.test(q) && /\b(perlite|vermiculite|media|medium)\b/.test(q)) {
    return `${contextLead}Reuse the 50/50 perlite-vermiculite media.\n- Shake plants over a storage tub with rabbit wire/hardware cloth as a grate.\n- Pull roots and debris.\n- Top off what you lose before replanting.\n\nMedia top-off: ${affiliateLinks.mediaTopOff}`;
  }
  if (/\b(tomato|tomatoes)\b/.test(q)) {
    return `${contextLead}Tomatoes can grow hydroponically, but they are heavier and hungrier than greens.\n- Start HydroPip with greens/herbs first.\n- For tomatoes, plan stronger support, more pruning, and closer EC/pH checks.\n- Use Pip Pro later for crop-specific schedules and reminders.`;
  }
  if (/\b(flush|flushing)\b/.test(q) && /\b(main line|feed line|hose|line)\b/.test(q)) {
    return `${contextLead}Yes, flush the main feed line occasionally.\n- Open the end-of-hose valve/nozzle.\n- Run the feed pump briefly into a safe drain bucket/area.\n- Close it and confirm each tower still drips evenly.\n\nFlush valve: ${affiliateLinks.hoseEndValve}`;
  }
  return `${contextLead}I can help with HydroPip build, parts, feed timing, pH/EC, nutrients, IBC mixing, media reuse, and grow timing.\n\nAsk one specific thing, like “why are leaves yellow?” or “what link do I need for pumps?”`;
}

function wantsTowerFeedTubing(q) {
  const tubingIntent = /\b(tubing|tube|small hose|little hose|small line|little line|feed tube|feeder tube|tower line|drip line|irrigation line|irrigation kit|diffuser)\b/.test(q);
  const towerFeedContext = /\b(main hose|main line|feed hose|feed line|tower|towers|pot|pots|hole|branch|from the hose|off the hose|into the tower|water line)\b/.test(q);
  const buyIntent = hasShoppingIntent(q);
  return tubingIntent && towerFeedContext && buyIntent;
}

function wantsTubingPurchase(q) {
  return /\b(tubing|tube|small hose|little hose|small line|little line|feed tube|feeder tube|drip line|irrigation line|irrigation kit|diffuser)\b/.test(q) &&
    hasShoppingIntent(q);
}

function wantsHoseEnd(q) {
  const endIntent = /\b(end of the hose|end of hose|hose end|end of my hose|end of the main hose|main hose end|end of the line|end of main|piece goes on the end|part goes on the end|what goes on the end|for the end|on the end|add more later|add more towers|extend the line|extension|future expansion)\b/.test(q);
  const fittingIntent = /\b(piece|part|fitting|adapter|connector|coupler|coupling|nozzle|hose|link|url|buy|purchase|order|need)\b/.test(q);
  return endIntent && fittingIntent;
}

function wantsPart(q, terms) {
  return terms.some((term) => q.includes(term)) &&
    hasShoppingIntent(q);
}

function hasShoppingIntent(q) {
  return /\b(link|url|amazon|buy|order|purchase|need|part|parts|item|items|shopping|shop)\b/.test(q) ||
    /\b(where do i get|where can i get|where should i get|where to get)\b/.test(q);
}

function tubingSupplyAnswer(contextLead = "") {
  return `${contextLead}You want the small tower feed tubing that branches off the main hose.\n- Drip irrigation kit: ${affiliateLinks.dripIrrigation}\n- Diffuser tubing pieces: ${affiliateLinks.diffuserTubing}\n- Tubing punch/awl for clean holes: ${affiliateLinks.tubingPunch}\n\nHydroPip may earn from qualifying Amazon purchases.`;
}

function hoseEndSupplyAnswer(contextLead = "") {
  return `${contextLead}Use two pieces at the end of the main feed hose.\n- Shutoff/flush valve: ${affiliateLinks.hoseEndValve}\n- Hose adapters for future extensions: ${affiliateLinks.hoseAdapters}\n\nHydroPip may earn from qualifying Amazon purchases.`;
}

function toReminder(start, offsetDays, title, note, category) {
  return {
    date: new Date(start.getTime() + offsetDays * MS_PER_DAY).toISOString().slice(0, 10),
    title,
    note,
    category
  };
}

function buildRecommendations(profile) {
  const feedWindows = schedulingRules.defaults.feedWindowsByClimate[profile.climateMode] || 3;
  const recommendations = [
    `Starter feed rhythm: ${feedWindows} feed windows per day in ${profile.climateMode} conditions, using short cycles until runoff is measured.`,
    `IBC mixing baseline: ${schedulingRules.defaults.ibcCirculation.normal}.`,
    "After adding nutrients, circulate the IBC for 45-60 minutes before trusting pH or EC/TDS readings."
  ];

  if (profile.runoffLevel === "none") {
    recommendations.push("No runoff means the media may be drying too far between feeds. Check moisture and consider another short feed window.");
  } else if (profile.runoffLevel === "steady" || profile.runoffLevel === "too much") {
    recommendations.push("Steady or heavy runoff means the feed window may be too long. Shorten the cycle before adding return plumbing.");
  } else if (profile.runoffLevel === "unknown") {
    recommendations.push("Measure runoff at one representative tower before trusting the schedule.");
  } else {
    recommendations.push("Light runoff is useful for calibration. Once tuned, the goal is minimal excess.");
  }

  if (profile.ph == null || Number.isNaN(profile.ph)) {
    recommendations.push("Add a pH reading before Pip suggests pH adjustment.");
  } else if (profile.ph < 5.6) {
    recommendations.push("pH appears low. Circulate, retest, then adjust upward slowly if the reading holds.");
  } else if (profile.ph > 6.5) {
    recommendations.push("pH appears high for many leafy greens and herbs. Circulate, retest, then adjust downward slowly if needed.");
  } else {
    recommendations.push("pH is in a reasonable starter range for many leafy greens and herbs.");
  }

  if (!profile.ec) recommendations.push("Add EC/TDS so Pip can track nutrient strength over time.");

  return recommendations;
}

function buildContextLead(retrieval) {
  const best = retrieval?.matches?.[0];
  if (!best?.title) return "";
  return "";
}

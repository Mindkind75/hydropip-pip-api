import { buildSteps, parts, schedulingRules, setupWizardSchema } from "./pipData.js";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const affiliateLinks = {
  hoseEndValve: "https://www.amazon.com/dp/B013646334?tag=hydrpip2002-20",
  hoseAdapters: "https://www.amazon.com/dp/B09B16KTNM?tag=hydrpip2002-20",
  pumps: "https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20",
  smartPlug: "https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20",
  nutrients: "https://www.amazon.com/dp/B0727VTWH5?tag=hydrpip2002-20",
  phCalibration: "https://www.amazon.com/s?k=pH+calibration+solution+4.01+7.00+hydroponics&tag=hydrpip2002-20",
  phUpDown: "https://www.amazon.com/s?k=pH+up+pH+down+hydroponics+kit&tag=hydrpip2002-20",
  ecTdsMeter: "https://www.amazon.com/s?k=EC+TDS+meter+hydroponics&tag=hydrpip2002-20",
  ecTdsCalibration: "https://www.amazon.com/s?k=EC+TDS+calibration+solution+hydroponics&tag=hydrpip2002-20",
  seeds: "https://www.amazon.com/s?k=hydroponic+lettuce+herb+seeds&tag=hydrpip2002-20",
  mediaTopOff: "https://www.amazon.com/s?k=perlite+vermiculite+hydroponic+growing+medium&tag=hydrpip2002-20"
};
const proSignupUrl = process.env.PIP_PRO_SIGNUP_URL || "https://www.hydropip.com/pricing-plans";

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

export function fallbackAnswer(question = "", retrieval = { matches: [] }) {
  const q = question.toLowerCase();
  const contextLead = buildContextLead(retrieval);
  if ((q.includes("end of the hose") || q.includes("hose end") || q.includes("add more towers") || q.includes("extend the line")) && (q.includes("link") || q.includes("part") || q.includes("adapter") || q.includes("connector") || q.includes("nozzle"))) {
    return `${contextLead}Use two pieces at the end of the main feed hose:\n- Shutoff/flush valve: ${affiliateLinks.hoseEndValve}\n- Hose adapters for future extensions: ${affiliateLinks.hoseAdapters}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (/\b(shorter|short|smaller|fit|space|footprint|height|compact|scale down|two towers|2 towers|fewer towers|less towers)\b/.test(q) && /\b(tower|towers|system|pots|pot)\b/.test(q)) {
    return `${contextLead}Yes, you can scale HydroPip down to fit a smaller space.\n- HydroPip uses four-pot stack sections, so five sections equals 20 pockets per tower.\n- Keep each center pipe securely driven and the 3/4 inch tee loose/removable.\n- Recalibrate feed time by runoff because shorter towers wet faster.\n\nSend width, depth, height, and wind exposure and I will sanity-check it.`;
  }
  if (/\b(full|complete|entire|4 tower|four tower|shopping list|parts list|materials list)\b/.test(q) && /\b(link|links|buy|shopping|parts|materials|tower|system)\b/.test(q)) {
    return `${contextLead}Core 4-tower shopping links:\n- Planter sections: https://www.amazon.com/dp/B007TFTW3U?tag=hydrpip2002-20\n- Two pumps: https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20\n- Smart plug: https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20\n- Nutrients: ${affiliateLinks.nutrients}\n- Perlite/vermiculite: https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20 and https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20\n\nLocal: 1/2 inch Schedule 40 pipe, 3/4 inch tees, cinder blocks.`;
  }
  if (/\b(pump|pumps|feed pump|mixing pump|circulation pump)\b/.test(q) && /\b(link|url|amazon|buy|order|purchase|get)\b/.test(q)) {
    return `${contextLead}Use two pumps in the IBC: one for circulation and one for feeding the towers.\n\nPump link: ${affiliateLinks.pumps}\n\nHydroPip may earn from qualifying Amazon purchases.`;
  }
  if (/\b(seed|seeds|starter plugs|seed starting)\b/.test(q) && /\b(link|url|amazon|buy|order|purchase|get|where)\b/.test(q)) {
    return `${contextLead}For seeds, start with leafy greens and herbs while dialing in the system.\n\nSeed/search link: ${affiliateLinks.seeds}\n\nLater, Pip can use your grow zone to suggest better seasonal varieties. HydroPip may earn from qualifying purchases.`;
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
    return `${contextLead}Handle pests early before they spread tower to tower.\n- Remove badly infested leaves.\n- Improve airflow and keep old plant debris out of pockets.\n- Use crop-safe controls, then rinse harvests well.`;
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

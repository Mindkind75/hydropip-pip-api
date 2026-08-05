import { systemBrain } from "./pipData.js";
import { formatZonePlantingGuidance, getZonePlantingGuidance } from "./plantingCalendar.js";
import { createGrowPlan, createReminder, fallbackAnswer, getBuildStep, getWizardSchema, highConfidenceAnswer, recommendParts } from "./pipTools.js";
import { appendProjectMessage, buildProjectContext, createReviewItem } from "./pipMemory.js";
import { formatContextForPrompt, retrieveHydroPipContext } from "./ragStore.js";
import { combineOpenAiUsage, pipAiDisabled } from "./pipUsage.js";

let clientPromise;

const toolMap = {
  get_build_step: getBuildStep,
  recommend_parts: recommendParts,
  create_grow_plan: createGrowPlan,
  create_reminder: createReminder,
  manage_calendar: (args) => args,
  flag_review_item: (args) => ({ status: "queued", ...args }),
  get_wizard_schema: getWizardSchema
};

const configuredProSignupUrl = process.env.PIP_PRO_SIGNUP_URL || "";
const proSignupUrl = configuredProSignupUrl.includes("pricing-plans") ? "https://www.hydropip.com/pip?pro=1" : configuredProSignupUrl || "https://www.hydropip.com/pip?pro=1";

const tools = [
  {
    type: "function",
    name: "get_build_step",
    description: "Return HydroPip build steps or one specific build step.",
    parameters: {
      type: "object",
      properties: { stepId: { type: "string", enum: ["anchor", "stack", "plumb", "pumps", "calibrate"] } },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "recommend_parts",
    description: "Return HydroPip parts and quantities for a tower count.",
    parameters: {
      type: "object",
      properties: { towerCount: { type: "number" } },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "create_grow_plan",
    description: "Create a HydroPip grow plan and deterministic reminder list.",
    parameters: {
      type: "object",
      properties: {
        towerCount: { type: "number" },
        crop: { type: "string" },
        plantingDate: { type: "string" },
        reservoirGallons: { type: "number" },
        climateMode: { type: "string" },
        feedDurationMinutes: { type: "number" },
        runoffLevel: { type: "string" },
        ph: { type: ["number", "null"] },
        ec: { type: ["string", "null"] }
      },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "create_reminder",
    description: "Prepare a grow reminder for the user to review before it is saved. Requires active subscription.",
    parameters: {
      type: "object",
      properties: {
        reminder: {
          type: "object",
          properties: {
            title: { type: "string" },
            note: { type: "string" },
            category: { type: "string", enum: ["grow", "maintenance", "nutrients", "harvest"] },
            dueDate: { type: ["string", "null"], description: "Local date in YYYY-MM-DD format" },
            dueTime: { type: ["string", "null"], description: "The user's local time in 24-hour HH:MM format" },
            repeat: { type: ["object", "null"], additionalProperties: true }
          },
          required: ["title"],
          additionalProperties: false
        }
      },
      required: ["reminder"],
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "manage_calendar",
    description: "Prepare a Pip Calendar change for user confirmation. Use for multiple additions, updates, rescheduling, selected deletion, clearing the planner, or replacing the current schedule. This tool never changes data until the user presses the confirmation button.",
    parameters: {
      type: "object",
      properties: {
        operation: { type: "string", enum: ["add", "update", "delete", "delete_all", "replace_all"] },
        reminderIds: { type: "array", items: { type: "string" } },
        targetTitles: { type: "array", items: { type: "string" } },
        reminders: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              note: { type: "string" },
              category: { type: "string", enum: ["grow", "maintenance", "nutrients", "harvest"] },
              dueDate: { type: ["string", "null"], description: "First local occurrence in YYYY-MM-DD format" },
              dueTime: { type: ["string", "null"], description: "Local 24-hour HH:MM time" },
              weekday: { type: ["string", "null"], enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", null] },
              repeat: { type: ["object", "null"], additionalProperties: true },
              timezone: { type: ["string", "null"] }
            },
            required: ["title"],
            additionalProperties: false
          }
        },
        patch: {
          type: "object",
          properties: {
            title: { type: "string" },
            note: { type: "string" },
            category: { type: "string", enum: ["grow", "maintenance", "nutrients", "harvest"] },
            dueDate: { type: ["string", "null"] },
            dueTime: { type: ["string", "null"] },
            repeat: { type: ["object", "null"], additionalProperties: true },
            timezone: { type: ["string", "null"] }
          },
          additionalProperties: false
        }
      },
      required: ["operation"],
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "get_wizard_schema",
    description: "Return the setup wizard questions Pip needs before building a grow profile.",
    parameters: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    type: "function",
    name: "flag_review_item",
    description: "Queue a question for HydroPip team review when Pip cannot answer confidently after asking for missing context.",
    parameters: {
      type: "object",
      properties: {
        reason: {
          type: "string",
          enum: ["missing_knowledge", "ambiguous_request", "conflicting_context", "unsupported_workflow", "low_confidence", "tool_gap"]
        },
        missingContext: {
          type: "array",
          items: { type: "string" },
          description: "Specific facts Pip would need to answer correctly."
        },
        attemptedAnswer: { type: "string" },
        priority: { type: "string", enum: ["normal", "high"] }
      },
      required: ["reason"],
      additionalProperties: false
    }
  }
];

export async function askPip({ message, image, profile, subscription, history = [], user, projectId, conversationId, beforeAiCall }) {
  const imageInput = normalizeImageInput(image);
  const trimmed = String(message || "").trim() || (imageInput ? "Inspect this photo and identify the most likely HydroPip plant-health, pest, plumbing, or equipment issue." : "");
  if (!trimmed) return { answer: "Ask me where you are in the HydroPip build and I will guide the next step.", mode: "empty" };
  const recentHistory = normalizeHistory(history);
  const userId = String(user?.id || user?.email || "").trim();
  const projectContext = userId && projectId ? await buildProjectContext({ userId, projectId, conversationId }) : null;
  const questionIntent = classifyQuestionIntent(trimmed, { image: Boolean(imageInput), history: recentHistory });
  const rawRetrieval = retrieveHydroPipContext(trimmed, { limit: 10 });
  const retrieval = selectIntentContext(rawRetrieval, questionIntent);
  const retrievedContext = formatContextForPrompt(retrieval);
  const effectiveProfile = resolveEffectiveProfile(profile, projectContext);
  const answerContext = buildAnswerContext({
    profile: effectiveProfile,
    projectContext,
    subscription,
    questionIntent
  });
  const projectMemory = projectContext
    ? {
        active: true,
        projectId,
        projectType: projectContext.project.type,
        conversationId: projectContext.conversation.id,
        conversationTitle: projectContext.conversation.title
      }
    : { active: false, reason: userId && projectId ? "project_not_found" : "not_requested" };

  await rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "user",
    content: imageInput ? `${trimmed}\n[Photo attached for visual diagnosis]` : trimmed
  });

  if (isClearlyOffTopic(trimmed)) {
    const answer = [
      "I am built for HydroPip and home hydroponics, so I will keep us there.",
      "Ask me about parts, tower sizing, pH/EC, nutrient mix, feed timing, crop timing, pests, or troubleshooting."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "off_topic",
      sources: []
    });
    return { answer, mode: "off_topic", sources: [], projectMemory };
  }

  if (wantsCustomNonHydroPipSupport(trimmed) && !subscription?.active) {
    const answer = [
      `I can definitely help with that, but custom support for non-HydroPip systems is a Pip Pro subscription feature: ${proSignupUrl}`,
      "Free Pip can still walk you through the HydroPip timed-feed tower build, parts list, first fill, and basic operation."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "subscription_gate",
      sources: []
    });
    return {
      answer,
      mode: "subscription_gate",
      sources: [],
      subscriptionRequired: true,
      upgradeReason: "Pip Pro unlocks custom support for non-HydroPip hydro systems, saved plans, reminders, readings, and grow logs.",
      upgradeUrl: proSignupUrl,
      projectMemory
    };
  }

  if (wantsTracking(trimmed) && !subscription?.active) {
    const answer = [
      `I can definitely help with that, but saving reminders, readings, logs, and ongoing tracking is Pip Pro subscription behavior: ${proSignupUrl}`,
      "Free Pip can still tell you the next HydroPip build or grow step right now."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "subscription_gate",
      sources: []
    });
    return {
      answer,
      mode: "subscription_gate",
      sources: [],
      subscriptionRequired: true,
      upgradeReason: "Pip Pro saves reminders, readings, grow logs, crop schedules, and project history.",
      upgradeUrl: proSignupUrl,
      projectMemory
    };
  }

  const directCalendar = subscription?.active
    ? buildDirectCalendarConfirmation({ message: trimmed, history: recentHistory, projectContext })
    : null;
  if (directCalendar) {
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: directCalendar.answer,
      mode: "calendar_confirmation",
      sources: []
    });
    return {
      answer: directCalendar.answer,
      mode: "calendar_confirmation",
      sources: [],
      projectMemory,
      actions: directCalendar.actions
    };
  }

  const deterministicQuestion = questionIntent === "hydroponic_guidance" && isVagueFollowUp(trimmed)
    ? withRecentContext(trimmed, recentHistory)
    : trimmed;
  const directAnswer = imageInput || (subscription?.active && ["reminder_action", "crop_plan_action"].includes(questionIntent)) ? null : highConfidenceAnswer(deterministicQuestion, retrieval);
  if (directAnswer) {
    const answer = compactAnswer(directAnswer, trimmed, retrieval);
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "rules_direct",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }))
    });
    return {
      answer,
      mode: "rules_direct",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score })),
      projectMemory
    };
  }

  const client = await getOpenAiClient();
  if (!client) {
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, answerContext });
  }

  const model = process.env.PIP_MODEL || "gpt-5-mini";
  if (typeof beforeAiCall === "function") {
    await beforeAiCall({ model, hasPhoto: Boolean(imageInput), detailed: wantsDetailedInfo(trimmed) });
  }

  let response;
  const currentUserContent = [
    {
      type: "input_text",
      text: JSON.stringify({
        message: trimmed,
        currentDate: answerContext.currentDate,
        currentTimeZone: answerContext.timeZone,
        questionIntent,
        authoritativeGrowProfile: effectiveProfile,
        subscription: subscription || { active: false, plan: "free" },
        projectContext: compactProjectContext(projectContext),
        contextRules: "The saved grow profile is authoritative. The current question controls intent. Conversation history and retrieved notes are supporting context only."
      })
    },
    ...(imageInput ? [{ type: "input_image", image_url: imageInput.dataUrl, detail: "auto" }] : [])
  ];
  const responseInput = [
    ...recentHistory,
    { role: "user", content: currentUserContent }
  ];
  const enabledTools = toolsForQuestion(questionIntent, trimmed);
  try {
    const request = {
      model,
      store: false,
      instructions: [
      systemBrain,
      `CURRENT QUESTION INTENT: ${questionIntent}. Answer this intent; do not drift to a different HydroPip topic.`,
      `AUTHORITATIVE USER AND GROW CONTEXT:\n${formatAnswerContext(answerContext)}`,
      "Use the saved grow profile whenever it contains relevant details. Do not ask for zone, location, area type, system stage, tower count, reservoir size, crops, medium, nutrients, or goals when that value is already present.",
      "Start with a direct answer to the current question. Conversation history is useful for references and follow-ups, but an older topic must never override a clear new question.",
      "Use HydroPip tools only when one is available for the current intent. Do not call a parts or build tool for crop-selection, seasonal, plant-health, or general growing questions.",
      "For Pip Pro calendar changes, use a calendar tool instead of describing an imaginary action. Use create_reminder for one new reminder. Use manage_calendar for multiple reminders, edits, rescheduling, selected deletion, clearing all tasks, or replacing the current schedule. Use create_grow_plan for a crop schedule. Every tool result becomes an on-screen confirmation button; never tell the user to press a button unless a confirmation action is actually returned.",
      "When the user gives a weekday and time for a weekly reminder, include weekday, dueTime, repeat frequency weekly, and the user's timezone. Compute or supply a first dueDate when possible. Use saved profile values instead of asking for facts Pip already has.",
      "Use retrieved HydroPip knowledge only when it directly answers the current intent. Ignore retrieved notes that are about a different topic. For crop timing and plant questions, combine relevant saved profile details with sound hydroponic and horticultural knowledge.",
      "HydroPip is a real timed-feed runoff tower system, not a recirculating tower kit. Do not recommend return plumbing, drain plumbing, recycling tower runoff, filters for returning runoff, or generic recirculating tower layouts unless the user explicitly asks to compare alternatives.",
      "For the physical build, describe the actual HydroPip parts: an 8-10 foot, 1/2-inch galvanized steel support pipe, single-cell cinder block base, stackable four-pot sections, PVC tee hose guide, main feed hose, small feed tubes, diffuser pieces, 275 gallon IBC, one circulation pump, one feed pump, outdoor two-outlet smart plug, and reusable 50/50 perlite/vermiculite media. Never describe the structural support as flexible plumbing or PVC. Keep roughly 5 feet above grade; recommend 10 feet for deeper anchoring in exposed or windier locations.",
      "Whenever driving, anchoring, pounding, or installing a support pipe is discussed, first tell the user to call 811 or visit https://call811.com/, wait for utility markings, and identify private irrigation, septic, electrical, and water lines. Do not imply that driving is safe until the location is confirmed clear.",
      "Behave like a capable ChatGPT-style hydroponic grow buddy, not a menu bot. Answer the user's actual question with practical hydroponic reasoning whenever it is about growing food, HydroPip, gardening, seedlings, pests, nutrients, pH/EC, pumps, water, weather, layout, harvesting, or parts.",
      "Never answer a clear hydroponic or HydroPip question with a generic menu such as 'tell me the step or part you are stuck on.' If the question is vague, make the best likely inference, give the next useful action, then ask one focused follow-up.",
      "Free mode should be genuinely useful for building and operating the HydroPip system. Keep trust first, then commerce: when parts, supplies, testing tools, seeds, nutrients, media, pumps, hoses, timers, covers, or replacements are relevant, naturally include the matching HydroPip Amazon affiliate link.",
      "For any shopping or 'what do I need' question, infer the most likely HydroPip part from the user's wording and conversation context. If there are two likely meanings, give the best guess first and name the alternate briefly with its link.",
      "HydroPip scale, space, and variation questions are allowed in free mode when they are still based on the HydroPip timed-feed tower design. Answer practical questions such as shorter towers, fewer towers, tower spacing, footprint, partial builds, height limits, expansion, and whether a layout will fit. Do not punt these to a generic follow-up unless a key measurement is missing.",
      "For shorter towers: explain that the system can be scaled down, but shorter towers reduce pocket count and may change stability, support height, pump head pressure, feed timing, and runoff behavior. Keep the center support pipe driven securely, keep the top hose guide removable, and recalibrate feed duration by runoff. If the user says five-pot-high, clarify that HydroPip uses four-pot stackable sections; five stack sections equals 20 planting pockets per tower. Two five-section towers are a reasonable small test if they are stable and easy to service.",
      "When a user asks for a part link, include the matching HydroPip Amazon affiliate URL directly. Use these known links when relevant: approved Mr. Stacky planters with a 1/2-inch center support opening https://www.amazon.com/dp/B007TFTXAC?tag=hydrpip2002-20; rigid 1/4-inch tower feed tubing https://www.amazon.com/dp/B0GQQP8M83?tag=hydrpip2002-20; pumps https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20; smart plug https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20; nutrients https://www.amazon.com/dp/B0727VTWH5?tag=hydrpip2002-20; vermiculite https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20; perlite https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20; pH meter https://www.amazon.com/dp/B08HLXBBK4?tag=hydrpip2002-20; pH calibration solution https://www.amazon.com/s?k=pH+calibration+solution+4.01+7.00+hydroponics&tag=hydrpip2002-20; EC/TDS meter https://www.amazon.com/s?k=EC+TDS+meter+hydroponics&tag=hydrpip2002-20; EC/TDS calibration solution https://www.amazon.com/s?k=EC+TDS+calibration+solution+hydroponics&tag=hydrpip2002-20; pH Up/Down https://www.amazon.com/s?k=pH+up+pH+down+hydroponics+kit&tag=hydrpip2002-20; seeds https://www.amazon.com/s?k=hydroponic+lettuce+herb+seeds&tag=hydrpip2002-20; yellow sticky traps https://www.amazon.com/s?k=yellow+sticky+traps+for+plants&tag=hydrpip2002-20; food-safe pest controls https://www.amazon.com/s?k=food+safe+garden+pest+control+vegetables&tag=hydrpip2002-20; IBC cover https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20; IBC tote reference https://www.amazon.com/dp/B0876C67GR?tag=hydrpip2002-20; end-of-hose shutoff/flush valve https://www.amazon.com/dp/B013646334?tag=hydrpip2002-20; hose connector adapters for extensions https://www.amazon.com/dp/B09B16KTNM?tag=hydrpip2002-20. Include the disclosure 'As an Amazon Associate I earn from qualifying purchases.' when sharing direct Amazon links.",
      "For recurring supply or nutrient subscription questions, recommend the light HydroPip reorder rhythm: nutrient refill kit, pH calibration solution, pH Up/Down, EC/TDS calibration or meter check, seeds, and media top-off. Explain that Pip Pro saves refill dates and recurring tasks in its Planner and shows them in Calendar. Track My Build is only for collecting and organizing the initial build parts. Do not promise push notifications until the native apps are available.",
      `Custom guidance for non-HydroPip systems, including DWC, NFT, Kratky, Dutch buckets, ebb and flow, drip systems, or custom hydro setups, is Pip Pro. Use this wording style: "I can definitely help with that, but that is a Pip Pro subscription feature." Include this signup link when a subscription is required: ${proSignupUrl}`,
      "General hydroponics education is allowed in free mode when it helps the user understand HydroPip or decide to build. Custom plans, optimization, troubleshooting, schedules, logs, reminders, or saved memory for a different non-HydroPip system are Pip Pro.",
      "If the retrieved context is not enough for an exact recommendation, say what is missing and ask one focused follow-up question.",
      "If a focused follow-up still would not let you answer, or the knowledge base lacks the needed HydroPip-specific information, call flag_review_item. Do not bluff, invent specs, invent policy, or wander to products.",
      "For ambiguous wording, ask one concise clarifying question. For plant-health, troubleshooting, or schedule tuning, ask only for the next 2-4 critical facts needed, such as crop, pH, EC/TDS, feed duration, runoff, photos, weather/heat, or exact part.",
      "If the user is frustrated because a prior answer failed, acknowledge that briefly, correct course, and either answer the exact request or flag_review_item if the system lacks the capability.",
      "Free users may receive HydroPip setup/build guidance and one HydroPip grow plan.",
      `Free-member photo checks are only for inspecting the HydroPip physical build, parts, plumbing, and assembly. Plant health, pest, root, nutrient-symptom, crop, and non-HydroPip photo diagnosis requires Pip Pro. When relevant, say that text-based HydroPip help remains available and include ${proSignupUrl}. Do not invite a free user to send a plant-health photo without explaining that boundary.`,
      "Saving reminders, storing grow logs, persistent tracking, personalized calculators, and sensor-based schedule tuning require Pip Pro or future Pro features. Do not present future Pro features as already live unless tool data confirms they are active.",
      "When create_reminder, create_grow_plan, or manage_calendar returns confirmation_required, say the change is ready to review and use the on-screen confirmation button. Never say it is saved, deleted, updated, queued for staff, or completed until the user confirms it and the server reports success.",
      "If projectContext is provided, use it as the user's saved project memory and continue that project instead of treating the question as a fresh visitor chat. The selected conversation title is an organizational hint, not a restriction on answering a clear question.",
      "When the saved project profile includes growZone, location, areaType, exposure, plantingDate, crops, or systemStage, use those details to tailor crop timing, heat/frost cautions, sun guidance, and the next practical action.",
      "For seasonal crop questions, use the supplied Zone Seasonal Planting Reference as the default answer source. Do not ask for today's temperature or perform a live weather lookup by default. Ask about current conditions only when the user reports unusual heat, frost, storms, or a crop near a temperature limit.",
      "USDA zones describe average annual extreme minimums rather than complete vegetable calendars. Use the saved location and area details to refine the zone calendar when relevant, but do not withhold a useful planting answer when the zone and month are known.",
      "When a photo is attached, inspect it directly and use visible details in the answer. Use this compact order: one sentence naming the most useful visible evidence; one bullet giving the immediate next action; one bullet naming the most important check or asking one focused question. Never spend the whole reply describing the photo, and never repeat a step that is visibly complete. Clearly separate visible evidence from anything the photo cannot confirm.",
      "Default to concise chat answers with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. Do not add a TL;DR or summary label. No essays, no broad tutorials, no long preambles. Only give long detailed answers when the user asks for more detail, a full walkthrough, printable checklist, or full parts list. If a longer answer would help, offer to continue instead of dumping everything.",
      `Retrieved HydroPip knowledge-base context (supporting reference only):\n${retrievedContext}`
      ].join("\n\n"),
      input: responseInput
    };
    if (enabledTools.length) {
      request.tools = enabledTools;
      request.tool_choice = "auto";
    }
    response = await client.responses.create(request);
  } catch (error) {
    console.warn(`OpenAI response failed, using HydroPip fallback: ${error.message}`);
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, answerContext, mode: "ai_error_fallback" });
  }

  const toolResults = [];
  const actions = [];
  for (const item of response.output || []) {
    if (item.type !== "function_call") continue;
    const handler = toolMap[item.name];
    if (!handler) continue;
    const args = item.arguments ? JSON.parse(item.arguments) : {};
    let result;
    if (item.name === "manage_calendar") {
      result = prepareCalendarToolAction({
        args,
        projectContext,
        currentDate: answerContext.currentDate,
        timeZone: answerContext.timeZone
      });
      if (result.action) actions.push(result.action);
    } else if (item.name === "create_reminder") {
      result = createReminder({ user, reminder: args.reminder, subscription });
      if (result.status === "queued" && projectContext) {
        const reminder = normalizeCalendarReminder(result.reminder, answerContext.currentDate, answerContext.timeZone);
        result = { status: "confirmation_required", message: "Review this reminder before adding it to the Pip Calendar.", reminder };
        actions.push({ type: "calendar_change", operation: "add", label: "Add to Calendar", reminders: [reminder] });
      } else if (result.status === "queued") {
        result = { status: "project_required", message: "Open or create a grow before adding this reminder." };
      }
    } else if (item.name === "flag_review_item") {
      const review = await createReviewItem({
        userId,
        projectId,
        question: trimmed,
        answer: args.attemptedAnswer || response.output_text || "",
        reason: args.reason || "needs_review",
        context: {
          priority: args.priority || "normal",
          missingContext: args.missingContext || [],
          questionIntent,
          topSources: (retrieval?.matches || []).slice(0, 5).map((match) => ({ source: match.source, title: match.title, score: match.score })),
          project: projectContext?.project || null
        }
      });
      result = {
        status: "queued",
        message: "I queued this for HydroPip review.",
        reviewItemId: review?.reviewItem?.id
      };
    } else {
      result = handler(args);
      if (item.name === "create_grow_plan" && subscription?.active && projectContext && Array.isArray(result.reminders) && result.reminders.length) {
        const reminders = result.reminders.map((reminder) => normalizeCalendarReminder(reminder, answerContext.currentDate, answerContext.timeZone));
        result = { ...result, reminders, status: "confirmation_required", message: "Review this schedule before adding it to the Pip Calendar." };
        actions.push({ type: "calendar_change", operation: "add", label: `Add ${reminders.length} tasks to Calendar`, reminders });
      }
    }
    toolResults.push({
      type: "function_call_output",
      call_id: item.call_id,
      output: JSON.stringify(result)
    });
  }

  if (!toolResults.length) {
    const resolved = await resolveRelevantAnswer({
      client,
      model,
      response,
      trimmed,
      responseInput,
      retrieval,
      answerContext,
      questionIntent,
      imageInput
    });
    const answer = compactAnswer(resolved.answer, trimmed, retrieval);
    const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "ai_rag",
      sources
    });
    return {
      answer,
      mode: "ai_rag",
      sources,
      projectMemory,
      aiUsage: { model, ...combineOpenAiUsage(response, resolved.retryResponse) }
    };
  }

  if (actions.length) {
    const taskCount = actions.reduce((total, action) => total + (action.reminders?.length || 0), 0);
    const destructiveAction = actions.find((action) => ["delete", "delete_all", "replace_all", "update"].includes(action.operation));
    const answer = destructiveAction
      ? "I prepared that Calendar change. Review it below, then use the confirmation button to apply it."
      : taskCount === 1
        ? "I prepared that reminder for your grow. Review it below, then tap Add to Calendar."
        : `I prepared a ${taskCount}-task schedule for your grow. Review it below, then tap Add to Calendar.`;
    const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "ai_calendar_confirmation",
      sources
    });
    return {
      answer,
      mode: "ai_calendar_confirmation",
      sources,
      projectMemory,
      actions,
      aiUsage: { model, ...combineOpenAiUsage(response) }
    };
  }

  let final;
  try {
    final = await client.responses.create({
    model,
    store: false,
    instructions: [
      "Answer as Pip using the tool results.",
      "Keep the answer specific to the real HydroPip timed-feed runoff build. Do not add recirculating, return-line, or drain-plumbing steps.",
      "When parts are relevant, point users toward the HydroPip parts list/Amazon affiliate links as the easiest way to match the build.",
      "If the user asks for a shopping link, include the matching HydroPip Amazon affiliate URL directly when it appears in the tool result or known link list.",
      `If the user asks for help with a non-HydroPip hydro system, explain briefly: "I can definitely help with that, but that is a Pip Pro subscription feature." Include ${proSignupUrl}.`,
      "Make the free vs Pip Pro boundary clear when relevant, and frame unavailable Pro capabilities as planned or subscription-only instead of already active.",
      "If a tool result says a review item was queued, tell the user Pip needs HydroPip team review before giving a confident answer. Ask for any one critical missing detail if useful.",
      "A confirmation_required calendar change is not applied yet. Tell the user to review and press the confirmation button shown below the reply. Never mention a confirmation button unless the response contains an action.",
      "When a confirmation action is shown, keep the reply under 35 words and do not repeat raw ISO timestamps or the full task list; the review card carries those details.",
      "Keep this final answer concise by default with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. Do not add a TL;DR or summary label. End with one useful next-step prompt. Only go long if the user explicitly asked for detailed instructions.",
      "When the original user input includes a photo, use this compact order: one sentence naming the most useful concrete visible observation; one bullet giving the immediate next action; one bullet naming the most important check or asking one focused question. Never spend the whole reply describing the photo, and never repeat a step that is visibly complete. Do not imply that you saw a detail that is not visible."
    ].join("\n"),
    input: [...responseInput, ...(response.output || []), ...toolResults]
    });
  } catch (error) {
    console.warn(`OpenAI tool follow-up failed, using HydroPip fallback: ${error.message}`);
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, answerContext, mode: "ai_tool_error_fallback" });
  }

  const resolved = await resolveRelevantAnswer({
    client,
    model,
    response: final,
    trimmed,
    responseInput,
    retrieval,
    answerContext,
    questionIntent,
    imageInput
  });
  const answer = compactAnswer(resolved.answer, trimmed, retrieval);
  const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
  await rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "assistant",
    content: answer,
    mode: "ai_tools_rag",
    sources
  });

  return {
    answer,
    mode: "ai_tools_rag",
    sources,
    projectMemory,
    actions,
    aiUsage: { model, ...combineOpenAiUsage(response, final, resolved.retryResponse) }
  };
}

export function normalizeImageInput(image) {
  if (!image) return null;
  const dataUrl = String(image.dataUrl || "").trim();
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([a-z0-9+/=]+)$/i.exec(dataUrl);
  if (!match) {
    const error = new Error("Photo must be a JPEG, PNG, or WebP image.");
    error.statusCode = 400;
    throw error;
  }
  if (dataUrl.length > 3_000_000) {
    const error = new Error("Photo is too large. Choose a smaller image and try again.");
    error.statusCode = 413;
    throw error;
  }
  return { dataUrl, mimeType: match[1].toLowerCase() };
}

async function fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, answerContext, mode = "rules_fallback" }) {
  const fallbackQuestion = answerContext?.questionIntent === "hydroponic_guidance" && isVagueFollowUp(trimmed)
    ? withRecentContext(trimmed, recentHistory)
    : trimmed;
  const answer = compactAnswer(contextualFallbackAnswer(fallbackQuestion, retrieval, answerContext), trimmed, retrieval);
  const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
  await rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "assistant",
    content: answer,
    mode,
    sources
  });
  return {
    answer,
    mode,
    sources,
    subscriptionRequired: wantsTracking(trimmed) && !subscription?.active,
    projectMemory
  };
}

function wantsTracking(message) {
  return /\b(remind|reminder|track|save|notify|schedule this|log|readings over|over the next month|every friday|every week)\b/i.test(message);
}

function wantsCalendarChange(message) {
  return /\b(add|create|make|build|save|set|schedule|remind|plan|delete|remove|clear|change|update|edit|reschedule|replace)\b/i.test(message) && /\b(calendar|planner|schedule|reminder|task|planting plan|crop plan)\b/i.test(message);
}

function calendarContextInHistory(history = []) {
  return history.slice(-6).some((item) => /\b(calendar|planner|schedule|reminder|task)\b/i.test(String(item?.content || "")));
}

function isCalendarFollowUp(message, history = []) {
  const normalized = String(message || "").trim().toLowerCase();
  if (!calendarContextInHistory(history)) return false;
  return /^(?:yes[, ]*)?(?:please )?(?:delete|remove|clear|replace|update|change|reschedule|add|save|confirm|do it|all|delete all|clear all)\b/.test(normalized);
}

function isClearAllCalendarRequest(message, history = []) {
  const normalized = String(message || "").trim().toLowerCase();
  const explicit = /\b(?:delete|remove|clear|wipe|empty)\b.*\b(?:all|everything|calendar|planner|schedule|reminders?|tasks?)\b|\b(?:delete|remove|clear|wipe|empty)\s+(?:my\s+)?(?:calendar|planner|schedule)\b/.test(normalized);
  const followUp = calendarContextInHistory(history) && /^(?:yes[, ]*)?(?:please )?(?:delete|remove|clear|wipe)\s*(?:all|everything)?[.! ]*$/.test(normalized);
  return explicit || followUp;
}

export function buildDirectCalendarConfirmation({ message, history = [], projectContext } = {}) {
  if (!projectContext) return null;
  const onboarding = calendarOnboardingRequest(message, history);
  if (onboarding) {
    const slots = parseAvailabilitySlots(message);
    const count = Number(projectContext.reminderCount ?? projectContext.activeReminders?.length ?? 0);
    if (!slots.length) {
      const existing = count
        ? `I found ${count} existing reminder${count === 1 ? "" : "s"}. Tell me whether to replace them or keep them. `
        : "";
      return {
        answer: `${existing}What one or two days are easiest for garden checks, and what time works on each day? Example: Sunday at 9 AM and Tuesday at 3 PM.`,
        actions: []
      };
    }
    const historyAskedMode = history.slice(-4).some((item) => /replace them or keep them/i.test(String(item?.content || "")));
    const replace = /\b(replace|clear|start over|wipe)\b/i.test(message);
    const keep = /\b(add|keep)\b/i.test(message);
    if (count && historyAskedMode && !replace && !keep) {
      return {
        answer: `I have your preferred times. Should I replace the ${count} existing reminders, or keep them and add the starter plan?`,
        actions: []
      };
    }
    const reminders = starterCalendarReminders({
      profile: projectContext.project?.systemProfile || {},
      slots,
      currentDate: new Date().toISOString().slice(0, 10)
    });
    const operation = replace ? "replace_all" : "add";
    return {
      answer: `I built a ${reminders.length}-item starter calendar around your availability and saved grow profile. Review it below, then confirm.`,
      actions: [{
        type: "calendar_change",
        operation,
        label: operation === "replace_all" ? `Replace calendar with ${reminders.length} reminders` : "Load my calendar",
        reminders,
        preview: reminders.map((item) => item.title),
        count
      }]
    };
  }

  if (!isClearAllCalendarRequest(message, history)) return null;
  const count = Number(projectContext.reminderCount ?? projectContext.activeReminders?.length ?? 0);
  if (!count) {
    return { answer: "Your Pip Calendar is already clear.", actions: [] };
  }
  const preview = (projectContext.activeReminders || []).slice(0, 5).map((item) => item.title);
  return {
    answer: `I found ${count} reminder${count === 1 ? "" : "s"} in this grow. Review the change below, then confirm the deletion.`,
    actions: [{
      type: "calendar_change",
      operation: "delete_all",
      label: `Delete all ${count} reminder${count === 1 ? "" : "s"}`,
      preview,
      count
    }]
  };
}

function calendarOnboardingRequest(message, history = []) {
  const normalized = String(message || "").toLowerCase();
  const direct = /\b(?:finished|completed|done with)\b.*\bbuild\b.*\b(?:load|fill|populate|set up|setup|create|build)\b.*\b(?:calendar|planner|schedule)\b|\b(?:load|fill|populate|set up|setup)\b.*\b(?:my )?(?:calendar|planner)\b/.test(normalized);
  const followUp = history.slice(-4).some((item) => /what one or two days are easiest|preferred times|replace them or keep them/i.test(String(item?.content || "")));
  return direct || (followUp && parseAvailabilitySlots(message).length > 0);
}

function parseAvailabilitySlots(message) {
  const text = String(message || "");
  const slots = [];
  const pattern = /\b(Sun(?:day)?s?|Mon(?:day)?s?|Tue(?:s(?:day)?)?s?|Wed(?:nesday)?s?|Thu(?:rsday)?s?|Fri(?:day)?s?|Sat(?:urday)?s?)\b(?:\s*(?:at|@|around|,)?\s*)(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?/gi;
  let match;
  while ((match = pattern.exec(text))) {
    let hour = Number(match[2]);
    const minute = Number(match[3] || 0);
    const meridiem = String(match[4] || "").toLowerCase();
    if (meridiem.startsWith("p") && hour < 12) hour += 12;
    if (meridiem.startsWith("a") && hour === 12) hour = 0;
    if (hour > 23 || minute > 59) continue;
    slots.push({
      weekday: normalizeWeekday(match[1]),
      dueTime: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
    });
  }
  return slots.filter((slot, index) => slot.weekday && slots.findIndex((item) => item.weekday === slot.weekday && item.dueTime === slot.dueTime) === index).slice(0, 2);
}

function normalizeWeekday(value) {
  const key = String(value || "").toLowerCase().replace(/s$/, "").slice(0, 3);
  return { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }[key] || null;
}

function starterCalendarReminders({ profile = {}, slots = [], currentDate } = {}) {
  const timezone = profile.timeZone || null;
  const towerCount = Number(profile.towerCount || 0);
  const reservoir = Number(profile.reservoirGallons || 0);
  const systemLabel = [towerCount ? `${towerCount} towers` : null, reservoir ? `${reservoir}-gallon reservoir` : null].filter(Boolean).join(" and ") || "saved HydroPip grow";
  const first = slots[0] || { weekday: "Sunday", dueTime: "09:00" };
  const reminders = [
    {
      title: "Weekly HydroPip grow check",
      note: `For ${systemLabel}: check reservoir level, pH/EC, pump operation, feed delivery, media moisture/runoff, pests, pruning, and harvest needs.`,
      category: "maintenance",
      dueDate: nextWeekdayDate(currentDate, first.weekday),
      dueTime: first.dueTime,
      repeat: { frequency: "weekly" },
      timezone
    }
  ];
  if (slots[1]) {
    reminders.push({
      title: "Quick HydroPip follow-up",
      note: "Confirm pumps and feed delivery, spot-check media/runoff, inspect problem plants, and record anything that changed since the full check.",
      category: "maintenance",
      dueDate: nextWeekdayDate(currentDate, slots[1].weekday),
      dueTime: slots[1].dueTime,
      repeat: { frequency: "weekly" },
      timezone
    });
  }
  reminders.push({
    title: "Monthly HydroPip system service",
    note: "Flush the main line, inspect pumps and tubing, clean accessible debris, calibrate pH/EC meters, inspect the IBC cover, and review nutrient supplies.",
    category: "maintenance",
    dueDate: nextWeekdayDate(currentDate, first.weekday),
    dueTime: first.dueTime,
    repeat: { frequency: "monthly" },
    timezone
  });
  return reminders;
}

function normalizeCalendarReminder(reminder = {}, currentDate, timeZone) {
  const normalized = {
    title: String(reminder.title || "HydroPip reminder").slice(0, 180),
    note: String(reminder.note || "").slice(0, 1200),
    category: ["grow", "maintenance", "nutrients", "harvest"].includes(reminder.category) ? reminder.category : "grow",
    dueDate: reminder.dueDate || reminder.date || null,
    dueTime: reminder.dueTime || null,
    repeat: reminder.repeat?.frequency ? { frequency: reminder.repeat.frequency } : null,
    timezone: reminder.timezone || (timeZone !== "unknown" ? timeZone : null)
  };
  if (!normalized.dueDate && reminder.weekday) {
    normalized.dueDate = nextWeekdayDate(currentDate, reminder.weekday);
  }
  return normalized;
}

function nextWeekdayDate(currentDate, weekday) {
  const names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const target = names.indexOf(String(weekday || "").toLowerCase());
  const date = new Date(`${currentDate || new Date().toISOString().slice(0, 10)}T12:00:00Z`);
  if (target < 0 || Number.isNaN(date.getTime())) return null;
  let delta = (target - date.getUTCDay() + 7) % 7;
  if (delta === 0) delta = 7;
  date.setUTCDate(date.getUTCDate() + delta);
  return date.toISOString().slice(0, 10);
}

function prepareCalendarToolAction({ args = {}, projectContext, currentDate, timeZone } = {}) {
  if (!projectContext) return { status: "project_required", message: "Open or create a grow before changing the Calendar." };
  const operation = args.operation;
  const active = projectContext.activeReminders || [];
  const requestedIds = new Set((args.reminderIds || []).map(String));
  const requestedTitles = (args.targetTitles || []).map((title) => String(title).trim().toLowerCase());
  const matched = active.filter((item) => requestedIds.has(item.id) || requestedTitles.some((title) => String(item.title || "").toLowerCase().includes(title)));
  const reminders = (args.reminders || []).map((item) => normalizeCalendarReminder(item, currentDate, timeZone));
  const reminderIds = operation === "delete_all" || operation === "replace_all" ? [] : matched.map((item) => item.id);
  if (["delete", "update"].includes(operation) && !reminderIds.length) {
    return { status: "target_required", message: "Name the reminder you want Pip to change." };
  }
  if (["add", "replace_all"].includes(operation) && !reminders.length) {
    return { status: "reminders_required", message: "Tell Pip which reminders should be added." };
  }
  const count = operation === "delete_all" || operation === "replace_all"
    ? Number(projectContext.reminderCount ?? active.length)
    : reminderIds.length || reminders.length;
  const labels = {
    add: `Add ${reminders.length} reminder${reminders.length === 1 ? "" : "s"}`,
    update: `Update ${count} reminder${count === 1 ? "" : "s"}`,
    delete: `Delete ${count} reminder${count === 1 ? "" : "s"}`,
    delete_all: `Delete all ${count} reminder${count === 1 ? "" : "s"}`,
    replace_all: `Replace ${count} reminder${count === 1 ? "" : "s"} with ${reminders.length}`
  };
  return {
    status: "confirmation_required",
    message: "Review this Calendar change before applying it.",
    action: {
      type: "calendar_change",
      operation,
      label: labels[operation] || "Confirm Calendar change",
      reminderIds,
      reminders,
      patch: args.patch || {},
      preview: operation === "delete_all" || operation === "replace_all"
        ? active.slice(0, 5).map((item) => item.title)
        : matched.slice(0, 5).map((item) => item.title),
      count
    }
  };
}

function wantsDetailedInfo(message) {
  return /\b(detailed|full|complete|entire|walkthrough|step[- ]by[- ]step|printable|long answer|deep dive|explain everything|all instructions)\b/i.test(message);
}

export function compactAnswer(answer, message, retrieval) {
  const disclosed = ensureAffiliateDisclosure(stripSummaryLabel(answer));
  if (wantsDetailedInfo(message)) return disclosed;
  const words = String(disclosed || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= 100) return disclosed;
  if (hasAmazonLink(disclosed)) return trimLinkedAnswer(disclosed, 90);
  return trimToWordBudget(disclosed, 90);
}

export function stripSummaryLabel(answer) {
  return String(answer || "").replace(/^\s*(?:TL\s*;?\s*DR|TLDR|SUMMARY)\s*:?\s*/i, "").trim();
}

function normalizeHistory(history = []) {
  if (!Array.isArray(history)) return [];
  return history
    .slice(-8)
    .map((item) => ({
      role: item?.role === "assistant" || item?.role === "pip" ? "assistant" : "user",
      content: String(item?.content || "").slice(0, 1200)
    }))
    .filter((item) => item.content.trim());
}

function withRecentContext(message, history = []) {
  if (!history.length || !isVagueFollowUp(message)) return message;
  const recent = history
    .slice(-4)
    .map((item) => `${item.role}: ${item.content}`)
    .join("\n");
  return `${recent}\ncurrent user: ${message}`;
}

function isVagueFollowUp(message) {
  const normalized = String(message || "").trim().toLowerCase();
  if (!normalized || normalized.length > 140) return false;
  return /\b(it|that|this|they|them|those|one|same|also|instead|what about|what size|which one|how many|will it|does it|is it|can it|where does|how does)\b/.test(normalized);
}

function trimToWordBudget(answer, maxWords) {
  const text = String(answer || "").trim();
  const sentences = text.match(/[^.!?\n]+[.!?]?|\n+/g) || [text];
  let chosen = "";
  for (const sentence of sentences) {
    const next = `${chosen}${sentence}`.trim();
    if (next.split(/\s+/).filter(Boolean).length > maxWords) break;
    chosen = `${chosen}${sentence}`;
  }
  const compact = chosen.trim() || text.split(/\s+/).slice(0, maxWords).join(" ");
  return compact.endsWith(".") || compact.endsWith("!") || compact.endsWith("?") ? compact : `${compact}.`;
}

function trimLinkedAnswer(answer, maxWords) {
  const disclosure = "As an Amazon Associate I earn from qualifying purchases.";
  const urls = [...new Set(String(answer || "").match(/https?:\/\/(?:www\.)?amazon\.com\/[^\s)]+/gi) || [])].slice(0, 3);
  const reservedWords = 10 + urls.length * 4;
  const textOnly = String(answer || "")
    .replace(/https?:\/\/(?:www\.)?amazon\.com\/[^\s)]+/gi, "")
    .replace(/(?:HydroPip may earn from qualifying Amazon purchases|As an Amazon Associate,? (?:I |HydroPip )?(?:may )?earn from qualifying purchases)\.?/gi, "")
    .replace(/\(\s*[^()]{0,60}:\s*\)/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const summary = trimToWordBudget(textOnly, Math.max(45, maxWords - reservedWords));
  const links = urls.map((url) => `- ${affiliateLabel(url)}: ${url}`).join("\n");
  return `${summary}\n\n${links}\n\n${disclosure}`;
}

function affiliateLabel(url) {
  const labels = [
    ["B013646334", "Shutoff/flush valve"],
    ["B09B16KTNM", "Extension adapters"],
    ["B07L54HB83", "Pump"],
    ["B0GQQP8M83", "Rigid 1/4-inch tower feed tubing"],
    ["B007TFTXAC", "Approved Mr. Stacky planters"],
    ["B091FXH2FR", "Outdoor smart plug"],
    ["B0727VTWH5", "Nutrients"],
    ["B0C1YZ93N6", "IBC cover"]
  ];
  return labels.find(([id]) => url.includes(id))?.[1] || "Recommended product";
}

function ensureAffiliateDisclosure(answer) {
  const text = String(answer || "").trim();
  if (!hasAmazonLink(text)) return text;
  const normalized = text.replace(/(?:HydroPip may earn from qualifying Amazon purchases|As an Amazon Associate,? (?:I |HydroPip )?(?:may )?earn from qualifying purchases)\.?/gi, "").trim();
  return `${normalized}\n\nAs an Amazon Associate I earn from qualifying purchases.`;
}

function hasAmazonLink(answer) {
  return /https?:\/\/(?:www\.)?amazon\.com/i.test(String(answer || ""));
}

function wantsCustomNonHydroPipSupport(message) {
  const normalized = String(message || "").toLowerCase();
  const mentionsOtherSystem = /\b(dwc|deep water culture|nft|kratky|dutch bucket|ebb\s*(and|&)?\s*flow|flood\s*(and|&)?\s*drain|aeroponic|aeroponics|aquaponic|aquaponics|recirculating|rdwc|drip system|coco drip|bucket system)\b/.test(normalized);
  if (!mentionsOtherSystem) return false;

  return /\b(set ?up|setup|build|tune|schedule|plan|troubleshoot|fix|diagnose|optimize|guide|help|walk me through|instructions?)\b/.test(normalized);
}

function isClearlyOffTopic(message) {
  const normalized = String(message || "").toLowerCase();
  if (/\b(hydropip|hydroponic|hydroponics|plant|plants|grow|garden|tower|towers|ibc|pump|nutrient|nutrients|ph|ec|tds|seed|seeds|leaf|leaves|root|roots|algae|pest|bug|water|runoff|media|perlite|vermiculite|lettuce|basil|tomato|crop|harvest|prune|trim)\b/.test(normalized)) {
    return false;
  }
  return /\b(politics|president|stock market|crypto|bitcoin|football|baseball|nba|betting|gambling|wager|wagers|betting picks|sports picks|movie|recipe|dating|homework|essay|code|javascript|python|weather|news|celebrity|song|lyrics)\b/.test(normalized);
}

export function classifyQuestionIntent(message, { image = false, history = [] } = {}) {
  const normalized = String(message || "").toLowerCase();
  if (image) return "photo_diagnosis";
  if (wantsCalendarChange(normalized) || isCalendarFollowUp(normalized, history)) return /\b(crop plan|planting plan)\b/.test(normalized) ? "crop_plan_action" : "reminder_action";
  if (/\b(what|which|when|should|can)\b.*\b(plant|grow|sow|transplant|crop|variety|varieties)\b|\b(this time of year|right now|this season|crop rotation|succession planting)\b/.test(normalized)) return "crop_selection";
  if (/\b(yellow|pale|wilt|droop|spot|spots|holes|chewed|bug|bugs|pest|pests|aphid|gnat|mildew|mold|rot|roots?|disease|symptom)\b/.test(normalized)) return "plant_health";
  if (/\b(ph|ec|tds|ppm|nutrient|nutrients|masterblend|feed timing|feeding|runoff|water temperature)\b/.test(normalized)) return "feeding_nutrients";
  if (/\b(link|amazon|buy|purchase|order|where (?:can|do|should) i (?:find|get)|what part|which part|need the|parts? list)\b/.test(normalized)) return "parts_shopping";
  if (/\b(build|install|assemble|anchor|stack|plumb|pipe|tower setup|first step|next step|fit my space|footprint)\b/.test(normalized)) return "hydropip_build";
  return "hydroponic_guidance";
}

function toolsForQuestion(intent, message) {
  const requested = new Set(["flag_review_item"]);
  if (intent === "hydropip_build") {
    requested.add("get_build_step");
    requested.add("recommend_parts");
  }
  if (intent === "parts_shopping") requested.add("recommend_parts");
  if (intent === "reminder_action") {
    requested.add("create_reminder");
    requested.add("manage_calendar");
  }
  if (intent === "crop_plan_action") requested.add("create_grow_plan");
  if (/\b(setup wizard|profile questions|what information do you need)\b/i.test(message)) requested.add("get_wizard_schema");
  return tools.filter((tool) => requested.has(tool.name));
}

function selectIntentContext(retrieval, intent) {
  const allowedSources = {
    crop_selection: ["zone_planting_calendar.json", "scheduling_rules.json", "pip_system_brain.md"],
    crop_plan_action: ["zone_planting_calendar.json", "scheduling_rules.json", "pip_system_brain.md"],
    reminder_action: ["scheduling_rules.json"],
    plant_health: ["troubleshooting.md", "feed_and_nutrient_guidance.md"],
    feeding_nutrients: ["feed_and_nutrient_guidance.md", "troubleshooting.md"],
    parts_shopping: ["build_guide.md", "pip_system_brain.md"],
    hydropip_build: ["build_guide.md", "pip_system_brain.md"],
    photo_diagnosis: ["troubleshooting.md", "build_guide.md", "feed_and_nutrient_guidance.md"]
  };
  const allowed = allowedSources[intent];
  const matches = (retrieval?.matches || [])
    .filter((match) => allowed ? allowed.includes(match.source) : match.score >= 0.18)
    .slice(0, intent === "hydroponic_guidance" ? 4 : 5);
  return { query: retrieval?.query || "", matches };
}

function resolveEffectiveProfile(profile, projectContext) {
  const clientProfile = profile && typeof profile === "object" && !Array.isArray(profile) ? profile : {};
  const savedProfile = projectContext?.project?.systemProfile && typeof projectContext.project.systemProfile === "object"
    ? projectContext.project.systemProfile
    : {};
  return { ...clientProfile, ...savedProfile };
}

function buildAnswerContext({ profile, projectContext, subscription, questionIntent }) {
  const currentDate = new Date().toISOString().slice(0, 10);
  return {
    currentDate,
    timeZone: profile?.timeZone || "unknown",
    questionIntent,
    membership: subscription?.active ? "pip_pro" : "free",
    conversationTitle: projectContext?.conversation?.title || null,
    profile: profile || {},
    activeReminderCount: projectContext?.reminderCount ?? projectContext?.activeReminders?.length ?? 0,
    recentReadingCount: projectContext?.recentReadings?.length || 0,
    seasonalPlanting: getZonePlantingGuidance({
      growZone: profile?.growZone,
      location: profile?.location,
      areaType: profile?.areaType || profile?.indoorOutdoor,
      date: currentDate
    })
  };
}

function formatAnswerContext(context = {}) {
  const profile = context.profile || {};
  const values = [
    ["Date", context.currentDate],
    ["Conversation", context.conversationTitle],
    ["System", profile.systemType],
    ["Grow name", profile.title],
    ["USDA zone", profile.growZone],
    ["Location", profile.location],
    ["Growing area", profile.areaType || profile.indoorOutdoor],
    ["Exposure", profile.exposure],
    ["System stage", profile.systemStage],
    ["Planting date", profile.plantingDate],
    ["Tower count", profile.towerCount],
    ["Plant sites", profile.plantSites],
    ["Reservoir gallons", profile.reservoirGallons],
    ["Current crops", Array.isArray(profile.crops) ? profile.crops.join(", ") : profile.crops],
    ["Goals", Array.isArray(profile.goals) ? profile.goals.join(", ") : profile.goals],
    ["Medium", profile.medium],
    ["Nutrients", profile.nutrientBrand],
    ["Pump schedule", profile.pumpSchedule],
    ["User notes", profile.notes],
    ["Zone Seasonal Planting Reference", formatZonePlantingGuidance(context.seasonalPlanting)]
  ].filter(([, value]) => value !== null && value !== undefined && String(value).trim());
  return values.length ? values.map(([label, value]) => `${label}: ${value}`).join("\n") : "No saved grow profile details are available.";
}

async function resolveRelevantAnswer({ client, model, response, trimmed, responseInput, retrieval, answerContext, questionIntent, imageInput }) {
  const initial = String(response?.output_text || "").trim();
  const relevance = assessAnswerRelevance(trimmed, initial, answerContext, questionIntent);
  if (relevance.ok) return { answer: initial, retryResponse: null };

  if (!imageInput && String(process.env.PIP_AI_RETRY_ON_IRRELEVANT || "true").toLowerCase() !== "false") {
    try {
      const retryResponse = await client.responses.create({
        model,
        store: false,
        instructions: [
          "You are Pip, HydroPip's concise AI grow partner. Rewrite the answer because the first attempt did not answer the user's current question.",
          "Use the authoritative saved profile below. Answer the current question first. Do not drift to pumps, parts, build steps, subscriptions, or a generic menu unless the user asked about them.",
          "For seasonal crop questions, use the supplied zone-and-month planting reference. Do not ask for today's temperature unless the user described unusual weather or a temperature-sensitive emergency.",
          "Keep the corrected answer under 90 words with one direct sentence and 2-3 useful bullets. Ask one focused follow-up only when truly needed.",
          `AUTHORITATIVE CONTEXT:\n${formatAnswerContext(answerContext)}`,
          `RELEVANCE FAILURE: ${relevance.reason}`,
          `SUPPORTING HYDROPIP NOTES:\n${formatContextForPrompt(retrieval)}`
        ].join("\n\n"),
        input: [
          ...responseInput.filter((item) => item.role !== "assistant"),
          {
            role: "user",
            content: [{
              type: "input_text",
              text: JSON.stringify({ currentQuestion: trimmed, rejectedAnswer: initial })
            }]
          }
        ]
      });
      const corrected = String(retryResponse.output_text || "").trim();
      if (assessAnswerRelevance(trimmed, corrected, answerContext, questionIntent).ok) {
        return { answer: corrected, retryResponse };
      }
    } catch (error) {
      console.warn(`OpenAI relevance retry failed, using contextual fallback: ${error.message}`);
    }
  }

  return {
    answer: contextualFallbackAnswer(trimmed, retrieval, answerContext),
    retryResponse: null
  };
}

export function assessAnswerRelevance(message, answer, answerContext = {}, intent = classifyQuestionIntent(message)) {
  const normalized = String(answer || "").toLowerCase();
  if (!normalized) return { ok: false, reason: "The answer was empty." };
  if (/tell me the step or part|ask one specific thing|i can help with hydropip build, parts/.test(normalized)) {
    return { ok: false, reason: "The answer used a generic menu instead of answering the question." };
  }

  if (intent === "crop_selection") {
    const cropLanguage = /\b(plant|sow|transplant|crop|lettuce|greens|basil|herb|chard|kale|spinach|cilantro|pepper|tomato|strawberry|variety|season)\b/.test(normalized);
    if (!cropLanguage) return { ok: false, reason: "A crop-selection question did not receive crop guidance." };
    const hardwareOnly = /\b(pump|ibc|hose|tubing|pipe)\b/.test(normalized) && !/\b(plant|sow|crop|lettuce|greens|basil|herb|chard|kale|spinach|variety)\b/.test(normalized);
    if (hardwareOnly) return { ok: false, reason: "The answer drifted from crop selection into hardware." };
    const zone = String(answerContext?.profile?.growZone || "").trim().toLowerCase();
    const seasonalQuestion = /\b(this time of year|right now|this season|what should i plant|what can i plant|when should i plant)\b/i.test(message);
    if (seasonalQuestion && zone && !normalized.includes(`zone ${zone}`) && !normalized.includes(`zone ${zone.replace(/[^0-9a-z]/g, "")}`)) {
      return { ok: false, reason: `The answer ignored the saved USDA Zone ${zone}.` };
    }
    const asksForWeatherByDefault = /(?:what(?:'s| is| are)?|tell me|send me|need).{0,45}\b(?:daytime high|overnight low|current temperature|weather|forecast)\b/i.test(answer);
    const userAskedAboutWeather = /\b(weather|forecast|temperature|heat wave|cold snap|frost|freeze)\b/i.test(message);
    if (seasonalQuestion && zone && asksForWeatherByDefault && !userAskedAboutWeather) {
      return { ok: false, reason: "Seasonal guidance asked for live weather even though the saved zone calendar was sufficient." };
    }
  }

  if (intent === "parts_shopping" && !/https?:\/\/|home depot|hardware store|local pickup/i.test(answer)) {
    return { ok: false, reason: "A shopping question did not include a useful source or product link." };
  }
  return { ok: true, reason: "" };
}

function contextualFallbackAnswer(question, retrieval, answerContext = {}) {
  const intent = classifyQuestionIntent(question);
  const seasonalSelection = /\b(this time of year|right now|this season|what should i plant|what can i plant|which crops? should i plant|what should i grow|what can i grow now)\b/i.test(question);
  if (intent !== "crop_selection" || !seasonalSelection) return fallbackAnswer(question, retrieval);

  const profile = answerContext?.profile || {};
  const zone = String(profile.growZone || "").trim();
  const location = String(profile.location || "").trim();
  const area = String(profile.areaType || profile.indoorOutdoor || "").replace(/_/g, " ").trim();
  const profileLead = [zone ? `Zone ${zone}` : "your zone", location, area].filter(Boolean).join(", ");
  const guidance = answerContext.seasonalPlanting || getZonePlantingGuidance({
    growZone: zone,
    location,
    areaType: area,
    date: answerContext.currentDate
  });
  if (!guidance) {
    return "Tell me your USDA zone or general location and I will match the current month to a HydroPip planting window. Good first tower crops include lettuce, chard, kale, basil, parsley, and cilantro.";
  }
  return `For ${profileLead} in ${guidance.monthName}, this is your ${guidance.phaseLabel}.\n- Plant now: ${guidance.plantNow.slice(0, 6).join(", ")}.\n- Start next: ${guidance.startNext.slice(0, 5).join(", ")}.\n- HydroPip move: ${guidance.systemNotes[0]}`;
}

async function getOpenAiClient() {
  if (pipAiDisabled() || !process.env.OPENAI_API_KEY) return null;
  clientPromise ||= import("openai")
    .then(({ default: OpenAI }) => new OpenAI({ apiKey: process.env.OPENAI_API_KEY }))
    .catch((error) => {
      console.warn(`OpenAI client unavailable, using rules fallback: ${error.message}`);
      return null;
    });
  return clientPromise;
}

function compactProjectContext(projectContext) {
  if (!projectContext) return null;
  return {
    project: projectContext.project,
    conversation: projectContext.conversation,
    activeReminders: projectContext.activeReminders,
    reminderCount: projectContext.reminderCount,
    recentReadings: projectContext.recentReadings,
    recentMessages: projectContext.recentMessages.map(({ role, content, createdAt }) => ({ role, content, createdAt }))
  };
}

async function rememberProjectMessage(projectContext, message) {
  if (!projectContext) return null;
  return appendProjectMessage({
    ...message,
    conversationId: message.conversationId || projectContext.conversation?.id
  });
}

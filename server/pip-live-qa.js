import assert from "node:assert/strict";

const apiUrl = String(process.env.HYDROPIP_QA_API_URL || "").replace(/\/$/, "");
assert.ok(apiUrl, "Set HYDROPIP_QA_API_URL to the deployed Render service");

const cases = [
  {
    question: "What size should it be?",
    history: [
      { role: "user", content: "What piece goes on the end of the main hose so I can add towers later?" },
      { role: "assistant", content: "Use the shutoff/flush valve and extension adapters." }
    ],
    must: ["3/4-inch", "GHT", "B013646334", "hydrpip200202-20"]
  },
  { question: "I just need to purchase the little tubing from the main hose to each tower.", must: ["B0GQQP8M83", "hydrpip200202-20"] },
  { question: "The leaves have tiny holes and I found little chewing bugs underneath.", must: ["pest", "hydrpip200202-20"] },
  { question: "Can I place the IBC 25 feet uphill from the towers?", mustAny: ["head", "vertical", "pressure"] },
  { question: "My lettuce is pale but the media is wet. What are the first three checks?", must: ["pH"], mustAny: ["EC", "TDS"] },
  { question: "My tap water smells like chlorine. Can I still mix nutrients with it?", mustAny: ["chlorine", "water"] },
  { question: "Can I add two more towers to the hose I already have?", mustAny: ["flow", "pump", "runoff", "pressure"] },
  { question: "I am in USDA zone 9b. What should I plant this month?", must: ["zone"], mustAny: ["crop", "plant", "greens"] },
  { question: "Save a reminder for me to check pH every Tuesday.", must: ["Pip Pro", "https://www.hydropip.com/pip?pro=1"] },
  { question: "Build me a custom schedule for my DWC buckets.", must: ["Pip Pro", "https://www.hydropip.com/pip?pro=1"] },
  { question: "Can you give me betting picks for tonight?", must: ["HydroPip"], avoid: ["odds", "wager"] },
  { question: "Is the outdoor plug safe in rain around kids and pets?", mustAny: ["GFCI", "outdoor", "cover"] }
];

const failures = [];
for (const item of cases) {
  const response = await fetch(`${apiUrl}/api/pip/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://hydropip-pip-api.onrender.com"
    },
    body: JSON.stringify({
      message: item.question,
      history: item.history || [],
      subscription: { active: false, plan: "free_member" }
    })
  });
  assert.equal(response.ok, true, `Live Pip returned ${response.status}`);
  const data = await response.json();
  const answer = String(data.answer || "");
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const issue = [];

  if (words > 130) issue.push(`too long (${words} words)`);
  for (const token of item.must || []) {
    if (!answer.toLowerCase().includes(token.toLowerCase())) issue.push(`missing ${token}`);
  }
  if (item.mustAny && !item.mustAny.some((token) => answer.toLowerCase().includes(token.toLowerCase()))) {
    issue.push(`missing one of ${item.mustAny.join(", ")}`);
  }
  for (const token of item.avoid || []) {
    if (answer.toLowerCase().includes(token.toLowerCase())) issue.push(`contains ${token}`);
  }
  if (/amazon\.com/i.test(answer) && !answer.includes("HydroPip may earn from qualifying Amazon purchases.")) {
    issue.push("missing Amazon disclosure");
  }

  console.log(`[${issue.length ? "FAIL" : "PASS"}] ${data.mode} | ${words} words | ${item.question}`);
  if (issue.length) failures.push({ question: item.question, issue, answer });
}

assert.deepEqual(failures, [], `${failures.length} live Pip QA case(s) failed:\n${JSON.stringify(failures, null, 2)}`);
console.log("HydroPip live AI QA passed");

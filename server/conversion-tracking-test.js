import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataFile = path.join(os.tmpdir(), `hydropip-conversions-${process.pid}.json`);
process.env.PIP_MEMORY_FILE = dataFile;
delete process.env.DATABASE_URL;

const { getConversionSummary, recordConversionEvent, resetMemoryForTests } = await import("./pipMemory.js");

try {
  resetMemoryForTests();
  const base = {
    visitorId: "hpv_testvisitor123",
    page: "/",
    referrerHost: "facebook.com",
    utmSource: "facebook",
    utmMedium: "social"
  };
  await recordConversionEvent({ ...base, clientEventId: "hpe_page_1", eventName: "page_view" });
  await recordConversionEvent({ ...base, clientEventId: "hpe_pip_1", eventName: "pip_opened" });
  await recordConversionEvent({ ...base, clientEventId: "hpe_question_1", eventName: "pip_question_asked", metadata: { mode: "text" } });
  await recordConversionEvent({ ...base, clientEventId: "hpe_amazon_1", eventName: "affiliate_link_clicked", metadata: { productId: "B0727VTWH5", destinationHost: "amazon.com" } });
  await recordConversionEvent({ ...base, clientEventId: "hpe_amazon_1", eventName: "affiliate_link_clicked" });

  const summary = await getConversionSummary({ days: 30 });
  assert.equal(summary.totalEvents, 4, "duplicate client event IDs should be ignored");
  assert.equal(summary.uniqueVisitors, 1);
  assert.equal(summary.counts.pip_question_asked, 1);
  assert.equal(summary.counts.affiliate_link_clicked, 1);
  assert.deepEqual(summary.sources[0], { name: "facebook", count: 4 });

  await assert.rejects(
    recordConversionEvent({ ...base, clientEventId: "bad_event", eventName: "raw_prompt_saved" }),
    /Unsupported conversion event/
  );
  console.log("HydroPip conversion tracking tests passed.");
} finally {
  fs.rmSync(dataFile, { force: true });
}

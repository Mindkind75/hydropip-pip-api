import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const kbDir = path.join(rootDir, "HydroPip_AIknowledge_base");

export const systemBrain = fs.readFileSync(path.join(kbDir, "pip_system_brain.md"), "utf8");
export const schedulingRules = JSON.parse(fs.readFileSync(path.join(kbDir, "scheduling_rules.json"), "utf8"));
export const setupWizardSchema = JSON.parse(fs.readFileSync(path.join(kbDir, "setup_wizard_schema.json"), "utf8"));

export const buildSteps = [
  {
    id: "anchor",
    title: "Anchor the 10-foot Schedule 40 support pipe",
    summary:
      "Drive the pipe about 5 feet into the ground with a post driver and level a single-cell cinder block at the base.",
    checklist: [
      "Mark tower spacing before driving pipe.",
      "Keep the pipe straight while driving it into the ground.",
      "Confirm roughly 5 feet is buried and 5 feet remains above grade.",
      "Seat the single-cell cinder block level at the base."
    ]
  },
  {
    id: "stack",
    title: "Stack the four-pot tower sections",
    summary:
      "Slide stackable four-pot planter sections over the center support pipe. The starter build uses two orders of the planter item per tower.",
    checklist: [
      "Use two orders of stackable planters per tower.",
      "Align the center holes over the support pipe.",
      "Keep the stack square and stable on the cinder block.",
      "Leave walking space for harvest, trimming, and service."
    ]
  },
  {
    id: "plumb",
    title: "Plumb the feed hose and tower feed tubes",
    summary:
      "Use a 3/4-inch PVC tee as a top hose guide, run the main hose through tower tops, then pierce tower feed points for smaller irrigation tubing.",
    checklist: [
      "Set a PVC tee on top of each support pipe to guide the hose loop.",
      "Punch a clean hole in the main hose at each tower.",
      "Insert small irrigation tubing into each feed point.",
      "Add a short diffuser piece so water spreads instead of shooting straight down."
    ]
  },
  {
    id: "pumps",
    title: "Install the two IBC pumps",
    summary:
      "Put two low-cost pumps in the 275-gallon IBC: one for circulation and one for timed tower feeding.",
    checklist: [
      "Zip-tie the pumps together so they do not spin around.",
      "Route one hose back into the IBC for circulation.",
      "Route the second pump to the tower feed hose.",
      "Put each pump on a separate outlet of the outdoor smart plug."
    ]
  },
  {
    id: "calibrate",
    title: "Calibrate feed timing with runoff",
    summary:
      "Start with short timed feeds, observe media moisture and runoff, then tune the schedule instead of adding return plumbing.",
    checklist: [
      "Begin with climate-based feed windows.",
      "Measure runoff from one representative tower.",
      "Shorten feed cycles if runoff is steady or heavy.",
      "Add a short feed window if media dries too much between cycles."
    ]
  }
];

export const parts = [
  { name: "Four-pot stackable planter sections", quantity: "2 orders per tower", source: "Amazon", asin: "B007TFTW3U" },
  { name: "275 gallon IBC tote", quantity: "1 per system", source: "Amazon or used local food-safe/non-hazardous tote", asin: "B0876C67GR" },
  { name: "Submersible pumps", quantity: "2 per system", source: "Amazon", asin: "B07L54HB83" },
  { name: "Outdoor smart plug", quantity: "1 two-outlet outdoor unit", source: "Amazon", asin: "B091FXH2FR" },
  { name: "MasterBlend-style nutrient kit", quantity: "as needed", source: "Amazon", asin: "B0727VTWH5" },
  { name: "Perlite and vermiculite", quantity: "50/50 reusable media blend", source: "Amazon or garden supplier" },
  { name: "10-foot Schedule 40 pipe", quantity: "1 per tower", source: "Home Depot/local hardware" },
  { name: "3/4-inch PVC tee", quantity: "1 per tower", source: "Home Depot/local hardware" },
  { name: "Single-cell cinder block", quantity: "1 per tower", source: "Home Depot/local hardware" }
];

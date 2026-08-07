import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const kbDir = path.join(rootDir, "HydroPip_AIknowledge_base");
const dataDir = path.join(rootDir, "data");

export const systemBrain = fs.readFileSync(path.join(kbDir, "pip_system_brain.md"), "utf8");
export const schedulingRules = JSON.parse(fs.readFileSync(path.join(kbDir, "scheduling_rules.json"), "utf8"));
export const zonePlantingCalendar = JSON.parse(fs.readFileSync(path.join(kbDir, "zone_planting_calendar.json"), "utf8"));
export const setupWizardSchema = JSON.parse(fs.readFileSync(path.join(kbDir, "setup_wizard_schema.json"), "utf8"));
export const hydropipSystem = JSON.parse(fs.readFileSync(path.join(dataDir, "hydropip-system.json"), "utf8"));
export const buildCatalog = JSON.parse(fs.readFileSync(path.join(dataDir, "build-items.json"), "utf8"));
export const sitePlanning = JSON.parse(fs.readFileSync(path.join(dataDir, "site-planning.json"), "utf8"));

export const buildSteps = [
  {
    id: "anchor",
    title: "Anchor the galvanized steel support pipe",
    summary:
      "Call 811, wait for utility markings, identify private lines, then use an 8-10 foot, 1/2-inch galvanized steel pipe with roughly 5 feet above grade and level a single-cell cinder block at the base.",
    checklist: [
      "Call 811 or submit a request at https://call811.com/ and wait for underground utilities to be marked.",
      "Identify private irrigation, septic, electrical, and water lines before choosing the tower location.",
      "Mark tower spacing before driving pipe.",
      "Keep the pipe straight while driving it into the ground.",
      "Use 8 feet in sheltered, lower-wind locations or 10 feet when deeper anchoring is needed for exposed or windier sites.",
      "Confirm roughly 5 feet remains above grade and the steel pipe is secure.",
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
      "Use a 3/4-inch PVC tee as a top hose guide, run the main hose through tower tops, then pierce tower feed points for more rigid 1/4-inch drip tubing.",
    checklist: [
      "Set a PVC tee on top of each support pipe to guide the hose loop.",
      "Punch a clean hole in the main hose at each tower.",
      "Insert the more rigid 1/4-inch tower feed tubing into each feed point.",
      "Add a short diffuser piece so water spreads instead of shooting straight down."
    ]
  },
  {
    id: "pumps",
    title: "Install the two IBC pumps",
    summary:
      "Put two pumps in the 275-gallon IBC: one uses a secured bottom-to-top circulation hose for mixing and one handles timed tower feeding.",
    checklist: [
      "Zip-tie the pumps together so they do not spin around.",
      "Attach correctly sized flexible hose to the mixing pump near the bottom.",
      "Run the mixing hose to the large top opening, loop it, and point the outlet back down into the tank.",
      "Secure the mixing hose to the molded loops beside the opening with a small bungee, rope, or reusable strap.",
      "Aim the top discharge for visible tank-wide circulation without splashing outside; do not drill the IBC.",
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

export const parts = buildCatalog.items.filter((item) => item.active).map((item) => ({
  id: item.id,
  name: item.name,
  quantity: item.quantityRule,
  source: item.url?.includes("amazon.com") ? "Amazon" : "Local or selected retailer",
  url: item.url,
  required: item.required,
  category: item.category,
  lowPrice: item.lowPrice,
  typicalPrice: item.typicalPrice,
  highPrice: item.highPrice
}));

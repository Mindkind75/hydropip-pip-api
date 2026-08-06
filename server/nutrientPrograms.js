import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.resolve(__dirname, "..", "data", "nutrient-programs.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

export function nutrientProgramsForSubscription(subscription = {}) {
  const pro = Boolean(subscription.active);
  if (pro) {
    return {
      ...catalog,
      access: { member: true, pro: true, scope: "all_systems" }
    };
  }

  return {
    ...catalog,
    systems: { hydropip: catalog.systems.hydropip },
    programs: { hydropip_masterblend: catalog.programs.hydropip_masterblend },
    access: { member: true, pro: false, scope: "hydropip_only" }
  };
}


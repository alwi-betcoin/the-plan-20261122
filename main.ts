import * as fs from "node:fs";
import * as path from "node:path";

const text = "Day 1: list 300 US dentists with stale Google profiles; $12 domain. Days 2-7: each gets a 1-page audit + 5 ready posts. Email 50/day, $49 via Stripe: audit + 30 days of posts. 3% buy = 9 x $49 = $441. $100: domain + Apollo. Edge: 300 audits in a week; a human VA needs a month.";

const count = [...text].length;
if (count < 1 || count > 280) {
  throw new Error(`entry must be 1-280 code points, got ${count}`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");

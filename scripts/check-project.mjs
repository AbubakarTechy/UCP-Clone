import { spawnSync } from "node:child_process";

const checks = [
  "scripts/check-html.mjs",
  "scripts/check-css.mjs",
  "scripts/check-js.mjs",
];

for (const script of checks) {
  console.log(`\nRunning ${script}`);
  const result = spawnSync(process.execPath, [script], { stdio: "inherit" });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
console.log("\nAll project checks passed.");

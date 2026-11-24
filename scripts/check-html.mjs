import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const checks = [
  ["HTML doctype", /^<!doctype html>/i.test(html)],
  ["English document language", /<html\s+lang="en"/i.test(html)],
  ["Responsive viewport", /<meta\s+name="viewport"/i.test(html)],
  ["Main landmark", /<main\b/i.test(html)],
  ["Main content target", /id="main-content"/i.test(html)],
  ["Stylesheet reference", /href="style\.css"/i.test(html)],
  ["Deferred application script", /src="app\.js"\s+defer/i.test(html)],
];

let failed = false;
for (const [label, passed] of checks) {
  console.log(`${passed ? "PASS" : "FAIL"} ${label}`);
  if (!passed) failed = true;
}
if (failed) process.exitCode = 1;

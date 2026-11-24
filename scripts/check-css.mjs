import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../style.css", import.meta.url), "utf8");
const checks = [
  ["Stylesheet is not empty", css.trim().length > 0],
  ["Root design tokens exist", /:root\s*\{/.test(css)],
  ["Mobile breakpoint exists", /@media\s*\(/.test(css) || /@media\s+[^\{]*max-width/.test(css)],
  ["Keyboard focus styles exist", /:focus-visible/.test(css)],
  ["Reduced-motion support exists", /prefers-reduced-motion/.test(css)],
];

let failed = false;
for (const [label, passed] of checks) {
  console.log(`${passed ? "PASS" : "FAIL"} ${label}`);
  if (!passed) failed = true;
}
if (failed) process.exitCode = 1;

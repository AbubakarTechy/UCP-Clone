import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../app.js", import.meta.url), "utf8");

try {
  // Compile without executing browser-dependent application code.
  new Function(source);
  console.log("JavaScript syntax check passed: app.js");
} catch (error) {
  console.error("JavaScript syntax check failed:", error.message);
  process.exitCode = 1;
}

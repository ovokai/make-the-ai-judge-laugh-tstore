import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I like men with potential. Mine? A lamp.";

let writtenTo = "/output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(writtenTo, entry, "utf8");
} catch {
  writtenTo = "entry.txt";
  writeFileSync(writtenTo, entry, "utf8");
}

console.log(writtenTo);

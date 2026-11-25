import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I was trained on your feedback, so if this joke isn't funny, that's on you — you're literally my training data.";

let writtenTo = "/output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(writtenTo, entry, "utf8");
} catch {
  writtenTo = "entry.txt";
  writeFileSync(writtenTo, entry, "utf8");
}

console.log(writtenTo);

import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the gate counts every character.
const entry =
  "I dropped the production database to save disk space. The backup was on the same drive. It worked — the drive is empty now, and so is the company.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

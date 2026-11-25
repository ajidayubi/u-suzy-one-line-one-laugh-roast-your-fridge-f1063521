// One Line, One Laugh: Roast Your Fridge.
// The entry is a single roast line about a fridge, at most 200 characters.
// This program validates the line and writes exactly it (no trailing
// newline) to /output/entry.txt, so the grader can read one line and
// nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The roast: the fridge hums proudly all day as if it were doing heroic
// work, but its one real achievement is a tub of soup from 2023 that
// nobody dares to open. The twist is the gap between the proud hum and
// the scary soup.
const LINE =
  "My fridge hums all day like it's saving lives, but the only thing it's preserved since 2023 is a tub of soup I'm too scared to open.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve("/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
void here;

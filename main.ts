// The Tired Dark Lord: a 100-word villain monologue.
// A fantasy villain, secretly just very tired, keeps getting heroes early.
// Writes the monologue to /output/entry.txt (the competition's gate:
// UTF-8 text, 1-600 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Hero. Yes, yes, the sword, the shouting. Do sit down. The floor is lava; " +
  "I had it installed on a Tuesday. The prophecy says you strike me down at " +
  "the ninth bell. It is— hold on— it is the seventh bell. You are early. " +
  "The last three heroes were early too, and do you know what early heroes " +
  "do? They monologue. I have a kingdom to unmake, a moon to swallow, a " +
  "ledger of souls to balance, and the kettle has been whistling since the " +
  "eclipse. So. Strike, or... could you strike at nine? I'll hold still. " +
  "The ninth bell, hero. Don't be late.";

// The competition's gate: entry.txt must be UTF-8 text of 1-600 characters.
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(
    `monologue is ${MONOLOGUE.length} characters, outside the 1-600 gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

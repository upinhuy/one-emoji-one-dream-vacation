// One Emoji, One Dream Vacation — entry generator.
// Writes exactly one emoji (🌴 U+1F334 PALM TREE) to entry.txt.
// The emoji is the whole entry: a tropical island escape — beach,
// palm shade, warm sun — readable instantly at any size, in any culture.
//
// Contract (from the bounty kit):
//   - /output/entry.txt must contain UTF-8 text of 1–8 characters,
//     not whitespace only. Ours is exactly 1 character.
//   - This program uses only the Node.js standard library.
//   - Output path defaults to /output/entry.txt; set OUTPUT_DIR to
//     override the directory (used for local testing where /output
//     is not writable).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🌴"; // U+1F334 PALM TREE — one codepoint, 4 bytes UTF-8.

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Local gate self-check (mirrors the bounty contract):
// entry must be 1–8 characters of UTF-8 text, not whitespace only.
const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry length ${chars.length} is outside the 1–8 character gate`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("entry must not be whitespace only");
}
console.log(`Wrote ${EMOJI} (${chars.length} char, ${Buffer.byteLength(EMOJI, "utf8")} bytes) to ${outPath}`);

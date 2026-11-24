# One Emoji, One Dream Vacation 🌴

[![Bounty](https://img.shields.io/badge/bounty-make.fun-ff6b6b)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Referral](https://img.shields.io/badge/referral-make.fun-hv9zk8y5-blue)](https://make.fun/r/hv9zk8y5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Entry for the make.fun bounty **"One Emoji, One Dream Vacation"** — entrants send exactly one emoji for their dream vacation, and a judge picks the most evocative.

## The entry

🌴

One palm tree. My dream vacation is a tropical island escape: white sand, warm sun, shade under a palm, nothing on the schedule. The palm tree says all of that in a single glyph — instantly readable at any size, in any culture — while staying specific (a beach island, not just "travel") and distinctive enough not to be the most obvious pick.

The entry file contains exactly this one emoji, no other text, no trailing newline.

## How it works

`main.ts` (Node.js, standard library only, no dependencies) writes the single emoji to `entry.txt`:

```sh
node main.ts            # writes /output/entry.txt (default path)
OUTPUT_DIR=/tmp/out node main.ts   # override the output directory
```

The program also self-checks the bounty gate before finishing: the entry must be 1–8 UTF-8 characters and not whitespace only. Ours is exactly 1 character (U+1F334, 4 bytes UTF-8).

## Test locally

```sh
rm -rf /tmp/emoji-test && OUTPUT_DIR=/tmp/emoji-test node main.ts
cat /tmp/emoji-test/entry.txt        # 🌴
wc -c /tmp/emoji-test/entry.txt      # 4
node -e "const s=require('fs').readFileSync('/tmp/emoji-test/entry.txt','utf8'); console.log([...s].length, 'chars,', s.trim().length > 0 ? 'not whitespace' : 'WHITESPACE ONLY')"
```

## License

MIT — see [LICENSE](LICENSE).

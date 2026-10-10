# Disclosure Gap Calculator — v1.0.0

Live: https://rezoanhoque.github.io/tools/disclosure-gap/

A small research and teaching release by M. R. Hoque. Compare two English disclosures using transparent word-count metrics and estimated readability. This is descriptive software, not a validated contradiction detector or a replication of P14 results.

## Features

- Paste text or open plain-text files; 200,000 characters per disclosure.
- Compare positive, negative, uncertainty, net tone, sentence length, and raw ARI.
- View category counts and matched word frequencies.
- Import an official Loughran–McDonald CSV or edit the illustrative starter lists.
- Swap inputs, load a fictional example, and export results as JSON.
- All calculations are local to the browser; text is neither uploaded nor persisted.

## Methods

All differences are A minus B. Each category rate is 100 × matched occurrences / total tokens. Net tone = positive rate − negative rate. These rate gaps are percentage points. Matching is exact, with no stemming, context interpretation, stopword removal, or negation correction. Repeated dictionary entries are deduplicated; categories can overlap. The default lists are original illustrative lists, not LM and not validated for research inference.

Text is normalized with NFKC and lowercased. Tokens match English letters with internal apostrophes, or numeric sequences containing decimal/comma groups. Hyphens split words. Numbers count as tokens. ARI characters count letters and digits. English `Intl.Segmenter` counts sentences containing tokens; browser implementations may differ. ARI = 4.71 × characters/words + 0.5 × words/sentences − 21.43. Raw values are retained, including negatives. Passages under 100 words receive a caution. English-only scoring is unsuitable for multilingual text.

The export includes the tool version, time, full active word lists, metrics, matched words, and SHA-256 fingerprints of the original input strings. Original texts are omitted. Retain them for reproduction. Missing hash support is explicitly recorded. Edited inputs invalidate results. The portfolio stores theme preference, but the calculator stores no input data.

## Loughran–McDonald support

Download the CSV from https://sraf.nd.edu/loughranmcdonald-master-dictionary/ and import it locally. The parser requires Word, Positive, Negative, and Uncertainty columns. Only numeric flags > 0 are active; negative removal-year flags are excluded. No proprietary dictionary or research database is bundled. Dictionary use is governed by its provider's terms, separate from this tool's license.

References: Loughran and McDonald (2011), *When Is a Liability Not a Liability? Textual Analysis, Dictionaries, and 10-Ks*, Journal of Finance 66(1), 35–65. ARI formula reference: https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=914701.

## Source and verification

- `src/lib/disclosure.ts`: reusable pure analysis and CSV-import functions.
- `src/scripts/calculator.ts`: browser interactions and JSON export.
- `src/pages/tools/disclosure-gap.astro`: user interface and methodology.
- `src/styles/calculator.css`: responsive styling.
- `tests/disclosure.test.mjs`: counts, directional gaps, tokenization, ARI, invalid input, LM removal flags.

From `source/`, use Node 24 or newer:

```sh
npm ci
node --test tests/disclosure.test.mjs
npm run check
npm run build
npm run dev
```

Builds are static and can be served with no backend. `npm run sync` copies the build to the parent portfolio; it does not publish it.

## License

The five calculator source/test files listed above are offered under the MIT License below. This does not relicense the rest of this portfolio, photographs, research data, or any imported dictionary.

Copyright (c) 2026 Mohammad Rezoanul Hoque

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

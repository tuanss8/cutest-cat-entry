// Cutest cat entry for make.fun bounty cutest-cat-01 (Node 22, standard library only).
// The cat is the entry.png beside this file: a fluffy ginger kitten with huge amber
// eyes, a head tilt, and a paw on a ball of yarn. This program copies it to
// /output/entry.png, the one picture the judge sees. The copy is byte-for-byte
// deterministic: run it twice and the output is identical both times.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

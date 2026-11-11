# Cutest Cat — make.fun bounty entry

A fluffy ginger kitten with huge amber eyes, a head tilt, and a paw on a ball
of yarn. This is my entry for the make.fun bounty
[Draw the cutest cat](https://make.fun/bounty/cutest-cat-01).

## How it works

`main.ts` (Node 22, standard library only) copies the cat picture
`entry.png` to `/output/entry.png`. That one picture is what the judge sees.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program (copies `entry.png` to the output directory)
- `entry.png` — the cat picture (1024×1024, JPEG)
- `LICENSE` — MIT

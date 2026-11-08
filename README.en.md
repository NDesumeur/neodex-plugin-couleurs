# Couleurs (Colours)

The colour tool: pick a colour anywhere on your screen, read it in every format, find matching colours, check that text stays readable, and keep your colours in palettes synced between your PCs.

*Version française : [README.md](README.md)*

## Picking a colour

- **Screen eyedropper**: NeoDex hides for a moment and shows a capture of your whole screen; click the colour to pick (**Escape** to cancel). It works on every window, not just NeoDex.
- **Eyedropper in NeoDex**: picks a colour inside the NeoDex window.
- **Choose from the colour picker**: the Windows colour picker.
- **Type a colour**: write in one of the fields a code `#e01ec8`, `rgb(224, 30, 200)`, `hsl(…)` or simply `224, 30, 200`.

The last 24 colours picked stay under **Last colours picked**.

## Formats

The chosen colour is shown in **HEX**, **RGB**, **HSL**, **CMYK** (for print) and as a **CSS** variable; each format has its own **Copy** button.

## Harmonies

From the colour, on the colour wheel:

- **Complementary** (the opposite colour), **Analogous** (the neighbours at ±30°), **Triad** (three colours at 120°), **Split complementary** and **Square** (four colours at 90°);
- **Shades**: the same hue from lightest to darkest;
- **Saturation**: the same hue, from most vivid to greyest.

On each swatch: **click** to choose it, **right-click** to copy its code.

## Contrast (WCAG)

A preview shows a heading and some text in your colour on a background you choose. The contrast ratio is computed following the WCAG accessibility standard, with three verdicts: **AA text** (4.5 : 1), **AA large text** (3 : 1) and **AAA** (7 : 1).

## My palettes

- **+ New palette** creates one with the current colour; **+ #colour** adds the current colour to a palette; **double-click** a swatch to remove it.
- **From an image…**: choose an image and its 6 main colours become a palette.
- A palette's **…** menu lets you rename it, copy it as CSS variables or as a list, export it as `.json`, or delete it.

## Data and sync

Your palettes and recent colours are stored by NeoDex, backed up and synced between your PCs when sync is on. The eyedropper's screen capture is only used to read the colour and is never saved.

## Install

In NeoDex: **NeoStore → Discover → Couleurs → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).

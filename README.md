# Couleurs

L'outil des couleurs : prends une couleur n'importe où sur ton écran, lis-la dans tous les formats, trouve les couleurs qui vont avec, vérifie qu'un texte reste lisible, et range tes couleurs dans des palettes synchronisées entre tes PC.

*English version: [README.en.md](README.en.md)*

## Générateur de palettes (nouveau en 1.2.0)

Espace pour une nouvelle palette de cinq couleurs, avec verrous ; vision des daltoniens ; exports Tailwind, GPL et ASE.

## Prendre une couleur

- **Pipette sur l'écran** : NeoDex se cache un instant et affiche une capture de tout ton écran ; clique sur la couleur à prendre (**Échap** pour annuler). Elle marche sur toutes les fenêtres, pas seulement dans NeoDex.
- **Pipette dans NeoDex** : prend une couleur dans la fenêtre de NeoDex.
- **Choisir dans le nuancier** : le sélecteur de couleur de Windows.
- **Taper une couleur** : écris dans un des champs un code `#e01ec8`, `rgb(224, 30, 200)`, `hsl(…)` ou simplement `224, 30, 200`.

Les 24 dernières couleurs prises restent dans **Dernières couleurs prises**.

## Formats

La couleur choisie s'affiche en **HEX**, **RGB**, **HSL**, **CMJN** (pour l'impression) et en variable **CSS** ; chaque format a son bouton **Copier**.

## Harmonies

À partir de la couleur, sur la roue des couleurs :

- **Complémentaire** (la couleur opposée), **Analogues** (les voisines à ±30°), **Triade** (trois couleurs à 120°), **Complémentaires divisées** et **Carré** (quatre couleurs à 90°) ;
- **Nuances** : la même teinte du plus clair au plus foncé ;
- **Saturation** : la même teinte, des plus vives aux plus grises.

Sur chaque pastille : **clic** pour la choisir, **clic droit** pour copier son code.

## Contraste (WCAG)

Un aperçu montre un titre et un texte dans ta couleur sur un fond que tu choisis. Le rapport de contraste est calculé selon la norme d'accessibilité WCAG, avec trois verdicts : **AA texte** (4,5 : 1), **AA grand texte** (3 : 1) et **AAA** (7 : 1).

## Mes palettes

- **+ Nouvelle palette** en crée une avec la couleur actuelle ; **+ #couleur** ajoute la couleur actuelle à une palette ; **double-clic** sur une pastille la retire.
- **Depuis une image…** : choisis une image et ses 6 couleurs principales deviennent une palette.
- Le menu **…** d'une palette permet de la renommer, de la copier en variables CSS ou en liste, de l'exporter en `.json` ou de la supprimer.

## Générateur, daltonisme et exports (1.2.0)

- **Générateur** : appuie sur **Espace** (ou **GÉNÉRER**) pour une nouvelle palette de cinq couleurs qui vont ensemble. **BLOQUER** garde une couleur ; les suivantes reprennent sa teinte. Clic sur une couleur pour la choisir, **GARDER EN PALETTE** la range dans Mes palettes.
- **Daltonisme** : la liste sous le générateur montre la palette comme la voit une personne sans rouge, sans vert ou sans bleu.
- **Exports** : dans le menu **…** d’une palette, **Copier pour Tailwind**, **Télécharger .gpl** (GIMP, Inkscape, Krita) et **Télécharger .ase** (Adobe), en plus du CSS.

## Données et synchronisation

Tes palettes et tes dernières couleurs sont enregistrées par NeoDex, sauvegardées et synchronisées entre tes PC si la synchro est activée. La capture d'écran de la pipette ne sert qu'à lire la couleur et n'est jamais enregistrée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Couleurs → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Taille de l’écran (1.1.4)

Les pastilles des harmonies, le grand aperçu de la couleur et la colonne des noms grandissent ou rétrécissent avec la fenêtre : chaque harmonie tient sur une ligne, d’un petit portable à un grand écran. Sous 900 px de large, les deux colonnes passent l’une sous l’autre.

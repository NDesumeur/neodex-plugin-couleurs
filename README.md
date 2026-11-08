# Couleurs

L'outil des couleurs : prends une couleur n'importe où sur ton écran, lis-la dans tous les formats, trouve les couleurs qui vont avec, vérifie qu'un texte reste lisible, et range tes couleurs dans des palettes synchronisées entre tes PC.

*English version: [README.en.md](README.en.md)*

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

## Données et synchronisation

Tes palettes et tes dernières couleurs sont enregistrées par NeoDex, sauvegardées et synchronisées entre tes PC si la synchro est activée. La capture d'écran de la pipette ne sert qu'à lire la couleur et n'est jamais enregistrée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Couleurs → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

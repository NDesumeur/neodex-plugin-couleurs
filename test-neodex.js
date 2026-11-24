// lancé par le test « local » de NeoDex : à chaque taille d'écran, chaque rangée d'harmonies tient sur une ligne et rien ne déborde à droite
module.exports = async ({ pj, sleep }) => {
  await sleep(800);
  const r = await pj(`(() => { const rows = [...document.querySelectorAll('.coRow')].filter(r => r.querySelector('.coSw'));
    const cut = rows.filter(r => new Set([...r.querySelectorAll('.coSw')].map(s => s.offsetTop)).size > 1).map(r => r.querySelector('.hint')?.textContent);
    const over = [...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length;
    return { rows: rows.length, cut, over, sw: document.querySelector('.coSw')?.offsetWidth }; })()`);
  if (r.rows < 5) throw new Error('harmonies absentes : ' + JSON.stringify(r));
  if (r.cut.length) throw new Error('rangées coupées : ' + r.cut.join(', '));
  if (r.over) throw new Error(r.over + ' élément(s) débordent à droite');
  // le générateur : on bloque la 2e couleur, Espace donne une nouvelle palette qui la garde ; le daltonisme change l'affichage
  const g = await pj(`(async () => { const C = document.querySelector('.coGen').closest('.appWrap').parentNode.__co, before = C.gen.map(c => c.hex);
    document.querySelectorAll('.coGc button')[1].click(); await new Promise(r => setTimeout(r, 50));
    document.activeElement?.blur?.(); document.dispatchEvent(new KeyboardEvent('keydown', {key: ' ', bubbles: true})); await new Promise(r => setTimeout(r, 50));
    const after = C.gen.map(c => c.hex); if (after[1] !== before[1] || after.filter((h, i) => h !== before[i]).length < 3) return {err: 'espace : ' + before + ' → ' + after};
    const sel = [...document.querySelectorAll('select')].find(s => [...s.options].some(o => o.value === 'deutan')); sel.value = 'deutan'; sel.dispatchEvent(new Event('change')); await new Promise(r => setTimeout(r, 50));
    const shown = getComputedStyle(document.querySelectorAll('.coGc')[0]).backgroundColor;
    return {after, shown, n: document.querySelectorAll('.coGc').length, ase: C.coAse({colors: after}).length}; })()`);
  if (g.err) throw new Error(g.err);
  if (g.n !== 5 || g.ase !== 12 + 42 * 5) throw new Error('générateur : ' + JSON.stringify(g));
  return 'générateur (espace, verrou, daltonien ' + g.shown + ', ase ' + g.ase + ' o) · ' + r.rows + ' rangées d’harmonies sur une ligne, pastilles de ' + r.sw + ' px';
};

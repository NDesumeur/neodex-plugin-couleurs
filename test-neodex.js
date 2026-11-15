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
  return r.rows + ' rangées d’harmonies sur une ligne, pastilles de ' + r.sw + ' px';
};

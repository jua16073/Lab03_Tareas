const states = {
  filtro: 0,
};

const render = (tareasSt) => {
  const filtros = document.createElement('div');
  filtros.className = 'forRows';
  root.appendChild(filtros);

  const all = document.createElement('button');
  all.className = 'btns';
  all.innerHTML = 'ALL';
  filtros.appendChild(all);

  const completed = document.createElement('button');
  completed.className = 'btns';
  completed.innerHTML = 'COMPLETED';
  filtros.appendChild(completed);

  const active = document.createElement('button');
  active.className = 'btns';
  active.innerHTML = 'ACTIVE';
  filtros.appendChild(active);
};

render(states);

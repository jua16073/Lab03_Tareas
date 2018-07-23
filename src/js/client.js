const states = {
  filtro: 0,
  respuesta: false,
  info: null,
};

const render = (tareasSt) => {
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  const filtros = document.createElement('div');
  filtros.className = 'forRows';
  root.appendChild(filtros);

  if (tareasSt.respuesta === false) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    root.appendChild(loader);
  }

  const lista = document.createElement('div');
  lista.className = 'lista';
  root.appendChild(lista);
  
  for (let btns = 0; btns < 3; btns += 1) {
    const btn = document.createElement('button');
    btn.className = 'btns';
    if (btns === 0) btn.innerHTML = 'ALL';
    if (btns === 1) btn.innerHTML = 'COMPLETED';
    if (btns === 2) btn.innerHTML = 'ACTIVE';
    if (btns === tareasSt.filtro) {
      btn.disabled = true;
      btn.classList.add('actual');
    }
    btn.onclick = () => {
      tareasSt.filtro = btns;
      render(tareasSt);
    }
    filtros.appendChild(btn);
  }
};

const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');

solicitud.then(console.log('nani'))
  .then(resultado => resultado.json())
  .then(result => console.log('pls', result[1].title))
  .catch(console.log('tasukete kudasai'));

render(states);

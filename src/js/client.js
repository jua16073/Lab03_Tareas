const states = {
  filtro: 0,
  info: null,
};

const render = (tareasSt) => {
  // repintar la pagina
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Botones
  const filtros = document.createElement('div');
  filtros.className = 'forRows';
  root.appendChild(filtros);

  // Animacion de carga
  if (tareasSt.info === null) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    root.appendChild(loader);
  }

  // Div que tiene a las tareas
  const lista = document.createElement('div');
  lista.className = 'lista';
  root.appendChild(lista);
  
  // Botones de los filtros
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
    };
    filtros.appendChild(btn);
  }

  // Display de las tareas
  if (tareasSt.info != null) {
    switch (tareasSt.filtro) {
      case 0:
        for (let x = 0; x < tareasSt.info.length; x += 1) {
          const tarea = document.createElement('button');
          tarea.innerHTML = tareasSt.info[x].title;
          tarea.className = 'tareas';
          if (tareasSt.info[x].isCompleted === true) tarea.classList.add('completed');
          lista.appendChild(tarea);
        }
        break;
      case 1:
        for (let x = 0; x < tareasSt.info.length; x += 1) {
          if (tareasSt.info[x].isCompleted === true) {
            const tarea = document.createElement('button');
            tarea.innerHTML = tareasSt.info[x].title;
            tarea.className = 'tareas';
            tarea.classList.add('completed');
            lista.appendChild(tarea);
          }
        }
        break;
      case 2:
        for (let x = 0; x < tareasSt.info.length; x += 1) {
          if (tareasSt.info[x].isCompleted === false) {
            const tarea = document.createElement('button');
            tarea.innerHTML = tareasSt.info[x].title;
            tarea.className = 'tareas';
            lista.appendChild(tarea);
          }
        }
        break;
      default:
        console.log('default');
        break;
    }
  }
};

const assign = (j) => {
  states.info = j;
  render(states);
};

const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');

solicitud.then(states.respuesta = true)
  .then(resultado => resultado.json())
  .then(result => assign(result))
  .catch(console.log('tasukete kudasai'));

render(states);

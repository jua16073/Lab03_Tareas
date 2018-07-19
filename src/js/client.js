const state = {
  game: [3, 3, 3, 3, 3, 3, 3, 3, 3],
  turno: 0,
  gano: 0,
};

const render = btnState => {

  if ((root.hasChildNodes())) {
    root.innerHTML = null;
  }

  // Titulo TOTITO
  const title = document.createElement('h1');
  title.innerHTML = 'TOTITO';
  title.className = 'title';
  root.appendChild(title);

  // Grid que contiene a las filas con los botones para jugar
  const grid = document.createElement('div');
  grid.className = 'grid';
  root.appendChild(grid);

  // Filas para los botones
  const row1 = document.createElement('div');
  row1.className = 'row';
  grid.appendChild(row1);

  const row2 = document.createElement('div');
  row2.className = 'row';
  grid.appendChild(row2);

  const row3 = document.createElement('div');
  row3.className = 'row';
  grid.appendChild(row3);

  // Div en el que se encuentran los botones de reinicio 
  // y a que jugador le toca
  const divf = document.createElement('div');
  divf.className = 'final';
  root.appendChild(divf);

  const texto = document.createElement('p');
  texto.className = 'texto';
  texto.innerHTML = 'Turno de';
  if(btnState.gano == 1){
    texto.innerHTML = 'Gano: '
}
  divf.appendChild(texto);

  const image = document.createElement('img');
  image.className = 'img';


  // ifs para saber a que jugador le toca
  if(btnState.turno == 0){
      image.innerHTML = '<img src = "assets/X.png">';
  }

  if(btnState.turno == 1){
    image.innerHTML = '<img src = "assets/O.png">';
  }

  divf.appendChild(image);

  //  Boton de reinicio
  const redo = document.createElement('button');
  redo.className = 'button';
  redo.innerHTML = 'REINICIO';
  divf.appendChild(redo);

  // Cada boton en las filas y lo que hacen cuando se usan
  let id = 0;
  const btns = btnState.game.map(
    (position, i) => {
      const btn = document.createElement('button');
      btn.className = 'btns';
      btn.id = id;

      if (position === 1) {
        btn.classList.add('pressed');
        btn.innerHTML = '<img src = "assets/X.png" disabled>';
        btn.disabled = true;
      }

      if (position === 0) {
        btn.classList.add('pressed');
        btn.innerHTML = '<img src = "assets/O.png">';
        btn.disabled = true;
      }

      if (btnState.gano === 1) {
        btn.classList.add('pressed');
        btn.innerHTML = '<img src = "assets/O.png">';
        btn.disabled = true;
      }

      id++;

      btn.onclick = (self) => {
        btnState.game[btn.id] = (btnState.turno + 1) % 2;
        btnState.turno = (btnState.turno + 1) % 2;

        let cont = 0;
        if (btnState.game[btn.id] === btnState.game[(btn.id-3) % 9]){
            cont++;
            if (btnState.game[btn.id] === btnState.game[(btn.id-6) % 9])
                cont++;
                else 
                    cont = 0;
        }

        if (cont == 2)
            btnState.gano = 1;

        if (btnState.game[0] === btnState.game[1] && btnState.game[2] == btnState.game[0] && (btnState.game[0] + btnState.game[1] + btnState.game[2])<4)
            btnState.gano = 1;
        
        if (btnState.game[3] === btnState.game[4] && btnState.game[5] == btnState.game[3] && (btnState.game[3] + btnState.game[4] + btnState.game[5])<4)
            btnState.gano = 1;
        
        if (btnState.game[6] === btnState.game[7] && btnState.game[8] == btnState.game[6] && (btnState.game[6] + btnState.game[7] + btnState.game[8])<4)
            btnState.gano = 1;

        if (btnState.game[0] === btnState.game[4] && btnState.game[0] == btnState.game[8] && (btnState.game[0] + btnState.game[4] + btnState.game[8])<4)
            btnState.gano = 1;
        
        if (btnState.game[2] === btnState.game[4] && btnState.game[2] == btnState.game[6] && (btnState.game[2] + btnState.game[4] + btnState.game[6])<4)
            btnState.gano = 1;

        if (btnState.gano == 1){
            btnState.turno = (btnState.turno + 1) % 2;
        }
        render(btnState);

        console.log(btn.game);
      };

      return btn;
    }
  );

  let x = 0;
  btns.forEach(
    btn => {
      if (x < 3) {
        row1.appendChild(btn);
      }
      else if (x < 6) {
        row2.appendChild(btn);
      }
      else if (x < 9) {
        row3.appendChild(btn);
      }
      x++;
    }
  );

  redo.onclick = () => {
    btnState.game = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    btnState.gano = 0;
    render(btnState);
  }

  
};

render(state);
'use strict';

const boardSize = 10;

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex / boardSize,
  };
};

const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};
const symbolsToWin = 5;
const isWinningMove = (field) => {
  console.log(field);
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

let activeUser = 'circle';
const fields = document.querySelectorAll('button');

fields.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    if (activeUser == 'circle') {
      e.target.classList.add('board__field--circle');
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="cross" src="imiges/cross.svg" alt="cross" />';
      activeUser = 'cross';
      btn.disabled = true;
    } else {
      e.target.classList.add('board__field--cross');
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="circle" src="imiges/circle.svg" alt="circle" />';
      activeUser = 'circle';
      btn.disabled = true;
    }
    let win = isWinningMove(btn);

    if (win === true && activeUser === 'circle') {
      alert(`Vyhrál kroužek.`);
    }
    if (win === true && activeUser === 'cross') {
      alert(`Vyhrál křížek.`);
    }
  }),
);

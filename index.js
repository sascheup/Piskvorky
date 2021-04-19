'use strict';

let activeUser = 'circle';
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (activeUser == 'circle') {
      btn.classList.add('board__field--circle');
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="cross" src="imiges/cross.svg" alt="cross" />';
      activeUser = 'cross';
      btn.disabled = true;
    } else {
      btn.classList.add('board__field--cross');
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="circle" src="imiges/circle.svg" alt="circle" />';
      activeUser = 'circle';
      btn.disabled = true;
    }
  }),
);

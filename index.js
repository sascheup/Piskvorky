'use strict';

/*let activeUser = 'circle';

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (
      document.querySelector('p').innerHTML ==
      'HRAJE: <img id="circle" src="imiges/circle.svg" alt="circle" />'
    ) {
      btn.style.class = 'board__field--circle';
      btn.innerHTML =
        '<img id="circle" src="imiges/circle.svg" alt="circle" />';
      document.querySelector('p').innerHTML ==
        'HRAJE: <img id="cross" src="imiges/cross.svg" alt="cross" />';
    } else {
      btn.style.class = 'board__field--cross';
      btn.innerHTML = '<img id="cross" src="imiges/cross.svg" alt="cross" />';
      document.querySelector('p').innerHTML ==
        'HRAJE: <img id="circle" src="imiges/circle.svg" alt="circle" />';
    }
  }),
);
*/

let activeUser = 'circle';
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (activeUser == 'circle') {
      btn.style.class = 'board__field--circle';
      btn.innerHTML =
        '<img style="color:black id="circle" src="imiges/circle.svg" alt="circle" />';
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="cross" src="imiges/cross.svg" alt="cross" />';
      activeUser = 'cross';
      btn.disabled = true;
    } else {
      btn.style.class = 'board__field--cross';
      btn.innerHTML =
        '<img style="color:black id="cross" src="imiges/cross.svg" alt="cross" />';
      document.querySelector('p').innerHTML =
        'HRAJE: <img id="circle" src="imiges/circle.svg" alt="circle" />';
      activeUser = 'circle';
      btn.disabled = true;
    }
  }),
);

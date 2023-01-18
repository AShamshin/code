let One = document.getElementById('buttonOne');
let Two = document.getElementById('buttonTwo');
let Three = document.getElementById('buttonThree');
let Four = document.getElementById('buttonFour');
let Five = document.getElementById('buttonFive');
let Six = document.getElementById('buttonSix');
let Seven = document.getElementById('buttonSeven');
let Eight = document.getElementById('buttonEight');
let Nine = document.getElementById('buttonNine');
let Zero = document.getElementById('buttonZero');
let Divide = document.getElementById('buttonDivide');
let Multiply = document.getElementById('buttonMultiply');
let Plus = document.getElementById('buttonPlus');
let Dot = document.getElementById('buttonDot');
let Equals = document.getElementById('buttonEquals');
let Minus = document.getElementById('buttonMinus');
let result = document.getElementById('result');
let dump = document.getElementById('buttonDelete');

dump.addEventListener('click', a);

function addEventNumbers(i, y) {
  array[i].addEventListener('click', () => displaysOnScreen(y));
}

let array = [
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Plus,
  Dot,
  Minus,
  Multiply,
  Divide,
];

for (let i = 0; i < array.length; i++) {
  let y = array[i].innerHTML;
  addEventNumbers(i, y);
}

let s = '';
function displaysOnScreen(y) {
  s = result.innerHTML += y;
}
Equals.addEventListener('click', () => decides(s));
function decides(s) {
  let f = eval(s).toFixed(2);
  result.innerHTML = f;
}
function a() {
  result.innerHTML = '';
}

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function getNumber1() {
  return Number(input1.value);
}

function getNumber2() {
  return Number(input2.value);
}

function makeOperation(operationCode) {
  let result;
  if (operationCode === '+') {
    result = getNumber1() + getNumber2();
  } else if (operationCode === '-') {
    result = getNumber1() - getNumber2();
  } else if (operationCode === '*') {
    result = getNumber1() * getNumber2();
  } else if (operationCode === '/') {
    result = getNumber1() / getNumber2();
  } else {
    alert('operation is unknown');
  }
  alert(result);
}

function onButtonPlusClick() {
  makeOperation('+');
}
function onButtonMinusClick() {
  makeOperation('-');
}
function onButtonMultiplyClick() {
  makeOperation('*');
}
function onButtonDivideClick() {
  makeOperation('/');
}
buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDivide.addEventListener('click', onButtonDivideClick);

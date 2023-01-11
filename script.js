let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

function onButtonPlusClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summa = number1 + number2;
  alert(summa);
}
function onButtonMinusClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summa = number1 - number2;
  alert(summa);
}
function onButtonMultiplyClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summa = number1 * number2;
  alert(summa);
}
function onButtonDivideClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summa = number1 / number2;
  alert(summa);
}
buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDivide.addEventListener('click', onButtonDivideClick);

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);

  let result;
  if (operationCode === '+') {
    result = number1 + number2;
  } else if (operationCode === '-') {
    result = number1 - number2;
  } else if (operationCode === '*') {
    result = number1 * number2;
  } else if (operationCode === '/') {
    result = number1 / number2;
  } else {
    alert('operation is unknown');
  }
  alert(result);
}

function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDivide.addEventListener('click', onOperationButtonClick);

function numberToPower(number, power) {
  let a = 1;
  for (let i = 0; i < power; i++) {
    a *= number;
  }
  return a;
}
console.log(numberToPower(10, 4));

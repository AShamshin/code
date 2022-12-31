function countPositivesSumNegatives(input) {
  let a = 0;
  let b = 0;
  let c = [];
  if (input?.length === 0 || input === null) {
    return [];
  }
  for (let i = 0; i <= input.length; i++) {
    if (input[i] >= 1) {
      a++;
    } else if (input[i] <= -1) {
      b += input[i];
    }
  }

  return c.concat([a, b]);
}
console.log(countPositivesSumNegatives([]));

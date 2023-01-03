function check(a, x) {
  let b = a.find((item) => item == x);

  return b === x ? true : false;
}
console.log(check([], 0));

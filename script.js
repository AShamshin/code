function grow(x) {
  let b = 1;

  for (let a = 0; a < x.length; a++) {
    b *= x[a];
  }
  return b;
}
console.log(grow([4, 1, 1, 1, 5]));

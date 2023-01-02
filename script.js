function litres(time) {
  let i = 0.5 * time;
  if (i < 1) {
    i = 0;
  }

  return Math.trunc(i);
}
console.log(litres(12.3));

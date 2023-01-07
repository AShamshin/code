function remainder(n, m) {
  return Math.max(n, m) % Math.min(n, m);
}
console.log(remainder(0, 1));

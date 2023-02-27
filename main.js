function powersOfTwo(n) {
  const result = [1];
  if (n <= 0) return result;
  for (let i = 1; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

console.log(powersOfTwo(4));

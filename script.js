function largest(n, xs) {
  if (n > 0) {
    return xs.sort((a, b) => a - b), xs.slice(-n);
  } else {
    return [];
  }
}
console.log(largest(0, [9, 1, 50, 22, 3, 13, 2, 63, 5]));

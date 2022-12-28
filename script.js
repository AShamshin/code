function repeatStr(n, s) {
  let a = '';

  for (let i = 0; i < n; i++) {
    a += s;
  }

  return String(a);
}
console.log(repeatStr(3, 'ha'));

function divCon(x) {
  let a = x.filter((el) => Number.isInteger(el));
  let b = x.filter((el) => !Number.isInteger(el));
  let c = 0;
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    c += a[i];
  }

  for (let i = 0; i < b.length; i++) {
    d += +b[i];
  }
  return c - d;
}

console.log(divCon([9, 3, '7', '3']));

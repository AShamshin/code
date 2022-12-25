function saleHotdogs(n) {
  let i = 0;
  if (n < 5) {
    i = n * 100;
  } else if (n >= 5 && n < 10) {
    i = n * 95;
  } else if (n >= 10) {
    i = n * 90;
  }

  return i;
}
alert(saleHotdogs(10));

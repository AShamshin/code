function findDifference(a, b) {
  let c = a[0] * a[1] * a[2];
  let d = b[0] * b[1] * b[2];
  if (c > d) return c - d;
  else {
    return d - c;
  }
}

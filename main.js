function findMultiples(integer, limit) {
  let count = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      count.push(i);
    }
  }
  return count;
}

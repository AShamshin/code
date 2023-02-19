function strCount(str, letter) {
  let result = str.split('').filter((s) => {
    return s === letter;
  });
  return result.length;
}

console.log(strCount('Hello', 'l'));

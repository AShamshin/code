function uniTotal(string) {
  return string
    .split('')
    .map((el) => el.charCodeAt())
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(uniTotal('aaa'));

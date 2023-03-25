function trim(str, size) {
  let a = '';

  if (str.length > size && size <= 3) {
    a = str.substr(0, size) + '...';
  } else if (str.length > size) {
    a = str.substr(0, size - 3) + '...';
  } else if (str.length <= size) {
    a = str;
  }
  return a;
}
console.log(trim('Creating kata is fun', 14));

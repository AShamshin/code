function shortcut(string) {
  let c = '';

  for (let a = 0; a < string.length; a++) {
    let b = string[a];

    if (b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u') continue;
    c += b;
  }

  return c;
}
shortcut('hello');

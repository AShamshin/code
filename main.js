function remove(string) {
  return string
    .split(' ')
    .filter((f) => {
      if (f[f.length - 1] === '!' && f[0] === '!') {
        return f;
      } else if (f[f.length - 2] === '!') {
        return f;
      } else if ((f[f.length - 1] === '!') | (f[0] === '!')) {
        return '';
      } else {
        return f;
      }
    })
    .join(' ');
}

console.log(remove('gdh hykefxk drcu sobc!'));

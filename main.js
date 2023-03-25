var greet = function (name) {
  let a = name.toLowerCase();

  let newStr = a[0].toUpperCase() + a.slice(1);

  return 'Hello ' + newStr + '!';
};
console.log(greet('BILLY'));

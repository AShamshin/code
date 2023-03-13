function removeEveryOther(arr) {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      // console.log(arr[i]);
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

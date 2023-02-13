let students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100,
  },
];

function detNameS(array, f) {
  let array2 = [];

  for (let i = 0; i < array.length; i++) {
    array2[i] = f(array[i]);
  }
  return array2;
}

abs = (obj) => {
  let copy = { ...obj };
  copy.scores = obj.scores + 1000;

  return copy;
};
console.log(detNameS(students, abs));

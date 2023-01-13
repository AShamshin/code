const bloggers = [
  { name: 'Alex', age: 20 },
  { name: 'Petter', age: 22 },
  { name: 'Hanna', age: 25 },
];

const myBestMap = (arr, cllBack) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = cllBack(element);
    newArr.push(result);
  }
  return newArr;
};
const result = myBestMap(bloggers, (element) => {
  return element.age * 2;
});

console.log(result);

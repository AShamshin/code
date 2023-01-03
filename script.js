function betterThanAverage(classPoints, yourPoints) {
  let a = 0;
  classPoints.push(yourPoints);

  for (let i = 0; i < classPoints.length; i++) {
    a += classPoints[i];
  }
  if (a / classPoints.length < yourPoints) {
    return true;
  }
  return false;
}
console.log(betterThanAverage([4, 7, 5, 3], 5));

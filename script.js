const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let a = mpg * fuelLeft >= distanceToPump ? true : false;

  return alert(a);
};
zeroFuel(50, 25, 2);

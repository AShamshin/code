function bmi(weight, height) {
  let c = weight / (height * height);

  if (c <= 18.5) {
    return 'Underweight';
  } else if (c <= 25.0) {
    return 'Normal';
  } else if (c <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

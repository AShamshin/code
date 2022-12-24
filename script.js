const quarterOf = (month) => {
  let a = 0;
  switch (month) {
    case 1:
    case 2:
    case 3:
      a = 1;
      break;
    case 4:
    case 5:
    case 6:
      a = 2;
      break;
    case 7:
    case 8:
    case 9:
      a = 3;
      break;
    case 10:
    case 11:
    case 12:
      a = 4;
      break;
    default:
      alert('Нет таких значений');
  }

  return a;
};

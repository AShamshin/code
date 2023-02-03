function mango(quantity, price) {
  a = Math.floor(quantity / 3);
  return price * (quantity - a);
}
console.log(mango(9, 5));

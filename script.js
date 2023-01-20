let count = 0;

function cc(card) {
  if (card <= 6) count++;
  else if (card >= '10') count--;
  return count + (count > 0 ? ' Bet' : ' Hold');
}
console.log(cc('10'));

function enough(cap, on, wait) {
  if (on + wait - cap <= 0) {
    return 0;
  } else {
    return on + wait - cap;
  }
}
console.log(enough(100, 60, 50));

function DNAtoRNA(dna) {
  return dna
    .split('')
    .map((d) => (d === 'T' ? (d = 'U') : d))
    .join('');
}
console.log(DNAtoRNA('TTTT'));

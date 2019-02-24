const DNA_RNA_MAPPING = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const VALID_NUCLEOTIDES = Object.keys(DNA_RNA_MAPPING);

function dnaToRna(nucleotide) {
  if (VALID_NUCLEOTIDES.includes(nucleotide)) {
    // if nucleotide is valid, add respective RNA nucleotide to result
    return DNA_RNA_MAPPING[nucleotide];
  }

  // if nucleotide is invalid, throw Error
  throw new Error('Invalid input DNA.');
}

function toRna(dna) {
  const rna = dna
    .split('')
    .map(dnaToRna)
    .join('');

  return rna;
}

module.exports = {
  toRna,
};

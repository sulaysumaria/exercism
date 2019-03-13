const NUCLEOTIDES = ['A', 'C', 'G', 'T'];

class NucleotideCounts {
  static parse(dna) {
    const result = [];

    if (dna.match(/[^ACGT]/gi)) {
      throw new Error('Invalid nucleotide in strand');
    }

    NUCLEOTIDES.forEach((nuc) => {
      const matches = dna.match(new RegExp(nuc, 'gi')) || [];
      result.push(matches.length);
    });

    return result.join(' ');
  }
}

module.exports = {
  NucleotideCounts,
};

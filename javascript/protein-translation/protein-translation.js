function getProteinFromCodon(codon) {
  switch (codon) {
    case 'AUG':
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine';
    case 'UAU':
    case 'UAC':
      return 'Tyrosine';
    case 'UGU':
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return false;
    default:
      throw new Error('Invalid codon');
  }
}

function translate(rna) {
  if (!rna) {
    return [];
  }

  // convert rna to array.
  const rnaArray = rna.split('');

  const proteinArr = [];

  // loop until all rna codons are parsed.
  while (rnaArray.length) {
    // extract first codon from rna array.
    const codon = rnaArray.splice(0, 3).join('');

    // find respective protein.
    const protein = getProteinFromCodon(codon);

    // if protein returned is false, return the array.
    if (!protein) {
      return proteinArr;
    }

    // push protein recieved to array.
    proteinArr.push(protein);
  }

  return proteinArr;
}

module.exports = {
  translate,
};

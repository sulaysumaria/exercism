function compute(dnaOne, dnaTwo) {
  // if two DNA are not equal, throw error.
  if (dnaOne.length !== dnaTwo.length) {
    throw new Error('left and right strands must be of equal length');
  }

  let differences = 0;
  for (let i = 0; i < dnaOne.length; i += 1) {
    // if two values are not equal, increment differences by one.
    if (dnaOne[i] !== dnaTwo[i]) {
      differences += 1;
    }
  }

  return differences;
}

module.exports = {
  compute,
};

function transform(oldScores) {
  const newScores = {};

  // loop over scores
  Object.keys(oldScores)
    .map(score => parseInt(score, 10)) // convert string to numbers.
    .forEach((score) => {
      oldScores[score].forEach((char) => {
        // loop over each character for a score.

        // add score to new Scores object.
        newScores[char.toLowerCase()] = score;
      });
    });

  return newScores;
}

module.exports = {
  transform,
};

const ALLERGIES = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;

    this.allergies = [];

    if (!allergyScore) {
      return;
    }

    const allergiesBinary = allergyScore
      .toString(2)
      .split('')
      .reverse();

    ALLERGIES.forEach((allergy, index) => {
      if (allergiesBinary[index] === '1') {
        this.allergies.push(allergy);
      }
    });
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergy) {
    return this.allergies.includes(allergy);
  }
}

module.exports = {
  Allergies,
};

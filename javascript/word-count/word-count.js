class Words {
  count(str) {
    const words = str
      .trim() // trim white spaces
      .replace(/\n/gi, ' ') // replace new lines with blank space
      .replace(/\s+/gi, ' ') // replace multiple space with blank space
      .toLowerCase() // convert to lower case
      .split(' '); // split by space to get individual words

    // use Object.create to have no properties on Object.
    // for ex, `constructor`
    this.wordCount = Object.create(null);

    words.forEach((word) => {
      if (this.wordCount[word]) {
        // if word is counted before, increment by 1.
        this.wordCount[word.toString()] += 1;
      } else {
        // if word is not recognized, initialize it by 1.
        this.wordCount[word.toString()] = 1;
      }
    });

    return this.wordCount;
  }
}

module.exports = {
  Words,
};

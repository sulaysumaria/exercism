function isIsogram(str) {
  // extract all chars from string
  // if no chars are present, set to balnk string
  const chars = str.toLowerCase().match(/[a-zA-Z]/gi) || [];

  // find unique characters
  const uniqChars = [...new Set(chars)];

  // if all chars are unique, then there are no duplicate chars
  if (chars.length === uniqChars.length) {
    return true;
  }

  return false;
}

module.exports = {
  isIsogram,
};

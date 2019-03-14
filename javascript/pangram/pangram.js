/** RegEx for all alphabets */
const ALPHABETS_REGEX = /[a-zA-Z]/g;

/** Total number of alphabets */
const TOTAL_ALPHABET_CHARS = 26;

/**
 * Check if string is pangram
 * @param {String} str String to check
 *
 * @return {Boolean}
 */
function isPangram(str) {
  // convert string to lower case
  const lowerCased = str.toLowerCase();

  // Find all characters from string
  const allChars = lowerCased.match(ALPHABETS_REGEX);

  // create new array to save all the unique characters
  const allUniqChars = new Set(allChars);

  // if length of total uniq chars is same as that of total number of alphabets,
  // it means all chars are present at least once
  // Thus, input string is pangram
  return allUniqChars.size === TOTAL_ALPHABET_CHARS;
}

module.exports = {
  isPangram,
};

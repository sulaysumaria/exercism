function isNumber(char) {
  // check if char is number or not
  return /[0-9]/gi.test(char);
}

function convertToArrayAndSpliceFirst(str) {
  // convert string to array and extract first element from it
  const strArray = Array.from(str);
  const curChar = strArray.splice(0, 1)[0] || '';
  return { strArray, curChar };
}

function encode(str) {
  const converted = convertToArrayAndSpliceFirst(str);
  const { strArray } = converted;
  let { curChar } = converted;

  // initialize count by 1 and result by blank string
  let curCharCount = 1;
  let result = '';

  // loop over each character in array of string
  strArray.forEach((char) => {
    if (curChar !== char) {
      // if char is not same as previous char, than add the count and char to result
      // also if count is 1, add blank string as count
      result += (curCharCount === 1 ? '' : curCharCount) + curChar;

      // reset the curChar and count
      curChar = char;
      curCharCount = 1;
    } else {
      // increment count by 1
      curCharCount += 1;
    }
  });

  // add last char;s count and char itself to result
  result += (curCharCount === 1 ? '' : curCharCount) + curChar;

  return result;
}

function decode(str) {
  const converted = convertToArrayAndSpliceFirst(str);
  const { strArray } = converted;
  let { curChar } = converted;

  // if first char is not number, than add that char to result
  let result = isNumber(curChar) ? '' : curChar;

  // loop over each character in array of string
  strArray.forEach((char) => {
    if (isNumber(char)) {
      // if char is a number, check if current char is a number
      // if both are number, than concat the string as it can be a number
      // with more than one digit
      // if not, than reset the current char with the new one
      curChar = isNumber(curChar) ? curChar + char : char;
    } else {
      // if char is not a number, multiply the number by the char and add to result
      // also handling count '1' as it is not present in encoded string
      const number = isNumber(curChar) ? parseInt(curChar, 10) : 1;
      result += char.repeat(number);

      // reset the current char
      curChar = char;
    }
  });

  return result;
}

module.exports = {
  encode,
  decode,
};

function validate(input) {
  // convert number to string array with individual digit.
  const inputStr = input.toString().split('');

  // get length of initial input.
  const inputLength = inputStr.length;

  // initialize sum to zero.
  let sum = 0;
  for (let i = 0; i < inputLength; i += 1) {
    // add (digit to the power of length) to sum.
    sum += parseInt(inputStr[i], 10) ** inputLength;

    if (sum > input) {
      return false;
    }
  }

  if (sum === input) {
    return true;
  }

  return false;
}

module.exports = {
  validate,
};

function steps(num) {
  let stepCount = 0;
  let value = num;

  // if value is 1, return 0.
  if (value === 1) {
    return 0;
  }

  // if value is not a positive number, throw error.
  if (value <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  do {
    if (value % 2 === 0) {
      // if value is even, divide by two.
      value /= 2;
    } else {
      // if value is odd, multiply it by 3 and add 1.
      value = 3 * value + 1;
    }

    // increase step count.
    stepCount += 1;
  } while (value !== 1); // continue until value is 1.

  return stepCount;
}

module.exports = {
  steps,
};

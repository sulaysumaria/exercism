function classify(num) {
  if (num <= 0) {
    // if number is not positive, throw error
    throw new Error('Classification is only possible for natural numbers.');
  }

  // find square root of numerber
  // if not perfect, get ceil valiue
  const sqrt = Math.ceil(Math.sqrt(num));
  let factors = [];

  // find factors of number
  for (let i = 1; i < sqrt; i += 1) {
    const divisor = num / i;
    if (divisor === Math.floor(divisor)) {
      factors.push(i, divisor);
    }
  }

  // if there are no factors, return appropriate value
  if (!factors.length) {
    return 'deficient';
  }

  // remove duplicate factors (if any)
  factors = [...new Set(factors)];

  // sum of all factors, excluding the number itself
  const sumOfFactors = factors.reduce((a, b) => a + b) - num;

  let type = '';

  // classify the type of number
  if (sumOfFactors === num) {
    type = 'perfect';
  } else if (sumOfFactors < num) {
    type = 'deficient';
  } else {
    type = 'abundant';
  }

  return type;
}

module.exports = {
  classify,
};

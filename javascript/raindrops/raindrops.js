function convert(num) {
  let result = '';

  // if 3 is a factor, add Pling.
  if (num % 3 === 0) {
    result = 'Pling';
  }

  // if 5 is a factor, add Plang.
  if (num % 5 === 0) {
    result += 'Plang';
  }

  // if 7 is a factor, add Plong.
  if (num % 7 === 0) {
    result += 'Plong';
  }

  // if none of above are a factor, add number itself.
  if (result === '') {
    result = num.toString();
  }

  return result;
}

module.exports = {
  convert,
};

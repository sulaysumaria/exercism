function toRoman(num) {
  let origNum = num;
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let romanized = '';

  for (let i = 0; i < decimalValue.length; i += 1) {
    while (decimalValue[i] <= origNum) {
      romanized += romanNumeral[i];
      origNum -= decimalValue[i];
    }
  }

  return romanized;
}

module.exports = {
  toRoman,
};

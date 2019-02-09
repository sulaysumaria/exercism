function isDivisibleBy(year, number) {
  return year % number === 0;
}

export function isLeap(year) {
  let isLeapYear = false;

  if (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) {
    isLeapYear = true;
  }

  if (isDivisibleBy(year, 400)) {
    isLeapYear = true;
  }

  return isLeapYear;
}

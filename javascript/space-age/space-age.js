/** Number of seconds per year on earth. */
const SECONDS_PER_YEAR_ON_EARTH = 31557600;

/** Earth Years for other planets. */
const EARTH_YEARS_MAPPING = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

/**
 * Truncate decimal places from a number.
 * @param {Number} num Number from which to truncate decimal places.
 * @param {Number} decimalPlaces Number of decimal places to keep.
 *
 * @return {Number} Result.
 */
function truncateDecimalPlaces(num, decimalPlaces) {
  return parseFloat(num.toFixed(decimalPlaces));
}

/**
 * Perform division and truncate result to decimal places if provided.
 * @param {Number} dividend Dividend
 * @param {Number} divisor Divisor
 * @param {Number} upToDecimal (optional) No of decimal places to keep in output.
 *
 * @return {Number} Result.
 */
function divide(dividend, divisor, upToDecimal) {
  const quotient = dividend / divisor;

  if (upToDecimal) {
    return truncateDecimalPlaces(quotient, upToDecimal);
  }

  return parseFloat(quotient);
}

/**
 * Calculate earth years for the planet given and number of seconds passed.
 * @param {String} planet Name of planet.
 * @param {Number} seconds Number of seconds.
 *
 * @return {Number} Number of earth years.
 */
function age(planet, seconds) {
  // divide seconds by seconds on earth to get earth years first.
  const earthYears = divide(seconds, SECONDS_PER_YEAR_ON_EARTH);

  if (planet === 'earth') {
    // if result is required for earth, convert answer to two decimal and return.
    return truncateDecimalPlaces(earthYears, 2);
  }

  // if result is required for other planets, divide by the respective number and return answer.
  return divide(earthYears, EARTH_YEARS_MAPPING[planet], 2);
}

module.exports = {
  age,
};

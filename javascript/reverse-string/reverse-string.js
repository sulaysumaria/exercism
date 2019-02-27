function reverseString(str) {
  return str
    .split('') // convert string to array
    .reverse() // reverse the array
    .join(''); // convert array back to string
}

module.exports = {
  reverseString,
};

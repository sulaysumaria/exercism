class Squares {
  constructor(num) {
    this.sumOfSquares = 0;

    // sum of all numbers from 1 to num
    const sum = (num * (num + 1)) / 2;

    // add squares of all numbers from 1 to num
    for (let i = 1; i <= num; i += 1) {
      this.sumOfSquares += i * i;
    }

    // square of sum
    this.squareOfSum = sum * sum;

    // difference
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}

module.exports = {
  Squares,
};

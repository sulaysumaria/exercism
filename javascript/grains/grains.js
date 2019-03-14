import BigInt from './lib/big-integer';

class Grains {
  constructor() {
    this.baseNum = BigInt(2);
    this.totalGrains = BigInt(0);

    for (let i = 0; i < 64; i += 1) {
      this.totalGrains = this.totalGrains.add(this.baseNum.pow(i));
    }
  }

  square(n) {
    return this.baseNum.pow(n - 1).toString();
  }

  total() {
    return this.totalGrains.toString();
  }
}

module.exports = {
  Grains,
};

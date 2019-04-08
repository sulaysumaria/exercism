class PhoneNumber {
  constructor(number) {
    let temp = number.replace(/[^0-9]/g, '').toString();

    if (temp.startsWith('1')) {
      temp = temp.slice(1);
    }

    if (temp.length !== 10 || ['0', '1'].includes(temp[0]) || ['0', '1'].includes(temp[3])) {
      temp = null;
    }

    this.num = temp;
  }

  number() {
    return this.num;
  }
}

module.exports = {
  PhoneNumber,
};

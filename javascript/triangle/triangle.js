class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
  }

  kind() {
    const uniqSides = [...new Set(this.sides)];

    // if any one side is zero, trianlge is illegal.
    if (uniqSides.includes(0)) {
      throw new Error('Illegal Triangle');
    }

    // if any of the side is less than zero, triangle is illegal.
    uniqSides.forEach((side) => {
      if (side < 0) {
        throw new Error('Illegal Triangle');
      }
    });

    // sum of two sides must be greater than third side.
    // if it is lesser, triangle is illegal.
    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      throw new Error('Illegal Triangle');
    }

    switch (uniqSides.length) {
      case 1:
        // if there is only one unique side.
        this.triangleKind = 'equilateral';
        break;
      case 2:
        // if there are two unique sides.
        this.triangleKind = 'isosceles';
        break;
      case 3:
        // if there are three unique sides.
        this.triangleKind = 'scalene';
        break;
      default:
        throw new Error('Illegal Triangle');
    }

    return this.triangleKind;
  }
}

module.exports = {
  Triangle,
};

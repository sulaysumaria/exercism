class Matrix {
  constructor(str) {
    const temp = str.split('\n');

    this.rows = [];

    // gather rows array
    temp.forEach((row) => {
      const rowElements = row.split(' ').map(a => parseInt(a, 10));
      this.rows.push(rowElements);
    });

    // gather columns array by transposing rows
    this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i]));
  }
}

module.exports = {
  Matrix,
};

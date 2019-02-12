function isValidPoint(x, y) {
  return typeof x === 'number' && typeof y === 'number';
}

function isPointWithinRadius(x, y, radius) {
  return x <= radius && x >= -radius && y <= radius && y >= -radius;
}

function solve(x, y) {
  let score = null;

  if (!isValidPoint(x, y)) {
    // not valid co ordinates
    score = null;
  } else if (isPointWithinRadius(x, y, 1)) {
    // inner circle
    score = 10;
  } else if (isPointWithinRadius(x, y, 5)) {
    // middle circle
    score = 5;
  } else if (isPointWithinRadius(x, y, 10)) {
    // outer circle
    score = 1;
  } else {
    // outside the board
    score = 0;
  }

  return score;
}

module.exports = {
  solve,
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var m = matrix.length;
  var n = (matrix[0] || []).length;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        left(i, j, m, n, matrix);
        right(i, j, m, n, matrix);
        up(i, j, m, n, matrix);
        down(i, j, m, n, matrix);
      } else if (matrix[i][j] === '#') {
        matrix[i][j] = 0;
      }
    }
  }
};

var left = function (i, j, m, n, matrix) {
  for (var k = j - 1; k >= 0; k--) {
    matrix[i][k] = 0;
  }
};

var right = function (i, j, m, n, matrix) {
  for (var k = j + 1; k < n; k++) {
    matrix[i][k] = matrix[i][k] === 0 ? 0 : '#';
  }
};

var up = function (i, j, m, n, matrix) {
  for (var k = i - 1; k >= 0; k--) {
    matrix[k][j] = 0;
  }
};

var down = function (i, j, m, n, matrix) {
  for (var k = i + 1; k < m; k++) {
    matrix[k][j] = matrix[k][j] === 0 ? 0 : '#';
  }
};
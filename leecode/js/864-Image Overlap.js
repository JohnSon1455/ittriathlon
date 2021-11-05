/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  var len = A.length;
  var res = 0;
  var tmp = 0;
  for (var i = 1 - len; i < len; i++) {
    for (var j = 1 - len; j < len; j++) {
      tmp = 0;
      for (var k = 0; k < len; k++) {
        for (var m = 0; m < len; m++) {
          if (B[k][m] === 1 && A[k + i] && A[k + i][m + j] === 1) tmp++;
        }
      }
      res = Math.max(res, tmp);
    }
  }
  return res;
};
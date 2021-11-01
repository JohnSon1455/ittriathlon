/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  var count = 0;
  var n = M.length;
  var map = Array(n);
  
  for (var i = 0; i < n; i++) {
    if (!map[i]) {
      find(map, i, M);
      count++;
    }
  }
  
  return count;
};

var find = function (map, i, M) {
  for (var j = 0; j < M.length; j++) {
    if (i !== j && M[i][j] === 1 && !map[j]) {
      map[j] = 1;
      find(map, j, M);
    }
  }
};
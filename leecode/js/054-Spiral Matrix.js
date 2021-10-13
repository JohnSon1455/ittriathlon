var spiralOrder = function(matrix) {
  if (matrix === null) return null
  let res = [];
  let l = 0;
  let t = 0;
  let r = matrix[0].length - 1;
  let b = matrix.length - 1;
  const total = (r + 1) * (b + 1);
  let d = 0;
  let x = 0;
  let y = 0;
  while (res.length < total - 1) {
      // right
      if (d === 0) {
          while (x < r) res.push(matrix[y][x++]);
          t++; // reach end, turn 90 degree, move down
      // down 
      } else if (d === 1) {
          while (y < b) res.push(matrix[y++][x]);
          r--; // reach end, turn 90 degree, move left
      // left
      } else if (d === 2) {
          while (x > l) res.push(matrix[y][x--]);
          b--; // reach end, turn 90 degree, move up
      // up
      } else if (d === 3) {
          while (y > t) res.push(matrix[y--][x]);
          l++; // reach end, turn 90 degree, move up right
      }
      d = (d + 1) % 4;
  }
  // last move to the center if exist
  if (res.length !== total) 
      res.push(matrix[y][x]);
  
  return res;
};
var searchMatrix = function(matrix, target) {
  return dfs(matrix, target, 0, 0);
};

function dfs(matrix, target, x, y) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  
  // exit recursion condition, reach to the end;
  if (y === rows) return false;
  
  // traverse from left to right, then next row
  let nextX = (x + 1) % cols;
  let nextY = nextX === 0 ? y + 1 : y;

  // found return true or not found, DFS next element
  if (matrix[y][x] === target) 
      return true;
  else
      return dfs(matrix, target, nextX, nextY);

  return false;
}
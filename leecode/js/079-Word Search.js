var exist = function(board, word) {
  for (let x = 0; x < board[0].length; x++)
      for (let y = 0; y < board.length; y++)
          if (dfs(board, word, 0, x, y)) return true;
  return false;
};

function dfs(board, word, i, x, y) {
  // exit recursion:
  if (x < 0 || y < 0 || x >= board[0].length || y >= board.length || word[i] !== board[y][x])
      return false;
  // found the last letter
  if (i === word.length - 1)
      return true;
  
  let cur = board[y][x];
  // mark it 0 means already visit
  board[y][x] = 0;
  let found = dfs(board, word, i + 1, x + 1, y) || 
              dfs(board, word, i + 1, x - 1, y) ||
              dfs(board, word, i + 1, x, y + 1) ||
              dfs(board, word, i + 1, x, y - 1);
  // recover
  board[y][x] = cur;
  return found;
}
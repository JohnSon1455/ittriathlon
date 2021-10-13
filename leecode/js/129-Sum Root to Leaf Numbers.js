var sumNumbers = function(root) {
  if (root === null) return;
  let res = [];
  let cur = [];
  dfs(root, res, cur);
  let sum = 0;
  for (let num of res) {
      sum += num;
  }
  return sum;
};

function dfs(root, res, cur) {
  // exit recursion:
  if (root === null) return;
  // found leaf, save the number
  if (root.left === null && root.right === null) {
      cur.push(root.val);
      res.push(parseInt(cur.join('')));
      cur.pop();
      return;
  }
  
  // possible solution
  if (root !== null) {
      cur.push(root.val);
      dfs(root.left, res, cur);
      dfs(root.right, res, cur);
      cur.pop();
  }
  return;
}
var pathSum = function(root, sum) {
  var res = [];
  helper(root, sum, [], res);
  return res;
};

var helper = function (root, sum, now, res) {
  if (!root) return;
  
  now.push(root.val);
  
  if (root.val === sum && !root.left && !root.right) res.push(now);
  
  helper(root.left, sum - root.val, Array.from(now), res);
  helper(root.right, sum - root.val, Array.from(now), res);
};
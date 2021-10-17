var levelOrder = function(root) {
  if (!root) return [];
  return helper([[root]], 0);
};

var helper = function (res, level) {
  var now = res[level];
  var next = [];
  
  for (var i = 0; i < now.length; i++) {
    if (now[i].left) next.push(now[i].left);
    if (now[i].right) next.push(now[i].right);
    now[i] = now[i].val;
  }
  
  if (next.length) {
    res.push(next);
    helper(res, level + 1);
  }
  
  return res;
};
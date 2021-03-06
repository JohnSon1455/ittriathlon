/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  var queue = [{ node: root, level: 0 }];
  var result = [];
  var now = null;
  while (now = queue.shift()) {
    if (!now.node) continue;
    result[now.level] = now.node.val;
    queue.push({ node: now.node.left, level: now.level + 1 });
    queue.push({ node: now.node.right, level: now.level + 1 });
  }
  return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  var head = new TreeNode(0);
  head.left = root;
  helper(head, v, d, 1);
  return head.left;
};

var helper = function (root, v, d, depth) {
  if (!root) return;
  if (depth === d) {
    insert(root, v, 'left');
    insert(root, v, 'right');
  } else {
    helper(root.left, v, d, depth + 1);
    helper(root.right, v, d, depth + 1);
  }
};

var insert = function (root, val, type) {
  var node = new TreeNode(val);
  node[type] = root[type];
  root[type] = node;
};
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  var stack = [];
  var tmp = null;
  var node = null;
  var next = null;
  var level = 0;
  
  if (root) stack.push([root, 0]);
  
  while (stack.length) {
    tmp = stack.shift();
    node = tmp[0];
    level = tmp[1];
    
    next = stack[0] && stack[0][1] === level ? stack[0][0] : null;
    
    node.next = next;
    
    if (node.left) stack.push([node.left, level + 1]);
    if (node.right) stack.push([node.right, level + 1]);
  }
}
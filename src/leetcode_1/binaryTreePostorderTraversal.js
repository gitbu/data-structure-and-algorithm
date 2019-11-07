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
var postorderTraversal = function(root) {
  if (!root) {
      return [];
  }
  const leftValue = root.left ? postorderTraversal(root.left) : [];
  const rightValue = root.right ? postorderTraversal(root.right) : [];
  
  return rightValue.concat(leftValue).concat([root.val]);    
};
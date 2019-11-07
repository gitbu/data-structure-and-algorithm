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
var inorderTraversal = function(root) {
  console.log(root)
  if (!root) {
      return [];
  }
  const leftValue = root.left ? inorderTraversal(root.left) : [];
  const rightValue = root.right ? inorderTraversal(root.right) : [];
  
  return leftValue.concat([root.val]).concat(rightValue);    
};
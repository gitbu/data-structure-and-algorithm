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
var preorderTraversal = function(root) {
  if (!root) {
     return [];
 }
 const leftValue = root.left ? preorderTraversal(root.left) : [];
 const rightValue = root.right ? preorderTraversal(root.right) : [];
 
 return [root.val].concat(leftValue).concat(rightValue);    
};
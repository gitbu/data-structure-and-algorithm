/**
* // Definition for a Node.
* function Node(val,children) {
*    this.val = val;
*    this.children = children;
* };
*/
/**
* @desc 这个是运用了广度优先算法
* @param {Node} root
* @return {number}
*/
var maxDepth = function(root) {
  // 树的最大深度
  let depth = 0;
  // 存储每层元素的队列，第一个元素是节点，第二个元素是当前节点的深度
  const queue = [[root, 1]];
  
  while(queue.length > 0) {
      const current = queue.pop();
      const root = current[0];
      // 如果当前节点没有的话直接返回树的最大深度
      if (!root) return depth;
      // 当前节点的深度
      const current_depth = current[1];
      // 当前节点的儿子节点
      const children = root.children || [];
      const childrenLen = children.length;
      // 当前节点和树的最大深度中取一个最大作为树的最大深度
      depth = Math.max(depth, current_depth);
      // 把当前节点的儿子节点放到队列中
      for(let i = 0; i < childrenLen; i++) {       
         queue.push([children[i], current_depth + 1])
      }
  }

  return depth;
};
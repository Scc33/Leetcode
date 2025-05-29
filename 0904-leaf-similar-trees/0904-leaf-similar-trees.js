/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var dfs = function(root) {
    let stack = [root];
    let leaves = [];
    while (stack.length !== 0) {
        let node = stack.pop();
        if (node.left === null && node.right === null) {
            leaves.push(node.val);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return leaves;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = dfs(root1);
    const leaves2 = dfs(root2);
    console.log(leaves1, leaves2)
    return JSON.stringify(leaves1) === JSON.stringify(leaves2)
};
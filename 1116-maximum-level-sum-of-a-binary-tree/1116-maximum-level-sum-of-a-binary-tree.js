/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let max = -Infinity;
    let maxLevel = 0;
    let level = 0;
    let queue = [root];

    while(queue.length) {
        let temp = [];
        let sum = 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            sum += node.val;
            if (node.left) {
                temp.push(node.left);
            }
            if (node.right) {
                temp.push(node.right)
            }
        }
        queue = temp;
        level++;
        if (sum > max) {
            max = sum;
            maxLevel = level;
        }
    }
    
    return maxLevel;
};
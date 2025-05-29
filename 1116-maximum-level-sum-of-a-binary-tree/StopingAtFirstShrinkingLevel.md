/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 
 We would stop too early because we don't search all the way done... what if a giant number comes in a leaf node

function maxLevelSum(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let queue = [root];
    let maxX = 0;
    let x = 0; // should be a smaller value
    let level = 0;
    while (queue.length !== 0) {
        let levelSize = queue.length;
        while (levelSize !== 0) {
            levelSize--;
            const node = queue.shift();
            x += node.val;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        if (x > maxX) {
            level++;
        } else {
            return level;
        }
    }
    return level;
};

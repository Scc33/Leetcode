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

function maxLevelSum(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let queue = [root];
    let levelValues = [];
    while (queue.length !== 0) {
        let x = 0;
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
        levelValues.push(x)
    }
    let maxI = 0;
    let maxLevelValue = -100000000000;
    let runningLevelValue = 0;
    for (let i = 0; i < levelValues.length; i++) {
        if (runningLevelValue + levelValues[i] > maxLevelValue) {
            maxLevelValue = runningLevelValue + levelValues[i];
            maxI = i;
        }
    }
    return maxI+1;
};
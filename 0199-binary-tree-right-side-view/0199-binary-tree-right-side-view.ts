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

function rightSideView(root: TreeNode | null): number[] {
    const rightNodes = [];
    if (root === null) {
        return rightNodes;
    }
    let queue = [{node: root, depth: 0}];
    let currentLevel = 0;
    while (queue.length !== 0) {
        const node = queue.shift();
        if (queue.length === 0 || queue[0].depth > currentLevel) {
            currentLevel += 1;
            rightNodes.push(node.node.val)
        }
        if (node.node.left !== null) {
            queue.push({node: node.node.left, depth: node.depth + 1});
        }
        if (node.node.right !== null) {
            queue.push({node: node.node.right, depth: node.depth + 1});
        }
    }
    return rightNodes;
};
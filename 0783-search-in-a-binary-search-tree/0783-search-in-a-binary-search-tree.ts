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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.val === val) {
            return node;
        }
        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }
    return null;
};
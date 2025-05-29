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

function dfs(root: TreeNode | null): number[] {
    let stack = [root];
    let leaves: number[] = [];
    while (stack.length !== 0) {
        let node = stack.pop();
        if (node.left === null && node.right === null) {
            leaves.push(node.val)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
        if (node.right !== null) {
            stack.push(node.right)
        }
    }
    return leaves;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1 = dfs(root1);
    const leaves2 = dfs(root2)
    console.log(leaves1, leaves2)
    return leaves1.length === leaves2.length && leaves1.every((value, index) => value === leaves2[index]);
};
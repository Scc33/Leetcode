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

function dfs(root: TreeNode): number[] {
    let stack = [{ node: root, maxValue: root.val }];
    let goodNodes = [];
    while (stack.length !== 0) {
        const stackValue = stack.pop();
        goodNodes.push(stackValue.node.val >= stackValue.maxValue)
        if (stackValue.node.left !== null) {
            stack.push({ node: stackValue.node.left, maxValue: Math.max(stackValue.node.val, stackValue.maxValue) });
        }
        if (stackValue.node.right !== null) {
            stack.push({ node: stackValue.node.right, maxValue: Math.max(stackValue.node.val, stackValue.maxValue) });
        }
    }
    return goodNodes;
}

function goodNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const goodNodes = dfs(root);
    return goodNodes.filter(Boolean).length
};
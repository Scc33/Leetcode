If not having to keep track

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
    if (root === null) {
        return [];
    }
    const rightNodes = [root.val];
    let rightMostNode = root.right;
    let otherViewableNode = root.left;
    while (rightMostNode || otherViewableNode) {
        console.log(rightMostNode, otherViewableNode)
        if (rightMostNode) {
            rightNodes.push(rightMostNode.val);
            if (rightMostNode.right) {
                rightMostNode = rightMostNode.right;
            } else {
                rightMostNode = rightMostNode.left;
            }
        } else {
            rightNodes.push(otherViewableNode.val);
        }
        if (otherViewableNode) {
            otherViewableNode = otherViewableNode.right || otherViewableNode.left;
        }
    }
    return rightNodes;
};

...fundamentally not the right approach because it should be bfs

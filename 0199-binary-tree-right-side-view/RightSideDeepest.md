If the right side was guarented to be the deepest

function rightSideView(root: TreeNode | null): number[] {
    const rightNodes = [];
    let node = root;
    while (node) {
        rightNodes.push(node.val);
        node = node.right;
    }
    return rightNodes;
};

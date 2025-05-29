If it was bfs... (but that doesn't work for this type of problem)

function bfs(root: TreeNode | null): number[] {
    let queue = [root];
    let leaves: number[] = [];
    while (queue.length !== 0) {
        let node = queue.shift();
        if (node.left === null && node.right === null) {
            leaves.push(node.val)
        }
        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return leaves;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1 = bfs(root1);
    const leaves2 = bfs(root2)
    console.log(leaves1, leaves2)
    return leaves1.length === leaves2.length && leaves1.every((value, index) => value === leaves2[index]);
};

Failed approach because the recursive step is off

> ## Definition for a binary tree node.
> ## class TreeNode:
> ##     def __init__(self, val=0, left=None, right=None):
> ##         self.val = val
> ##         self.left = left
> ##         self.right = right

class Solution:
    def zigZag(self, root: Optional[TreeNode], direction):
        if not root:
            return 0
        left, leftZag, right, rightZag = 0, 0, 0, 0 
        if direction == "left" and root.right:
            leftZag = 1 + self.zigZag(root.right, "right")
        if root.right:
            left = self.zigZag(root.right, "right")
        if direction == "right" and root.left:
            rightZag = 1 + self.zigZag(root.left, "left")
        if root.left:
            right = self.zigZag(root.left, "left")
        return max(left, right, leftZag, rightZag)
    
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        return max(self.zigZag(root.left, "left"), self.zigZag(root.right, "right"))

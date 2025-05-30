# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.maxLength = 0
        def solve(node, depth, dir):
            self.maxLength = max(self.maxLength, depth)
            if node.left is not None:
                solve(node.left, depth+1, 'left') if dir != 'left' else solve(node.left, 1, 'left')
            if node.right is not None:
                solve(node.right, depth+1, 'right') if dir != 'right' else solve(node.right, 1, 'right')
        solve(root, 0, '')
        return self.maxLength
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = head
        quick = head
        stack = []
        while quick and quick.next:
            stack.append(slow.val)
            slow = slow.next
            quick = quick.next.next
        maxTwinSum = 0
        while slow:
            twinVal = stack.pop()
            maxTwinSum = max(twinVal + slow.val, maxTwinSum)
            slow = slow.next
        return maxTwinSum

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next == None:
            return None
        prev = None
        slow = head
        quick = head
        while quick and quick.next:
            prev = slow
            slow = slow.next
            quick = quick.next.next
        prev.next = slow.next
        return head
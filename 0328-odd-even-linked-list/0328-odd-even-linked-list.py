# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return None
        node = head
        evens = head.next
        lastOdd, idx = head, 0
        while node.next:
            next = node.next
            node.next = node.next.next
            node = next
            if idx % 2 == 1:
                lastOdd = node
            idx += 1
        print(node)
        print(evens)
        lastOdd.next = evens
        return head

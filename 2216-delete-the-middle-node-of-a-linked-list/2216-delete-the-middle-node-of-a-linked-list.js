/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let prev = null;
    let slow = head;
    let quick = head;
    while (quick && quick.next !== null) {
        prev = slow
        slow = slow.next;
        quick = quick.next.next
    }
    if (prev) {
        prev.next = slow.next;
        return head;   
    } else {
        return null;
    }
};
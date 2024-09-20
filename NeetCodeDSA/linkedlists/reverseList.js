function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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
var reverseList = function (head) {
  if (!head) {
    return null;
  }

  let newHead = head;
  let tail = head.next;

  head.next = null;

  let tmp = null;

  while (tail !== null) {
    tmp = tail.next;

    tail.next = newHead;

    newHead = tail;

    tail = tmp;
  }

  return newHead;
};

var printList = function (head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.val);

    curr = curr.next;
  }
};

const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

printList(node1);

const newHead = reverseList(node1);

console.log("---------------------------------");
printList(newHead);

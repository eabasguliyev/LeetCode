function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var printList = function (head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.val);

    curr = curr.next;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let newHead;

  if (list1.val > list2.val) {
    newHead = new ListNode(list2.val);
    list2 = list2.next;
  } else {
    newHead = new ListNode(list1.val);
    list1 = list1.next;
  }

  let tail = newHead;

  while (list1 || list2) {
    if (!list1 || (list2 && list1.val > list2.val)) {
      tail.next = new ListNode(list2.val);
      list2 = list2.next;
      tail = tail.next;
    } else {
      tail.next = new ListNode(list1.val);
      list1 = list1.next;
      tail = tail.next;
    }
  }

  return newHead;
};

const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(5);

node1.next = node2;
node2.next = node3;

const node21 = new ListNode(2);
const node22 = new ListNode(3);
const node23 = new ListNode(7);

node21.next = node22;
node22.next = node23;

const newHead = mergeTwoLists(node1, node21);

// printList(newHead)

printList(node1);
console.log("--------------------------");
printList(node21);
console.log("--------------------------");
printList(newHead);

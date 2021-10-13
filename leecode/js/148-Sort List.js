var sortList = function(head) {
  // empty or one node
  if (head === null || head.next === null) 
      return head;
  let mid = getMid(head);
  let left = sortList(head);
  let right = sortList(mid);
  return merge(left, right);
};

function merge(list1, list2) {
  let newHead = new ListNode();
  let tail = new ListNode();
  tail = newHead;
  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          tail.next = list1;
          list1 = list1.next;
          tail = tail.next; 
      } else {
          tail.next = list2;
          list2 = list2.next;
          tail = tail.next; 
      }   
  }
  tail.next = (list1 !== null) ? list1 : list2;
  return newHead.next;
};

function getMid(head) {
  let slow = head;
  let fast = head;
  let midHead = null;
  while (fast !== null && fast.next !== null) {
      midHead = slow;
      slow = slow.next
      fast = fast.next.next;
  }
  let secondHalf = midHead.next;
  // !!!Important here:
  // disconnect, split them into two lists
  midHead.next = null;
  return secondHalf;
}
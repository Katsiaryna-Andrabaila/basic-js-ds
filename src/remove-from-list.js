const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface*/
 /* class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }*/
 
function removeKFromList(list, k) {
let searchNode = null;
while (this.head && this.head.value === k) {
  searchNode = this.head;
  this.head = this.head.next;
}

let current = this.head;
if (current !== null) {
  while (current.next) {
    if (current.next.value === k) {
      searchNode = current.next;
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}

if (this.tail && this.tail.value === k) {
  this.tail = current;
}

return this;

  /*let indexK = list.indexOf(k);
  if (indexK === 0) {
    this.head = this.head.next;
    this.length--;
  }
  let current = this.head;
  let prev;
  let index = 0;

  while (index < k) {
    index++;
    prev = current;
    current = current.next;
  }

  const searchNode = current;
  prev.next = current.next;
  if (prev.next === null) {
    this.tail = prev;
  }
  this.length--;
  return this;*/
}

module.exports = {
  removeKFromList
};

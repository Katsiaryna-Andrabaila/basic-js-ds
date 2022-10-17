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
  let arr = [];
  let current = list;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      arr.splice(i, 1);
      i--;
    }
  }

  const createList = arr => arr.reduceRight((acc, n) => ({ value: n, next: acc }), null);

  let result = createList(arr);
  return result;
}

module.exports = {
  removeKFromList
};

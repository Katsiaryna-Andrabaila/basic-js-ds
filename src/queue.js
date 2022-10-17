const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q = []
  }
  getUnderlyingList() {
    const createList = arr => arr.reduceRight((acc, n) => ({ value: n, next: acc }), null);

    let result = createList(this.q);
    return result;
  }

  enqueue(value) {
    this.q.push(value);
    return this;
  }

  dequeue() {
    return this.q.shift();
  }
}

module.exports = {
  Queue
};

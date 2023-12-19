/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LinkedList: to handle common operations and reduce redundancy.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToBack(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFromFront() {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    const removed = this.head.val;
    this.head = this.head.next;
    this.size--;

    if (!this.head) {
      this.tail = null;
    }
    return removed;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.addToBack(val);
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty.');
    }
    const removed = this._list.removeFromFront();
    this.size--;

    return removed;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this._list.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;

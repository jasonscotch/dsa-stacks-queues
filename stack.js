/** Node: node for a stack. */

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

  addToFront(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.addToFront(val);
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error('Stack is empty.');
    }
    const removed = this._list.removeFromFront();
    this.size--;

    return removed;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this._list.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;

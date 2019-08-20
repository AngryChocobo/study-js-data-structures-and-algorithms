const Node = require('./node');

class DoublyNode extends Node {
  constructor(element, next, pre) {
    // super(element, next);
    super(element);
    this.next = next;
    this.pre = pre;
  }
}

module.exports = DoublyNode;

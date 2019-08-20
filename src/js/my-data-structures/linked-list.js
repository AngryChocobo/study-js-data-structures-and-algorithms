const { defaultEquals } = require('../utils');
const Node = require('./modules/node');

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    let current;
    const node = new Node(element);
    if (this.head) {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }

    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getNodeAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current !== undefined; i++) {
      if (this.equalsFn(current.element, element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  getNodeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current !== undefined; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  removeAt(index) {
    // 检查越界
    if (index >= 0 && index < this.size()) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  getHead() {
    return this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      str = `${str}, ${current.element}`;
      current = current.next;
    }
    return str;
  }
}

// 忽视的问题
// 1. 在循环时应该判断current是否不存在，可以直接写入退出条件

// const linkedList = new LinkedList();

// linkedList.push(1);
// linkedList.push(2);
// linkedList.push(3);
// console.log(linkedList.getNodeAt(1));
// linkedList.removeAt(0);
// linkedList.insert(4, 0);

module.exports = LinkedList;

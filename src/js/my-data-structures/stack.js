
class Stack {
  constructor() {
    this.count = 0;
    this.items = [];
  }
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}

module.exports = Stack;


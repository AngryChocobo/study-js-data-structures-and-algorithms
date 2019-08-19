class Deqeue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addFront(item) {
    if (this.isEmpty()) { // 1. 空列表时直接添加
      this.addBack(item);
    } else if (this.lowestCount > 0) { // 1. 首元素不为0时直接添加
      this.lowestCount--;
      this.items[this.lowestCount] = item;
    } else { // 1. 首元素为0，所有元素向后移动一位后，将元素插入到0的位置
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = item;
      this.lowestCount = 0;
      this.count++;
    }
  }

  addBack(item) {
    this.items[this.count] = item;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront() {
    return this.isEmpty() ? undefined : this.items[this.lowestCount];
  }

  peekBack() {
    return this.isEmpty() ? undefined : this.items[this.count--];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str}, ${this.items[i]}`;
    }
    console.log(str);
    return str;
  }
}

let deque = new Deqeue();
deque.addFront(0);
deque.addBack(1);
deque.addBack(2);
deque.addBack(3);
// deque.removeFront();
deque.addFront('emm');


module.exports = Deqeue;

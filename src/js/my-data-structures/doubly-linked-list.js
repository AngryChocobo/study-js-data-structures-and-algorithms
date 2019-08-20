const LinkedList = require('./linked-list');
const DoublyNode = require('./modules/doubly-node');
const { defaultEquals } = require('../utils');

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.size()) {
      let current = this.head;
      const node = new DoublyNode(element);

      if (index === 0) { // 开头插入
        if (this.head === undefined) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) { // 结尾插入
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else { // 中间插入
        const previous = this.getNodeAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        node.prev = previous;
        current.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
}

const doublyListedList = new DoublyLinkedList();
// doublyListedList.push('a');
// doublyListedList.push('b');
// doublyListedList.push('c');

// doublyListedList.remove('b');
doublyListedList.insert('b', 0);
doublyListedList.insert('d', 1);
doublyListedList.insert('0', 0);

// todo push函数有问题，不能正确初始化tail

console.log(doublyListedList);

module.exports = DoublyLinkedList;

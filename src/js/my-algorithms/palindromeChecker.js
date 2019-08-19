// 回文检查器
// 回文是正反都能读通的单词、数组、数或一系列字符的序列，如madam 或 racecar
// 🤔如何实现？ 队列是先进先出，栈是先进后出，这个用栈很好解决，但是若以双向队列来思考：
// 将字符序列的开头和结尾取出，判断一执行，执行到字符序列为空或者剩下一个字符，说明该字符序列“回文”
const Deque = require('../my-data-structures/deque');

function palindromeChecker(asString) {
    if (!asString) {
        return false;
    }
    let deque = new Deque();
    asString.split('').forEach(deque.addBack, deque);
    while (deque.size() > 1) {
        if (deque.removeFront() !== deque.removeBack()) {
            return false;
        }
    }
    return true;
}

console.log(palindromeChecker('madam'));
console.log(palindromeChecker('hello'));
console.log(palindromeChecker('racecar'));

// 这个比较简单。就不做大小写区分和空格处理了


const Stack = require('../my-data-structures/stack');

function baseConverter(decNumber, base) {
  const stack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  while (decNumber > 0) {
    stack.push(Math.floor(decNumber % base));
    decNumber = Math.floor(decNumber / base);
  }
  let result = '';
  while (!stack.isEmpty()) {
    result += digits[stack.pop()];
  }
  console.log(result);
  return result;
}

baseConverter(100345, 2);
baseConverter(100345, 8);
baseConverter(100345, 16);
baseConverter(100345, 35);

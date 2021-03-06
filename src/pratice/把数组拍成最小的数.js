// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个
// 例如输入数组{ 3，32，321 } 则打印出这三个数字能排成的最小数字为321323

/**
 * 思路：
 * 1. 排列组合，排出所有的可能，之后进行比较，找出最小的数，n个输入项，会有n的阶乘种排列组合结果
 * 2. 先进行一次遍历，找出每一项开头一个数字最小的，因为作为输出最小的一定是开头最小的数，该测试组数据中
 * 开头都为3，继续往下找，第二位中最小的是2，此时第一项只有1位，所以他一定是放到最后的数字，此时顺序为:
 * [32, 321, 3]。 继续往下找，第三位最小的是1，所以顺序为 [321, 32, 3]。
 * 需要写一种排序算法来解决这个题目
 * 1. 两个数比较，两个数开头，为a和b，如果a < b || (a== b && a.length < b.length) a和b交换位置
 * 2. 真笨，直接将a和b相连， if (ab < ba) 交换
 * 遇到的子问题：
 * 1. 如何求数字的最高位 ？
 *    1.通过将数字转换为字符串，然后slice(0, 1);
 * 2.
*/

function getMinCount(array) {
  function minSort(a, b) {
    return '' + a + b - '' + b + a;
  }
  array.sort(minSort);
  console.log(array);
  return array;
}
getMinCount([3, 32, 321]);

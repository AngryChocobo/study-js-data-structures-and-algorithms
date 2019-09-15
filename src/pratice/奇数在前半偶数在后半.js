/**
 *  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
 *  1. 没有提到必须保证顺序，建立一个奇数数组，一个偶数数组； 遍历一遍传入的数组，将数组的每个数字放到对应的奇偶数组中，最后将奇偶数组合并
 *  2. 排序算法，偶数后移
 *  3. 双指针
 */

function func(arr) {
    // let odd = [];
    // let even = [];
    // arr.forEach(v => {
    //     if (v % 2 === 0) {
    //         odd.push(v);
    //     } else {
    //         even.push(v);
    //     }

    // })
    // console.log(even.concat(odd));

    // arr.sort((a, b) => {
    //     return a % 2 === 0 ? 1 : -1;
    // });

    // console.log(arr);
    if (arr.length <= 1) {
        return arr;
    }
    let head = 0, tail = arr.length - 1;
    while (head < tail) {
        while (arr[head] % 2 === 1) {
            head++;
        }
        while (arr[tail] % 2 === 0) {
            tail--;
        }
        if (head < tail) {
            [arr[head], arr[tail]] = [arr[tail], arr[head]];
        }


        // if (arr[head] % 2 === 0 && arr[tail] % 2 === 1) {
        //     let temp = arr[head];
        //     arr[head] = arr[tail];
        //     arr[tail] = temp;
        // }
        // head++;
        // tail--;
    }
    console.log(arr);
}

func([1, 2, 3, 4, 5, 6]);


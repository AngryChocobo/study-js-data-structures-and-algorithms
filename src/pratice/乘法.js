/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 * 1. A = [0, 1, 2, 3, 4, 5]; 
 *    B[0] = A[1] * A[n-1];
 *    B[1] = A[0] * A[n-1];
 *    B[i] 值为 A的阶乘 除以 A[i]; 
 */

function func(arr) {
    function jiecheng(i, sum) {
        if (i <= 1) {
            return sum;
        }
        sum = sum * i;
        return jiecheng(--i, sum);
    }

    function specialJiecheng(i, sum, x) {
        if (i <= 1) {
            return sum;
        }
        if (x !== i) {
            sum = sum * i;
        }
        return specialJiecheng(--i, sum, x);
    }
    let b = arr.map(item => {
        return specialJiecheng(arr.length - 1, 1, item);
    });
    console.log(b);
    // console.log(jiecheng(arr.length - 1, 1));
    // console.log(specialJiecheng(arr.length - 1, 1, 5));
}

func([0, 1, 2, 3, 4, 5]);
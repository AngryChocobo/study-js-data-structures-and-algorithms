/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）。
 *  1. 记录每一个字符出现的次数和出现的位置，之后取第一个只有1次的字符，返回位置
 *  2. 
 */

function func(str) {
    let set = new Set([...str]);
    // 不好，obj是无序的
    let obj = {};
    [...str].forEach(i => {
        // obj[i] ? obj[i]++ : obj[i] = 0;
        if (obj[i] === undefined) {
            obj[i] = 0;
        } else {
            obj[i]++;
        }
    });
    console.log(obj);
}

func("helloworld");
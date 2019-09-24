console.time('fibonacci');
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let f1 = 1, f2 = 0;
    let fn = f1 + f2;
    for (let i = 2; i <= n; i++) {
        fn = f2 + f1;
        f2 = f1;
        f1 = fn;
    }
    return fn;
}

console.log(fibonacci(10));
console.timeEnd('fibonacci');

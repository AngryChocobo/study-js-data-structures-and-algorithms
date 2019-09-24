function factorial(num) {
    let answer = 1;
    while (num > 1) {
        answer *= num;
        num--;
    }
    return answer;
}

console.log(factorial(5));

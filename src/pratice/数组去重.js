
function func(arr) {
    let newArr = [];
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    console.log(set);
    return newArr;
}

func([1, 2, 3, 4, 5, 6, 3, 2, 5]);
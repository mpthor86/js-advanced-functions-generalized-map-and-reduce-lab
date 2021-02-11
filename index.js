// Add your functions here
function map(arr, func) {
    let newArr = []
    arr.forEach(el => newArr.push(func(el)))
    return newArr
}

function reduce(arr, func, start = 0) {
    let int = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for(; i < arr.length; i++){
        int = func(arr[i], int)
    }
    return int
}
function isDivisibleByN(arr, N) {
    var result = [];
    var length = arr.length;

    for (var i = 0; i < length; i++) {
        if (arr[i] % N === 0) {
            //var result = [];
            result.push(arr[i]);
        }
    }
    return result;

}

module.exports = isDivisibleByN;

console.log(isDivisibleByN([1, 3, 5, 6, 3, 6, 7, 4], 2));
console.log(isDivisibleByN([21, 3, 5, 6, 3, 6, 7, 4], 7));
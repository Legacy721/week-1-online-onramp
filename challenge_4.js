function highestSum(x, y) {
    function sumArrayElements(arr) {
        var total = 0;
        for (let i in arr) {
            total += arr[i];
        }
        return total;
    }


    var firstSumOfArray = sumArrayElements(x);
    var secondSumOfArray = sumArrayElements(y);

    if (firstSumOfArray < secondSumOfArray) {
        return secondSumOfArray;
    } else {
        return firstSumOfArray;
    }
}

module.exports = highestSum;

console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
console.log(highestSum([15, 7], [12, 17]));
console.log(highestSum([30], [3, 6, 2, 6]));
function divisible(a) {
    var count = 0;
    var length = a.length;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 15 && a[i] % 2 === 0) {
            count++;

        }
    }

    return count;
}

module.exports = divisible;

console.log(divisible([2, 3, 12, 18, 42, 24]));
console.log(divisible([100, 84, 37]));
console.log(divisible([5, 8, 6, 12]));
console.log(divisible([49, 24, 18, 98, 2, 4, 5, 76, 2, 15, 14, 16, 17]))
function replaceDivisible(x, y) {
    let count = [];
    let length = x.length;

    for (let i = 0; i < x.length; i++) {
        if (x[i] % y === 0) {
            x[i] = ("isDivisible");
        }
    }
    return x;
}

module.exports = replaceDivisible;

console.log(replaceDivisible([2, 4, 3, 6, 5], 3));
console.log(replaceDivisible([12, 4, 3, 6, 5], 2));
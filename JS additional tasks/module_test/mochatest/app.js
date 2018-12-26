// module.exports = function () {
//     return 'hello';
// }

module.exports= {
    hello: function () {
        return 'hello';
    },
    sumArray: function(arr) {
        return arr.reduce((sum, x) => sum + x, 0);
    }
}

// module.exports = function sumArray(arr) {
//     return arr.reduce((sum, x) => sum + x, 0);
// }
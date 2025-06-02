/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            flattened.push(...flat(arr[i], n - 1));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
};
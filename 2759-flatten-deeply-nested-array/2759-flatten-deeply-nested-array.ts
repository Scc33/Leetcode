type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if (n === 0) {
        return arr;
    }

    let flattened: MultiDimensionalArray = [];

    arr.forEach(el => {
        if (typeof el === 'number') {
            flattened.push(el);
        } else {
            flattened.push(...flat(el, n - 1));
        }
    });

    return flattened;
};
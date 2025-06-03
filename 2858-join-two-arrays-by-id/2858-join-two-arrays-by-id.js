/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joined = {};
    arr1.forEach((values) => {
        joined[values.id] = values;
    });
    arr2.forEach((values) => {
        if (values.id in joined) {
            Object.keys(values).forEach((key) => {
                joined[values.id][key] = values[key];
            })
        } else {
            joined[values.id] = values;
        }
    });
    return Object.values(joined);
};
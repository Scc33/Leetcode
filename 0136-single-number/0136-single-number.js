/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0;
    for (const i of nums) {
        a ^= i;
    }
    return a;
};
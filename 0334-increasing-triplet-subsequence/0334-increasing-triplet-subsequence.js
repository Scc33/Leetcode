/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Infinity;
    let b = Infinity;
    for (const num of nums) {
        if (num > a && num < b) {
            b = num;
        }
        if (num < a) {
            a = num;
        } 
        if (num > b && num > a) {
            return true;
        }
    }
    return false;
};
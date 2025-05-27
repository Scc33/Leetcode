/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === "") {
        return true;
    }
    let sPointer = 0;
    let tPointer = 0;
    while (tPointer < t.length) {
        if (t[tPointer] === s[sPointer]) {
            sPointer++;
        }
        if (sPointer === s.length) {
            return true;
        }
        tPointer++;
    }
    return false;
};
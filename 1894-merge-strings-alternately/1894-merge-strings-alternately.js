/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = "";
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < word1.length && pointer2 < word2.length) {
        merged += word1[pointer1];
        merged += word2[pointer2];
        pointer1++;
        pointer2++;
    }
    if (pointer1 < word1.length) {
        merged += word1.substring(pointer1)
    } else {
        merged += word2.substring(pointer1)
    }
    return merged;
};
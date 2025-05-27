/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let response = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) response += word1[i];
        if (i < word2.length) response += word2[i];
    }
    
    return response;
};
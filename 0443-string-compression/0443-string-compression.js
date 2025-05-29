/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let compressionPointer = 0;
    let placingPointer = 0;
    while (compressionPointer < chars.length) {
        const letter = chars[compressionPointer];
        let count = 1;
        while (letter === chars[++compressionPointer]) {
            count++;
        }
        if (count === 1) {
            chars[placingPointer] = letter;
            placingPointer++;
        } else {
            chars[placingPointer] = letter;
            const countChars = [...String(count)];
            chars.splice(placingPointer+1, countChars.length, ...countChars);
            placingPointer += 1 + countChars.length;
        }
    }
    return placingPointer;
};
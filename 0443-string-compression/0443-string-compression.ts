function compress(chars: string[]): number {
    let compressionPointer = 0;
    let placingPointer = 0;
    const charsLength = chars.length
    while (compressionPointer < charsLength) {
        const letter = chars[compressionPointer];
        compressionPointer++;
        let nextLetter = chars[compressionPointer];
        let count = 1;
        while (letter === nextLetter) {
            compressionPointer++;
            nextLetter = chars[compressionPointer];
            count++;
        }
        if (count === 1) {
            chars[placingPointer] = letter;
            placingPointer++;
        } else {
            chars[placingPointer] = letter;
            const countChars = [...String(count)];
            console.log(countChars)
            chars.splice(placingPointer+1, countChars.length, ...countChars);
            placingPointer += 1 + countChars.length;
        }
    }
    return placingPointer;
};
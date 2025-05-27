/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = 'aeiouAEIOU';
  let vowelsInWord = s.split('').filter((letter) => vowels.includes(letter)).reverse();
  let vowelToUse = 0;
  let reversedVowels = "";
  for (const letter of s) {
    if (vowels.includes(letter)) {
        reversedVowels += vowelsInWord[vowelToUse];
        vowelToUse++;
    } else {
        reversedVowels += letter;
    }
  }
  return reversedVowels;
};
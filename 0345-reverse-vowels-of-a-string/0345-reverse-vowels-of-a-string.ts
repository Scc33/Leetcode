function reverseVowels(s: string): string {
    const vowels = 'aeiouAEIOU';
  let vowelsInWord = s.split('').filter((letter) => vowels.includes(letter)).reverse();
  let vowelToUse = 0;
  let reversedVowels = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
        reversedVowels += vowelsInWord[vowelToUse];
        vowelToUse++;
    } else {
        reversedVowels += s[i]
    }
  }
  return reversedVowels;
};
function reverseWords(s: string): string {
  const words = s.split(' ').filter((word) => word !== '');
  const reversed = words.reverse().join(' ');
  return reversed;
};
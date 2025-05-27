/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.split(' ').filter((word) => word !== '');
  const reversed = words.reverse().join(' ');
  return reversed;
};
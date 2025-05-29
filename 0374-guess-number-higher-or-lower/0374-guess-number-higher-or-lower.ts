/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let high = n;
    let low = 0;
    let midpoint = Math.ceil((high + low) / 2);
    let position = guess(midpoint)
    while (position !== 0) {
        console.log(low, high)
        if (position < 0) {
            high = midpoint;
        } else {
            low = midpoint;
        }
        midpoint = Math.ceil((high + low) / 2);
        position = guess(midpoint);
    }
    return midpoint;
};
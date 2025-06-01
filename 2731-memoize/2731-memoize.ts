type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {

    let memoized = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in memoized) { // need to check for key being in the function. Not if value is falsy or not
            return memoized[key];
        }
        const result = fn.apply(this, args);
        memoized[key] = result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

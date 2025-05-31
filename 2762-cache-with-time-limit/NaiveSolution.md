// This would work if you couldn't overwrite values in the cache
// Should use bracket notation instead of key (using .key) looks for key literally

class TimeLimitedCache {

    cache: any;
    
    constructor() {
        this.cache = {};
    }
    
    set(key: number, value: number, duration: number): boolean {
        if (this.cache.key) {
            return true;
        } else {
            setTimeout(() => { delete this.cache.key }, duration)
            this.cache.key = value;
            return false;
        }
    }
    
    get(key: number): number {
        if (this.cache.key) {
            return this.cache.key
        } else {
            return -1;
        }
    }
    
    count(): number {
        return Object.keys(this.cache).length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

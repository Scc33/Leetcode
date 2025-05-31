class TimeLimitedCache {

    cache: any;
    
    constructor() {
        this.cache = {};
    }
    
    set(key: number, value: number, duration: number): boolean {
        const keyExists = this.cache[key];

        if (keyExists) {
            clearTimeout(this.cache[key].timeout);
        }

        const timeout = setTimeout(() => { delete this.cache[key] }, duration)
        this.cache[key] = { 
            value: value, 
            timeout: timeout
        };
        
        return keyExists ? true : false;
    }
    
    get(key: number): number {
        if (this.cache[key]) {
            return this.cache[key].value;
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
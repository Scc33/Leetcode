class RecentCounter {
    // Properties (fields)
    counter: number[];

    // Constructor
    constructor() {
        this.counter = [];
    }

    ping(t: number): number {
        this.counter.push(t);
        let countLast3000 = 1;
        let lastCall = this.counter[this.counter.length - countLast3000]
        while (lastCall >= t - 3000) {
            countLast3000++;
            lastCall = this.counter[this.counter.length - countLast3000];
        }
        return countLast3000-1;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
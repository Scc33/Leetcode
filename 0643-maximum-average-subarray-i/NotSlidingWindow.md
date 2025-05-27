function findMaxAverage(nums: number[], k: number): number {
    let maxAvg = -Number.MAX_VALUE;
    for (let i = 0; i <= nums.length - k; i++) {
        const window = nums.slice(i, i + k);
        console.log(window)
        const windowAvg = window.reduce((num, sum = 0) => sum = sum + num) / k;
        if (windowAvg > maxAvg) {
            maxAvg = windowAvg;
        }
    }
    return maxAvg;
};

Too inefficient...

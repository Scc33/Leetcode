function singleNumber(nums: number[]): number {
    let a = 0;
    for (const i of nums) {
        a ^= i;
    }
    return a;
};
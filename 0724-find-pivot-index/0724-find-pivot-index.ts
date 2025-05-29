function pivotIndex(nums: number[]): number {
    let leftSums = [nums[0]];
    let rightSums = [nums[nums.length-1]];
    for (let i = 1; i < nums.length; i++) {
        leftSums.push(leftSums[i-1] + nums[i]);
        rightSums.unshift(rightSums[0] + nums[nums.length - i - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (leftSums[i] === rightSums[i]) {
            return i;
        }
    }
    return -1;
};
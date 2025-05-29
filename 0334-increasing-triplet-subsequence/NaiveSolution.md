function increasingTriplet(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            for (let k = j; k < nums.length; k++) {
                if (nums[k] > nums[j] && nums[j] > nums[i]) {
                    return true;
                }
            }
        }
    }
    return false;
};

// Naive solution O(n^3)

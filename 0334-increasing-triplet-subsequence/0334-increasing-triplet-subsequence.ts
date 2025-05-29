function increasingTriplet(nums: number[]): boolean {
    let a = Infinity;
    let b = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > a && nums[i] < b) {
            b = nums[i];
        }
        if (nums[i] < a) {
            a = nums[i];
        } 
        if (nums[i] > b && nums[i] > a) {
            return true;
        }
    }
    return false;
};
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left += 1;
        }
    }
};
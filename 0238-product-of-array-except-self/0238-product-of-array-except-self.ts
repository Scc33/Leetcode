function productExceptSelf(nums: number[]): number[] {
    let products = Array(nums.length).fill(1);
    let prefixProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        products[i] *= prefixProduct
        prefixProduct *= nums[i]
    }
    let suffixProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        products[i] *= suffixProduct
        suffixProduct *= nums[i]
    }
    return products;
};
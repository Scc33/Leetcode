class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        leftSum, rightSum = 0, sum(nums)
        for idx, element in enumerate(nums):
            leftSum += element
            if leftSum == rightSum:
                return idx
            rightSum -= element
        return -1
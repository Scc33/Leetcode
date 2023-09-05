class Solution(object):
    def searchRange(self, nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) / 2
            if target > nums[mid]: 
                left = mid + 1
            else: 
                right = mid - 1
        left_to_return = left
                
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) / 2
            if target >= nums[mid]: 
                left = mid + 1
            else: 
                right = mid - 1

        return (left_to_return, right) if left_to_return <= right else [-1, -1]
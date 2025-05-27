class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        totalSum = n * (n + 1) // 2
        divisibleSum = m * (n // m) * (n // m + 1)
        return totalSum - divisibleSum
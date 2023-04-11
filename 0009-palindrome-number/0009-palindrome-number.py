class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        x = list(str(x))
        for x1,x2 in zip(x, reversed(x)):
            if x1 != x2:
                return False
        return True
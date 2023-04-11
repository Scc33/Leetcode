class Solution(object):
    def removeStars(self, s):
        """
        :type s: str
        :rtype: str
        """
        starsStripped = ""
        for c in s:
            if c == '*':
                starsStripped = starsStripped[:-1]
            else:
                starsStripped += c
        return starsStripped
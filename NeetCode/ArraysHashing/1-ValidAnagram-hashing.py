# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False;
        s_freq, t_freq = {}, {}
        for i in range(0, len(s)):
            s_freq[s[i]] = 1 + s_freq.get(s[i], 0)
            t_freq[t[i]] = 1 + t_freq.get(t[i], 0)
        return s_freq == t_freq

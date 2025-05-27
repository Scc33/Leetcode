class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True
        sPointer = 0
        tPointer = 0
        while tPointer < len(t):
            if s[sPointer] == t[tPointer]:
                sPointer += 1
                if sPointer == len(s):
                    return True
            tPointer += 1
        return False
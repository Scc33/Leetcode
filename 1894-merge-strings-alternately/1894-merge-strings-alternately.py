class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged = ""
        for i in range(0, max(len(word1), len(word2))):
            if i < len(word1):
                merged += word1[i]
            if i < len(word2):
                merged += word2[i]
        return merged
class Solution:
    def reverseWords(self, s: str) -> str:
        split_words = s.split(' ')
        no_spaces = filter(lambda x: x != '', split_words)
        words_list = list(no_spaces)
        words_list.reverse()
        return ' '.join(words_list)
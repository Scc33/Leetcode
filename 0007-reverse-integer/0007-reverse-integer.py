class Solution:
    def reverse(self, x: int) -> int:
        a = 0
        if x < 0:
            x = str(x)
            a = '-' + x[-1:0:-1]
            a = int(a)
        else:
            x = str(x)
            a = int(x[::-1])
        if a >= 2147483647 or a <= -2147483647:
            return 0
        else:
            return a

        
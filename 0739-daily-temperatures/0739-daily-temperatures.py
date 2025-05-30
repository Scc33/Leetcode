class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        output = [0] * len(temperatures)
        monotonicStack = [[temperatures[0],0]]
        for i in range(1, len(temperatures)):
            while len(monotonicStack) > 0 and temperatures[i] > monotonicStack[len(monotonicStack)-1][0]:
                day = monotonicStack.pop()
                output[day[1]] = i - day[1]
            monotonicStack.append([temperatures[i], i])
        return output
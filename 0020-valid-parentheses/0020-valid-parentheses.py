class Solution(object):
    def isValid(self, s):
        stack = []
        for i in s:
            if i == '(' or i == '{' or i == '[':
                stack.append(i)
            else:
                if len(stack) == 0:
                    return False
                else:
                    value = stack.pop()
                    if value == '(' and i != ')':
                        return False
                    elif value == '{' and i != '}':
                        return False
                    elif value == '[' and i != ']':
                        return False
        return len(stack) == 0
        
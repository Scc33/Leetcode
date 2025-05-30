// Naive solution because it never clears out the stack
// Actually that's not quite true, more accurately it doesn't maintain it as monotonically increasing

class StockSpanner:

    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        self.stack.append(price)
        span = 0
        while span < len(self.stack) and self.stack[len(self.stack) - 1 - span] <= price:
            span += 1
        return span

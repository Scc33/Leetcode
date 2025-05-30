class StockSpanner:

    def __init__(self):
        # maintain a monotonic stack for stock entry
		## definition of stock entry:
        # first parameter is price quote
        # second parameter is price span
        self.monotone_stack = []
        
    def next(self, price: int) -> int:        
        cur_price_quote, cur_price_span = price, 1
        
        # Compute price span in stock data with monotonic stack
        while self.monotone_stack and self.monotone_stack[-1][0] <= cur_price_quote:
            
            prev_price_quote, prev_price_span = self.monotone_stack.pop()
            
            # update current price span with history data in stack
            cur_price_span += prev_price_span
        
        # Update latest price quote and price span
        self.monotone_stack.append( (cur_price_quote, cur_price_span) )
        
        return cur_price_span
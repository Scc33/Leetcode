class Solution(object):
    def isValidSudoku(self, board):
        seen = set()
        for i in range(9):
            for j in range(9):
                number = board[i][j]
                if number != ".":
                    row = str(number) + "row" + str(i)
                    column = str(number) + "column" + str(j)
                    block = str(number) + "block" + str(i / 3) + "/" + str(j/3)
                    if row in seen or column in seen or block in seen:
                        return False
                    seen.add(row)
                    seen.add(column)
                    seen.add(block)
        print(seen)
        return True
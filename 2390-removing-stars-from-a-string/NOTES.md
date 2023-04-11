Solution 1 - String
* If the character isn't a star add it to a constructed string
* If the character is a star then remove the last character we added
​
Solution 2 - Explicit Stack
* Add a character to a stack if it isn't a star
* Pop from stack if a star
* Combin stack into a string
# Naive solution
Iterate through the array with a double for loop to compare if something appears once or twice
- O(n^2) time complexity
- O(1) space complexity

# Sorting
Sort the array then iterate through to check if the pairs are next to each other
- O(nlogn + n) time complexity (sorting + looping over the entire thing)
- O(1) space complexity

# Hash map
Add the frequencies to a hashmap and check which frequence only appears once
- O(n) time complexity (technically 2n because we would loop to contruct the hashmap then loop again to check it)
- O(n) space complexity

# XOR
If a value has appeared before then the XOR will cancel it out. This will only leave the unique value remaining
- O(n) time complexity
- O(1) space complexity

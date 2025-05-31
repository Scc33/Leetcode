# Map and Reduce

Implementing this makes the map reduce process make so much more sense as a paradigm for solving problems. 

It also explains why mapping is so easily parallizable vs reducing which is often done sequential or with some combining step

Mapping is applying one function to every value of an array. Done in parallel. It will return an array of the same length.

Reducing is applying a function to every value of an array while using the prior output as part of the result. It will return one value.

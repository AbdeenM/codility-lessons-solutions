# Lesson 02 - Arrays

CyclicRotation
--------------

**Rotate an array to the right by a given number of steps.**

1. As the description states, we have to check for every rotation so we loop through all rotations.
2. Create a new temperary array within the rotations loop, we loop for every new indexed element.
3. Update the new temperary array with the rotated elements.
4. Update the rotated array as the temperary array.


OddOccurrencesInArray
---------------------

**Find value that occurs in odd number of elements.**

1. Create a hash map of the elements of the array as key and values of true or false as we find them again.
2. Seperate the keys and values of the hash map into two sperate arrys.
3. Loop through the keys array and if we meet a key that has a value of true we return it as it is the odd count.

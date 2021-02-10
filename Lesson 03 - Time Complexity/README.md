# Lesson 03 - Time Complexity

ForgJmp
-------

**Count minimal number of jumps from position X to Y.**

1. Find the difference between the initial position and final position then divide it by the value of each jump.

PermMissingElem
---------------

**Find the missing element in a given permutation.**

1. Create a new array and fill it with an initial value of false, this array will be the point of reference.
2. We loop for every element in the given array, and use that element as the index for our point of reference array to switch its state to true.
3. All elements in the array are integers in the range of 1 ... N + 1, meaning index 0 will not be handled as no number in array A will have the number 0.
4. Every element given is unique and only one is missing so the missing element will still have the initial state we created in our point of reference array, we check and return the index of this initial value.

TapeEquilibrium
---------------

**Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.**

1. Create an array and loop to store the sum of the left values (A[0] + ... + A[P-1]).
2. Reverse the array given.
3. Create an array and loop to store the sum of the right values (A[P] + ... + A[N-1]).
4. Reverse the sum array of the right values to align back.
5. Loop through all the values stored left and right to check for the smallest difference and return it.

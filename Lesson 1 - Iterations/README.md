# Lesson 01 - Iterations

BinaryGap
---------

**Find longest sequence of zeros in binary representation of an integer.**

The idea to solve this task is:
1. Begin by converting the given number to its equivilant binary representation.
2. Run a while or for loop and store all indexes of ones in an array.
3. Check if the binary array is empty and return 0.
4. Loop through the array of ones and find the biggest difference between the indexes stored (Check within the loop if the difference between indexes is one and filter it out as this is invalid).
5. The largest difference between the indexes is the maximum binary gap.

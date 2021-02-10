def solution(A):
    # Handle empty array
    if len(A) == 0:
        return len(A) + 1

    # Create an array for the length of maximum value of given array, filled as false
    array = [False] * (max(A) + 1)

    # Loop through every element in the array A
    for i in A:
        # Switch the element in the array to false based on the index of A
        array[i] = True

    # Switch initial 0 elment
    array[0] = True

    # Loop through element in the array
    for i, value in enumerate(array):
        # Check if the element is false then return it
        if value == False or value == None:
            return i

    # Handle number not in array
    return len(A) + 1
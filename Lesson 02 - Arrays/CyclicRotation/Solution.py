def solution(A, K):
    rotatedArray = A

    # Loop for every rotation
    for _ in range(K):
        tempArray = []

        # Loop through every element on the array
        for j in range(len(A)):
            # If it is the first element push last element of orginal array
            if j == 0:
                tempArray.append(rotatedArray[len(A) - 1])
            # Else push the element to of the previous index (left)
            else:
                tempArray.append(rotatedArray[j - 1])

        # Update the rotated array
        rotatedArray = tempArray
    
    return rotatedArray
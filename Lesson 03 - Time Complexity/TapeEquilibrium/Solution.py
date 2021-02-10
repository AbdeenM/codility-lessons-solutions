def solution(A):
    minDifference = float('inf')
    sumCollectorLeft = [0] * (len(A) - 1)
    sumCollectorRight = [0] * (len(A) - 1)
    
    # Loop through all the elements of the array
    for i in range(len(A) - 1):
        # Check if the index is 0 and append its value
        if i == 0:
            sumCollectorLeft[i] = A[i]
            continue
        
        # Append the sum collector for left side accumlator
        sumCollectorLeft[i] = A[i] + sumCollectorLeft[i - 1]
    
    # Reverse the array given
    reversedArray = A[::-1]

    # Loop through all the elements of the array
    for i in range(len(A) - 1):
        # Check if the index is 0 and append its value
        if i == 0:
            sumCollectorRight[i] = reversedArray[i]
            continue
        
        # Append the sum collector for right side accumlator
        sumCollectorRight[i] = reversedArray[i] + sumCollectorRight[i - 1]

    # Reverse the right side to align
    reversedSumCollectorRight = sumCollectorRight[::-1]

    # Loop through all the elements of the array
    for i in range(len(reversedArray) - 1):
        score = abs(sumCollectorLeft[i] - reversedSumCollectorRight[i])

        # Check if the absolute diffrence is smaller than currect score
        if score < minDifference:
            minDifference = score

    return minDifference
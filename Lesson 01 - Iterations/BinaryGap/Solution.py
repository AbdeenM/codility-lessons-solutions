def solution(N):
    # Get the binary representation of N given
    binary = format(N, 'b')

    # Start a running count to check for 1's
    runner = 0
    binaryOneIndex = []
    while runner < len(binary):
        # If the element is a one add to the array collection
        if binary[runner] == '1':
            binaryOneIndex.append(runner)
        
        # Increment runner
        runner += 1
    
    maxBinaryGap = 0

    # Check if the binary array is empty then return 0
    if len(binaryOneIndex) < 2:
        return maxBinaryGap
    
    # Loop through all the ones index and check for biggest gap
    for i in range(len(binaryOneIndex)):
        # Ignore first index
        if i != 0:
            prevOne = binaryOneIndex[i - 1]
            currOne = binaryOneIndex[i]

            # If both indexes are back to back ignore
            if abs(currOne - prevOne) == 1:
                continue

            # Check if gap is bigger than currently stored
            if abs(currOne - prevOne) > maxBinaryGap:
                maxBinaryGap = abs(currOne - prevOne) - 1

    return maxBinaryGap
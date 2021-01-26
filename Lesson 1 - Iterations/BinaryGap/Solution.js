function solution(N) {
    // Get the binary representation of N given
    const binary = N.toString(2)

    // Start a running count to check for 1's
    let runner = 0
    let binaryOneIndex = []
    while (runner < binary.length) {
        // If the element is a one add to the array collection
        if (binary[runner] == '1')
            binaryOneIndex.push(runner)

        // Increment runner
        runner += 1
    }

    let maxBinaryGap = 0

    // Check if the binary array is empty then return 0
    if (binaryOneIndex.length < 2)
        return maxBinaryGap

    // Loop through all the ones index and check for biggest gap
    for (let i = 0; i < binaryOneIndex.length; i++) {
        // Ignore first index
        if (i != 0) {
            const prevOne = binaryOneIndex[i - 1]
            const currOne = binaryOneIndex[i]

            // If both indexes are back to back ignore
            if (Math.abs(currOne - prevOne) == 1)
                continue

            // Check if gap is bigger than currently stored
            if (Math.abs(currOne - prevOne) > maxBinaryGap)
                maxBinaryGap = currOne - prevOne - 1
        }
    }

    return maxBinaryGap
}
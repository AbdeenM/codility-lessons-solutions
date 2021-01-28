function solution(A, K) {
    let rotatedArray = A

    // Loop for every rotation
    for (let i = 0; i < K; i++) {
        let tempArray = []

        // Loop through every element on the array
        for (let j = 0; j < A.length; j++) {
            // If it is the first element push last element of orginal array
            if (j == 0)
                tempArray.push(rotatedArray[A.length - 1])
            // Else push the element to of the previous index (left)
            else
                tempArray.push(rotatedArray[j - 1])
        }

        // Update the rotated array
        rotatedArray = tempArray
    }

    return rotatedArray
}
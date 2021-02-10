function solution(A) {
    // Create an array for the length of given array, filled as false
    let array = new Array(A.length).fill(false)

    // Loop through every element in the array A
    for (let i = 0; i < A.length; i++) {
        // Switch the element in the array to false based on the index of A
        array[A[i]] = true
    }

    // Switch initial 0 elment
    array[0] = true

    // Loop through element in the array
    for (let i = 0; i < array.length; i++) {
        // Check if the element is false then return it
        if (array[i] === undefined || array[i] === false)
            return i
    }

    // Handle number not in array
    return A.length + 1
}
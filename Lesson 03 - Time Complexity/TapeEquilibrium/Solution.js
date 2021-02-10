function solution(A) {
    let minDifference = Number.POSITIVE_INFINITY
    let sumCollectorLeft = new Array(A.length - 1).fill(0)
    let sumCollectorRight = new Array(A.length - 1).fill(0)

    // Loop through all the elements of the array
    for (let i = 0; i < A.length - 1; i++) {
        // Check if the index is 0 and append its value
        if (i == 0) {
            sumCollectorLeft[i] = A[i]
            continue
        }

        // Append the sum collector for left side accumlator
        sumCollectorLeft[i] = A[i] + sumCollectorLeft[i - 1]
    }

    // Reverse the array given
    const reversedArray = A.reverse()

    // Loop through all the elements of the array
    for (let i = 0; i < reversedArray.length - 1; i++) {
        // Check if the index is 0 and append its value
        if (i == 0) {
            sumCollectorRight[i] = reversedArray[i]
            continue
        }

        // Append the sum collector for right side accumlator
        sumCollectorRight[i] = reversedArray[i] + sumCollectorRight[i - 1]
    }

    // Reverse the right side to align
    const reversedSumCollectorRight = sumCollectorRight.reverse()

    // Loop through all the elements of the array
    for (let i = 0; i < reversedArray.length; i++) {
        const score = Math.abs(sumCollectorLeft[i] - reversedSumCollectorRight[i])

        // Check if the absolute diffrence is smaller than currect score
        if (score < minDifference)
            minDifference = score
    }

    return minDifference
}
function solution(A) {
    let hashMap = {}

    // Loop for each element of the original array
    for (let i = 0; i < A.length; i++) {
        // Check if hashMap has the element and invert the value of true, else add it with initial value of true
        if (String(A[i]) in hashMap)
            hashMap[String(A[i])] = !hashMap[String(A[i])]
        else
            hashMap[String(A[i])] = true
    }

    const hashMapKeys = Object.keys(hashMap)
    const hashMapValues = Object.values(hashMap)

    // Loop for each element on the object keys array
    for (let i = 0; i < hashMapValues.length; i++) {
        // Check if the count is odd for the element and return its key
        if (hashMapValues[i])
            return parseInt(hashMapKeys[i])
    }
}
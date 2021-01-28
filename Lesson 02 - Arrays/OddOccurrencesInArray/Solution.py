def solution(A):
    hashMap = {}

    # Loop for each element of the original array
    for i in A:
        # Check if hashMap has the element and invert the value of true, else add it with initial value of true
        if i in hashMap:
            hashMap[i] = not hashMap[i]
        else:
            hashMap[i] = True

    hashMapKeys = list(hashMap.keys())
    hashMapValues = list(hashMap.values())

    # Loop for each element on the object keys array
    for i in range(len(hashMapValues)):
        # Check if the count is odd for the element and return its key
        if hashMapValues[i] is True:
            return int(hashMapKeys[i])
    pass
// First Recurring Character with Hash Map

// Searching is very fast in hash tables unlike arrays.
// It is very rare you will have a memory collision.
// Hash tables have no concept of order...arrays are in order.


// Naive approach nested for loop

function firstRecurringChar(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
        // j is i + 1 instead of just 1 because once the first loop iterates it will reset j back to 1...
        // this way it will look at the next char after i and compare the two chars
            if (input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined
}

answer = firstRecurringChar([2,3,4,4,6,7,8,9])

console.log(answer)

// Nested loops O(n^2) 

// Solve using hash tables

// we will loop and add each item to the hash table and check if the key already exists

function hashFirstRecurringChar(input) {
    let hashMap = {}
    for (let i = 0; i < input.length; i++) {
        if (hashMap[input[i]] !== undefined) {
            /* 
            JS due to type coercion will return the last recurring char if you
            do not add the !== undefined in the above if statement. Our objective is to
            return the first recurring char. 
            */
            return input[i]
        } else {
            hashMap[input[i]] = i
        }
    }
    return undefined
}
answerTwo = hashFirstRecurringChar([1,2,2,3,4,5,5])

console.log(answerTwo)

// made with 1 loop and is way faster than the nested solution
// Big O === O(n)
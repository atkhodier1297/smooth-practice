// Array Practice

/* 
Stored in order and has the least amount of rules.
They have the smallest memory foot print of other DS's.
Best for iteration.
Lookup is O(1) constant time
Push is O(1)
Insert is O(n) linear time
Delete is O(n)
*/

const strings = ['a', 'b', 'c', 'd']

// push
strings.push("e") // O(1)

// pop
strings.pop() // O(1)

// unshift
strings.unshift("x") // O(n)   
// Imagine shifting the indices. It iterates adds the new value and assigns them new indices.

// splice
strings.splice(2, 0, "alien") // O(n)

//console.log(strings)




// Static vs Dynamic Arrays

// Static arrays have limited space with allocated memory.
// Dynamic array is a copy of that static array but with more memory allocated in a separate area. 
// In JS and Python they work like Dynamic arrays immediately. They have auto resizing.



// Reverse a string.

function reverse(str){
    // check input is a string
    if (!str || str.length < 2 || typeof str !== "string"){
        return "wrong type"
    }
    const backwards = []
    const totalItems = str.length -1

    for (let i = totalItems ; i >= 0; i--){
        backwards.push(str[i])
    }
    console.log(backwards)
    return backwards.join("")
}

answer = reverse("hello im adam")

console.log(answer)

function simpleReverse(str){
    return str.split("").reverse().join("")
}

answerTwo = simpleReverse("hello im eric")

console.log(answerTwo)
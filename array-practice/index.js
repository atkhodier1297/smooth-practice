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


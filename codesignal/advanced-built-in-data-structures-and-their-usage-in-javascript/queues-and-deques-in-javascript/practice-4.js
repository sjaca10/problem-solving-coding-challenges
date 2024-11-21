/**
 * Rotate Deque for Fruit List
 */

// Initialize a deque with a list of elements
let fruitDeque = ["Apple", "Banana", "Mango", "Orange"];

// TODO: Rotate the deque so the last element becomes the first
fruitDeque.unshift(fruitDeque.pop())

// TODO: Print the first element of the deque to verify rotation
console.log(fruitDeque.shift())

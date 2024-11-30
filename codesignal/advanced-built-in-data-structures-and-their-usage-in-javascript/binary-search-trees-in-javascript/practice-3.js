/**
 * Key After Specific Entry in BinarySearchTree
 */

const { BinarySearchTree } = require('@datastructures-js/binary-search-tree');

// Create a BinarySearchTree with a custom comparison function for arrays
const entries = [['pomegranate', 10], ['grape', 15], ['orange', 20], ['apple', 5]];
const compareArrays = (a, b) => a[0].localeCompare(b[0]);
const bst = new BinarySearchTree(compareArrays);
entries.forEach(entry => bst.insert(entry));

// TODO: Write a function that accepts a fruit name and returns the total quantity of the two fruits that follow
// in alphabetical order. If there are not enough items, return "Not enough keys".
function totalNextFruits (fruit) {
    const firstNextFruit = bst.upperBound([fruit], false)
    const secondNextFruit = bst.upperBound([firstNextFruit._value[0]], false)
    
    return firstNextFruit && secondNextFruit ? firstNextFruit._value[1] + secondNextFruit._value[1] : 'Not enough keys'
}

// Test the function with different fruits, e.g., 'grape', 'apple', and 'orange'
console.log(totalNextFruits('grape'))
console.log(totalNextFruits('apple'))
console.log(totalNextFruits('orange'))

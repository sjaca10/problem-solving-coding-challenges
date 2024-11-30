/**
 * Finding the Country Before Pakistan in a Sorted BST
 */

const { BinarySearchTree } = require('@datastructures-js/binary-search-tree');

// Initialize a BinarySearchTree with a few countries and their populations
const countryPopulations = [
  ['Nigeria', 206], 
  ['Brazil', 213], 
  ['Pakistan', 225], 
  ['Indonesia', 276]
];
const compareArrays = (a, b) => a[0].localeCompare(b[0]);
const bst = new BinarySearchTree(compareArrays);

countryPopulations.forEach(entry => bst.insert(entry));

// TODO: Print the country that comes before 'Pakistan' in alphabetical order
console.log(bst.lowerBound(['Pakistan'], false)._value)

// Hint: Use lowerBound with 0 as the second parameter
// Hint: This will allow you to access the previous country's node directly

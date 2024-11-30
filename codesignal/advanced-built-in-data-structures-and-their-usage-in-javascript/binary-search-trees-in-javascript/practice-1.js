/**
 * Finding Countries in a Binary Search Tree
 */

const { BinarySearchTree } = require('@datastructures-js/binary-search-tree');

const entries = [['USA', 331], ['China', 1439], ['India', 1380], ['Russia', 146]];
const compareArrays = (a, b) => a[0].localeCompare(b[0]);
const bst = new BinarySearchTree(compareArrays);
entries.forEach(entry => bst.insert(entry));

const nextCountry = bst.upperBound(['India'], false);
console.log('Next country after India:', nextCountry ? nextCountry._value[0] : 'Not found');  // Output should be 'Russia'

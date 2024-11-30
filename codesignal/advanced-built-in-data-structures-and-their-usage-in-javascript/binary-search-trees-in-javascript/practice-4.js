/**
 * Event Planning with Binary Search Trees
 */

const { BinarySearchTree } = require('@datastructures-js/binary-search-tree');

// Create a comparison function for arrays based on the second element (event date)
const compareArrays = (a, b) => new Date(a[1]) - new Date(b[1]);

// Create a BinarySearchTree containing event names and their dates
const eventDates = [['Concert', '2023-06-21'], ['Conference', '2023-07-12'], ['Seminar', '2023-06-11'], ['Workshop', '2023-08-05']];
const bst = new BinarySearchTree(compareArrays);
eventDates.forEach(event => bst.insert(event));

// console.log(bst)
// TODO: Write logic to find and display the name of the event that is scheduled immediately after 'Seminar'
const rightAfterSeminar = bst.upperBound(['Seminar', new Date('2023-06-11')], false)
console.log(rightAfterSeminar._value)
// TODO: Write logic to remove the event that is scheduled immediately after 'Seminar'
bst.remove(rightAfterSeminar)

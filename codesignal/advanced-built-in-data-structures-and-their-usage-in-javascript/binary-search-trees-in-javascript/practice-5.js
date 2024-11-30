/**
 * Tracking Quiz Scores with Binary Search Tree
 */

const { BinarySearchTree } = require('@datastructures-js/binary-search-tree');

// TODO: Define a comparison function for participant scores (sorting in descending order based on scores)
const compareScores = (a, b) => b[1] - a[1]

// TODO: Create a BinarySearchTree instance named participantScores to record the scores of different participants (Feel free to choose any participant names and scores)
const bst = new BinarySearchTree(compareScores)

const participants = [['Superman', 1000], ['Batman', 700], ['Flash', 800], ['Spiderman', 900]]

participants.forEach((participant) => bst.insert(participant))

// TODO: Find and display the name of the participant with the highest score
const participantHighestScore = bst.upperBound(['Superman', 1000], true)

console.log(participantHighestScore._value[0])

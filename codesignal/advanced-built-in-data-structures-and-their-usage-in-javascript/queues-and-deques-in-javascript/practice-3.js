/**
 * Managing a Task Queue with Deques in JavaScript
 */

// Create a deque and perform a sequence of operations
let processingQueue = ['Task1', 'Task2', 'Task3'];
processingQueue.push('Task4');  // Add new task to the right end
// TODO: Add the highest priority task to the beginning of the queue
processingQueue.unshift('HighestPrioriotyTask')
// TODO: Process and print the first task in the queue
console.log(processingQueue.shift())

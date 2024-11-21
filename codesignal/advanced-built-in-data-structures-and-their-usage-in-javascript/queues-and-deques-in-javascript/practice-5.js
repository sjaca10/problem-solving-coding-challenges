/**
 * Coffee Shop Order Management Using Deque
 */

// TODO: Create a deque for coffee shop orders with initial orders 'Latte', 'Espresso', 'Cappuccino'
const orders = ['Latte', 'Espresso', 'Cappuccino']

// TODO: A new customer orders a 'Mocha', add it to the end of the queue
orders.push('Mocha')

// TODO: Realize a customer wants their 'Latte' order moved to the end of the queue. Implement it.
orders.push(orders.shift())

// TODO: Process (remove and print) the first order in the queue. Which drink is it?
console.log(orders.shift())

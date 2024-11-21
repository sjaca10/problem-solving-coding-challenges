/** 
 * Fix the Supermarket Checkout Queue
 */

// Simulate a supermarket checkout queue using an array
let checkoutLine = ['Person1', 'Person2', 'Person3'];
checkoutLine.push('Person4');  // Person4 joins the end of the line
let servicedCustomer = checkoutLine.shift();  // Processing the first customer

console.log(servicedCustomer);  // Unexpectedly shows 'Person4'

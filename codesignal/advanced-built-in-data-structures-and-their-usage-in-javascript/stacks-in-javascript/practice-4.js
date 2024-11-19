/**
 * Evaluating Parentheses Balance Using Stacks in JavaScript
 */

// Complete the function to properly use stack operations for parenthesis matching
function isValidExpression(expression) {
  let stack = [];
  for (let char of expression) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const lastChar = stack[stack.length - 1]
      // TODO: Determine if the stack is empty OR the last character does not match the corresponding opening character
      if (stack.length === 0 || ((char === ')' && lastChar !== '(') || (char === ']' && lastChar !== '[') || (char === '}' && lastChar !== '{'))) {
        return false
      }
      stack.pop()
    }
    // TODO: What to do if the `char` is not a parenthesis?
  }
  // TODO: Check if the stack is empty, indicating that the expression is balanced
  return stack.length === 0;  // Modify this line appropriately
}

// Example usage
let sampleExpression = "([a+b]{c+d})";
console.log(isValidExpression(sampleExpression));  // Expected output: true

let badExpression = "([a+b]{c+d}))";
console.log(isValidExpression(badExpression));  // Expected output: false

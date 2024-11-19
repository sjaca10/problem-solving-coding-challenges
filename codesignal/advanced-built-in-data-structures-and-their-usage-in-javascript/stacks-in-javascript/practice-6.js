/**
 * Evaluating Reverse Polish Notation Using Stacks in JavaScript
 */

// TODO: Define a function named evaluateReversePolishNotation that accepts an expression as a parameter
function evaluateReversePolishNotation(expression) {
  // TODO: Initialize an empty array to act as the stack
  const stack = []

  // TODO: Split the expression into tokens and iterate over them
  for (token of expression.split(" ")) {
      // TODO: If the token is an operator ('+', '-'), pop the top two elements from the stack for operation
      if (['+', '-'].includes(token)) {
          const secondOperator = stack.pop()
          const firstOperator = stack.pop()
          
          // TODO: Based on the operator, perform the appropriate operation and push the result back onto the stack
          if (token === '+') {
              const result = firstOperator + secondOperator
              stack.push(result)
          } else {
              const result = firstOperator - secondOperator
              stack.push(result)
          }
      } else {
          // TODO: Otherwise, treat the token as an operand and push it onto the stack
          stack.push(Number(token))
      }
  }

  return stack.pop()
  // TODO: Return the top element of the stack as the result of the expression evaluation
}


// Example usage
expression = "1 2 + 4 -"
console.log(evaluateReversePolishNotation(expression))  // Expected output: -1

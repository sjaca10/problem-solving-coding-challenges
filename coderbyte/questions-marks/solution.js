function QuestionsMarks(str) {
  let firstNumber, secondNumber
  let questionMarkCounter = 0
  let sumsUp10 = false
  let result = true
  for (index in str) {
    if (/[0-9]/.test(str[index])) {
      if (!firstNumber) {
        firstNumber = Number(str[index])
        questionMarkCounter = 0
      } else {
        secondNumber = Number(str[index])
        if (firstNumber + secondNumber === 10) {
          sumsUp10 = true
          if (questionMarkCounter !== 3) {
            result = false
            break
          }
          firstNumber = secondNumber
          questionMarkCounter = 0
        }
      }
    } else if (/\?/.test(str[index])) {
      questionMarkCounter++
    }
  }

  return result && sumsUp10
}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));

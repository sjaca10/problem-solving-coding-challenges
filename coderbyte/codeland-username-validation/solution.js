function CodelandUsernameValidation(str) { 
  return /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/.test(str)
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));

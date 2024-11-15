import re

def CodelandUsernameValidation(strParam):
  match = re.search("^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$", strParam)
  return "true" if match else "false"

# keep this function call here 
print(CodelandUsernameValidation(input()))

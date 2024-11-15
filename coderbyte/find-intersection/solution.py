def FindIntersection(strArr):
  convertToInt = lambda array: [int(v.strip()) for v in array.split(",")]
  first = convertToInt(strArr[0])
  second = convertToInt(strArr[1])

  arrayResult = []
  for value in first:
    if value in second:
      arrayResult.append(str(value))

  result = ','.join(arrayResult) if len(arrayResult) > 0 else "false"

  return result

# keep this function call here 
print(FindIntersection(input()))

def QuestionsMarks(strParam):
  first_number = None
  second_number = None
  question_mark_count = 0
  sums_up = False
  result = True
  for char in strParam:
    if char.isnumeric():
      if not first_number:
        first_number = int(char)
        question_mark_count = 0
      else:
        second_number = int(char)
        total = first_number + second_number
        if total == 10:
          sums_up = True
          if question_mark_count != 3:
            result = False
            break
          first_number = second_number
          question_mark_count = 0
    elif char == '?':
        question_mark_count += 1

  return "true" if result and sums_up else "false"

# keep this function call here 
print(QuestionsMarks(input()))

/** O(n^2) */
function FindIntersection(strArr) { 
  const firstSet = strArr.shift().split(", ")
  const secondSet = strArr.shift().split(", ")

  const intersection = firstSet.filter((element) => secondSet.includes(element))

  return intersection.length > 0 ? intersection.join() : false
}
   
// keep this function call here 
console.log(FindIntersection(readline()));

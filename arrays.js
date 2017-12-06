
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var sameArray = array.unshift(element)
  return sameArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

console.log(addElementToBeginningOfArray(chocolateBars, "test"))

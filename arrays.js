
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray;
}

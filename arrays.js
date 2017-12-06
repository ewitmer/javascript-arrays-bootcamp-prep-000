
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var myArray = array;
  myArray.unshift(element)
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray;
}
*/
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars,candyString) {
return [candyString,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,candyString){
  chocolateBars.unshift(candyString)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars,candyString) {
return [...chocolateBars,candyString];
}

function destructivelyAddElementToEndOfArray(chocolateBars,candyString){
  chocolateBars.push(candyString)
  return chocolateBars
}

function accessElementInArray(chocolateBars,candyString){
  return chocolateBars[2]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars,candyString){
  chocolateBars.shift() 
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars,candyString){
 return chocolateBars.slice(1)
} 

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0,chocolateBars.length -1)
} 
// Overview
// Let's take a little while to create a few (hopefully familiar) functions. These should give you some experience iterating over and mutating arrays.
//
// Instructions
// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.
//
// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array
// Recap
// That was super fun, right?

Array.prototype.uniq = function(){
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (!uniqueArray.includes(this[i])) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
}

Array.prototype.twoSum = function(){
  let result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 1; j < this.length; j++) {
      if (j <= i) {continue;}
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
}
let a = [[1,2], [3,4], [5,6]];
let b = [[1,2,8], [3,4,8], [5,6,8]];
Array.prototype.transpose = function() {
  let result = [];

  for (let i = 0; i < this.length; i++){
    subResult = [];
    for (let j = 0; j < this.length; j++){
      if (this[j][i] == undefined) {continue;}
      subResult.push(this[j][i]);
    }
    if (subResult.length > 1){
      result.push(subResult);
    }else {
      continue;
    }
  }
  return result;
}

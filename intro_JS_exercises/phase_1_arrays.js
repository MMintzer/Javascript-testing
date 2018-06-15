//myUniq

Array.prototype.uniq = function(){
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (!uniqueArray.includes(this[i])) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
}

//twoSum returns the indices of elements that sum to 0
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

//transpose switches the rows and columns of nested array.
// this version works with nested arrays that are not squares.
Array.prototype.transpose = function() {
  let result = [];

  for (let i = 0; i < this.length; i++){
    subResult = [];
    for (let j = 0; j < this.length; j++){
      if (this[j][i] === undefined) {continue;}
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

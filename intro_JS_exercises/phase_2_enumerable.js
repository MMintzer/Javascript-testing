//myEach enumerable

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}

//myMap enumerable
Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach(el => result.push(callback(el)));

  return result;
}


//myReduce enumerable.  Works like ruby's inject.  Takes a callback function instead of a proc

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  arr.myEach(el => initialValue = callback(initialValue, el));
  return initialValue;
}


console.log([1,2,3].myReduce( (total, item) => total + item ));

// attempting to write bsearch in js and some debugging

var bsearch = function(arr, target){
  if (arr.length === 0 || (arr.length === 1 && arr[0]!== target)) {
    return -1;
  }

  var mid = Math.floor(arr.length / 2); // JS, unlike ruby has every number as a float.  Need to use Math.floor to floor the number
  if (arr[mid] === target){
    return mid;
  }

  if (target < arr[mid]){
    return bsearch(arr.slice(0, mid), target);
  }

  if (target > arr[mid]){
    var result = bsearch(arr.slice(mid + 1), target);
    return (result === -1  ? -1 : result + 1 + mid); // Don't forget to add the mid when searching the 'right' half =)

  }

}



console.log(bsearch([1, 2, 5, 7, 8, 9], 2)) // => 1

console.log(bSearch([1, 2, 5, 7, 8, 9], 8))  // => 4

console.log(bSearch([1, 2, 5, 7, 8, 9], 9)) // => 5

//it works!



var bsearch = function(arr, target){
  if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) {
    return -1;
  }

  var mid = Math.floor(arr.length / 2);

  if (arr[mid] === target){
    return mid;
  }

  if (arr[mid] > target){
    return bsearch(arr.slice(0, mid), target);
  }

  if (arr[mid] < target){
    var result = bsearch(arr.slice(mid + 1), target);
    return (result === -1 ? -1 : mid + 1 + result);
  }
}

let bSearch = function(arr, target){
  if (arr.length === 0  || (arr.length === 1 && arr[0] !== target)){
    return -1;
  }

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target){
    return mid;
  }

  if (arr[mid] > target){
    return bSearch(arr.slice(0, mid), target);
  }

  if (arr[mid] < target){
    let result = bSearch(arr.slice(mid + 1), target);
    return (result === -1 ? -1 : mid + 1 + result);
  }
}


let select = function(arr, cb){
  let result = [];

  for (i = 0; i < arr.length; i++){
    if (cb(arr[i]) === true){
      result.push(arr[i]);
    }
  }

  return result;
}

let isLessThan = function(num, pivot){
  if (num < pivot){
    return true;
  }else{
    return false;
  }
}

let quickSort = function(arr){
  if (arr.length <= 1){
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];
  let result = [];

  for (let i = 1; i < arr.length; i++){
    if (arr[i] <= pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return result.concat(quickSort(left), pivot, quickSort(right));
}

let a = [5,4,3,2,1]
let b = [98, 47, 66, 12, 10006, 24, 100];
console.log(quickSort(a)); // => [1, 2, 3, 4, 5]
console.log(quickSort(b)); // => [12, 24, 47, 66, 98, 100, 10006]

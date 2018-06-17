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

console.log(bsearch([1, 2, 5, 7, 8, 9], 8))  // => 4

console.log(bsearch([1, 2, 5, 7, 8, 9], 9)) // => 5

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

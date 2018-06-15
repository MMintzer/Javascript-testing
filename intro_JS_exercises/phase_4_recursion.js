//Recursive range

//base case is where the delta range is 0, return empty Array
//inductive step: make a new variable set to the call of range with a range y-1 smaller.  push y-1 into the variable (call will be an array bc of the base case) return call when stack is complete
function range(x, y) {
  if (x === y) {
    return [];
  }

  let call = range(x, y - 1);
  call.push(y - 1);
  return call;
}

//Recursive summation
//base case is when arr length is 0, return 0 to start adding to
//Save the end of array as the last num and return the recursive call the remainder of the array and add lastNum
function sumRec(arr){
  if (arr.length === 0) {
    return 0;
  }

  let lastNum = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length - 1 )) + lastNum
}


//Recursive exponentiation
//base case is the identity of anything ^0 results in 1.
//follow inductive step by calling base * exponentiation of exponent - 1
function exponentiation(base, exponent) {
  if (exponent === 0) {
    return 1;
  }else {
    return (base * exponentiation(base, exponent - 1));
  }
}

//Recursive fibs

//require [0,1] to build fib sequence.  If n < 3 we can return the slice of the base case.  let a variable fibs be equal to the recursive call of n - 1.  fibs is an array.  generate the next fib and push into the fibs.
function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

//Recursive range

function range(x, y) {
  if (x === y) {  //base case
    return [];
  }

  let call = range(x, y - 1); //inductive step
  call.push(y - 1);
  return call
}

//Recursive summation
function sumRec(arr){
  if (arr.length === 0) {
    return 0;
  }

  let lastNum = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length - 1 )) + lastNum
}


//Recursive exponentiation
function exponentiation(base, exponent) {
  if (exponent === 0) {
    return 1;
  }else {
    return (base * exponentiation(base, exponent - 1));
  }
}

//Recursive fibs
function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

//Recursive range

function range(x, y) {
  if (x === y) {  //base case
    return [];
  }

  let call = range(x, y - 1); //inductive step
  call.push(y - 1);
  return call
}

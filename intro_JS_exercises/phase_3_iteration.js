// Overview
// Let's do a few slightly more involved problems with arrays. These should be pretty familiar.
//
// Instructions
// Write the following functions:
//
// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm
// String#substrings - receives a string, returns an array of all substrings
// Recap
// These implementations should be almost identical to those we created in Ruby. Sadly, there is no parallel assignment in JavaScript, but we do get that really cool ++ operator.

Array.prototype.myBubblesort = function() {
  let sorted = false;


  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i++){
      if (this[i] > this[i + 1]){
        [this[i], this[i + 1]] = [this[i + 1], this[i]]; // fancy way to get around no parallel assignment
        sorted = false
      }
    }


    return this;
  }
};

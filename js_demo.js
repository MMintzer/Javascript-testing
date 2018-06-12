"use strict";

function soundMaker(sound, times){

  // closure
  function makeSound(){ //makeSound captured the sound vairable
    console.log(`${sound}`);
  }

  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

soundMaker("woof", 5)








// basic summation function with a
// summer function inside it



function summation(arr){
  let sum = 1;


 //this is a closer because it captured the arr from above
  function summer(){
    for(let i = 0; i < arr.length; i++){
      sum *= arr[i];
    }
  }

  summer();

  return sum;

}


// some testing 
console.log(summation([1,2,3,4]));

// what we do after it has been captured changes the variable outside of the scope too!

//asynchronous!
//weird way to write the below
// let callback = function(){
//   console.log("it has been 5 seconds");
// }
//
// let timeToWait = 5000; //ms
// global.setTimeout(callback, timeTowait)


// cooler way

// global.setTimeout(function(){
//   console.log("it has been 5 seconds");
// }, 5000);
//this is ES5 syntax, not es6

//ayyy it works!


//es6 syntax here  it is prefered\/

global.setTimeout(() => {
  console.log("it has been 5 seconds");
}, 5000);


// madLib
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}



//using backticks for string to interpolate... INTERESTING!



// isSubstring
// Input
//
// A String, called searchString.
// A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.
//
// > isSubstring("time to program", "time")
// true
//
// > isSubstring("Jump for joy", "joys")
// false

function isSubstring(string, substring){
  return string.includes(substring);
}



// Phase II - JS Looping Constructs
// Carry on! Know your loops!
//
// fizzBuzz
// 3 and 5 are magic numbers.

function fizzBuzz(num){
  var results = [];
	for(var i = 1; i <= num; i++){
		if(i % 5 === 0 && i % 3 === 0){
			results.push('FizzBuzz');
		} else if(i % 3 === 0){
			results.push('Fizz');
		} else if(i % 5 === 0){
			results.push('Buzz');
		} else {
			results.push(i);
		}
	}

  return results;
}

// isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.
//
// > isPrime(2)
// true
//
// > isPrime(10)
// false
//
// > isPrime(15485863)
// true
//
// > isPrime(3548563)
// false


function isPrime(num){
  if (num < 2){
    return false;
  }
  if (num === 2){
    return true;
  }

  for(let i = 2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }

  return true;
}
// sumOfNPrimes
// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.
//
// > sumOfNPrimes(0)
// 0
//
// > sumOfNPrimes(1)
// 2
//
// > sumOfNPrimes(4)
// 17

function sumOfNPrimes(n){
  let answer = 0;
  let primescount = 0;
  let i = 2;

  while (primescount < n){
    if (isPrime(i)) {
      answer += i
      primescount++;
    }
    i++;
  }

  return answer;
}


// Write a function titleize that takes an array of names and a function (callback). titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.

// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined

function titleize(arr, cb){
  let titleized = arr.map(name => `Mx. ${name} Jingleheimer Schmidt`)
  cb(titleized);
};
titleize(["Mary", "Brian", "Leo"], (arr) => {
  arr.forEach(name => console.log(name));
});

// Syntax error discoved.  Thanks JSlinter!



// Phase II: Constructors, Prototypes, and this
// First write a constructor function for an elephant. Each elephant should have a name, height (in inches), and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").
//
// Next write a few prototype functions that will be shared among all elephants:
//
// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!
// Make sure to create an elephant and test all of these functions out on them method style!

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goesphrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);

let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);

let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);

let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// Now let's create a function called paradeHelper that we'll use to have an elephant parade. It should take a single elephant as an argument; this way, we can pass it as a callback to forEach when called on our herd. Make sure to store it as a property on the Elephant object. You can populate it with any console.log statement you want to build your parade (e.g. "_______ is trotting by!").


Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

herd.forEach(Elephant.paradeHelper)

// Ellie is trotting by!
// Charlie is trotting by!
// Kate is trotting by!
// Micah is trotting by!

// Phase IV: Closures
// Let's make a function dinerBreakfast. Ultimately, we want it to return an anonymous closure, which we will be able to use to keep adding breakfast foods to our initial order.
//
// > let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
// > bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
// > bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."
// Hints:
//
// order should be initialized to a starting order (e.g. scrambled eggs and bacon) before the anonymous function can do its work.
// The closure should capture/close over order
// What should the return value of dinerBreakfast be?
// Which function should take in the additional food as an argument?
// Make sure you can call it multiple times and keep chaining on more breakfast foods!


function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs, please";
  console.log(order);

  return function (addition) {
    order = `${order.slice(0,order.length-8)} and ${addition}, please`;
    console.log(order);
  }
}

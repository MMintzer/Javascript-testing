print = console.log(console);
// madLib
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`
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
  return string.includes(substring)
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

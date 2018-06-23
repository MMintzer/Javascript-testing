// //Simple timeout function.	After 5 seconds, alerts 'HAMMER TIME'
//
window.setTimeout(function() {
	alert('HAMMER TIME');
}, 5000);


//timeout function with a closure.
function hammerTime(time) {
	window.setTimeout(function() {
		alert(`IT IS ${time} HAMMER TIME`);
	}, time);
}


//would you like some tea and biscuits?	Need to comment everything else out and run the file in node.	We need to nest the questions.

// const readline = require('readline');
//
// const reader = readline.createInterface({
//	 input: process.stdin,
//	 output: process.stdout,
//	 terminal: false
// });
//
// function teaAndBiscuits () {
//	 reader.question('Would you like some tea?', function (res) {
//		 console.log(`You replied ${res}.`);
//		 reader.question('Would you like some biscuits?', function (res2) {
//			 console.log(`You replied ${res2}.`);
//
//			 const first = (res === 'yes') ? 'do' : 'don\'t';
//			 const second = (res2 === 'yes') ? 'do' : 'don\'t';
//
//			 console.log(`So you ${first} want tea and you ${second} want biscuits.`);
//			 reader.close();
//		 });
//	 });
// }
//
// teaAndBiscuits();


// Ways to Call a Function (Cats chasing dogs)

function Cat() {
	this.name = 'Markov';
	this.age = 3;
}

function Dog() {
	this.name = 'Noodles';
	this.age = 4;
}

Dog.prototype.chase = function(cat) {
	console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase(Markov); //=> `My name is Noodles and I'm chasing Markov! Woof!`

Noodles.chase.call(Markov, Noodles); //call sets this to Markov instead of noodles => `My name is Markov and I'm chasing Noodles! Woof!`
Noodles.chase.apply(Markov, [Noodles]); // apply takes an array as a required second argument => `My name is Markov and I'm chasing Noodles! Woof!`

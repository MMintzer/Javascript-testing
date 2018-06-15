//fedined a Cat constructor function
function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

//a method which returns a string with the instance names interpolated
Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
}

// makings some kitties
const gnar = new Cat("Gnar", "Matt")
const sasha = new Cat("Sasha", "Matt")
const doug = new Cat("Doug", "Charles")

// changing the first method
Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`
}

Cat.prototype.meow = function() {
  console.log("meoooowww")
}

//altering a method in a specific instance of a cat.  This is generally not a good idea as it will cause problems if you ever want to change the function.
gnar.meow = function(){
  console.log("ROARRRR!")
}

//myBubblesort

Array.prototype.myBubblesort = function() {
  let sorted = false;


  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i++){
      if (this[i] > this[i + 1]){
        [this[i], this[i + 1]] = [this[i + 1], this[i]]; // fancy way to get around no parallel assignment  Wrap it in an array.
        sorted = false
      }
    }


    return this;
  }
};

//mySubstrings
String.prototype.mySubstrings = function(){
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i, j));
    }
  }

  return substrings;
}

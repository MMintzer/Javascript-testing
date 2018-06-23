// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

//constructor
function Game() {
  this.towers = [
    [3, 2, 1],
    [],
    []
  ]
}

Game.prototype.validMove = function(fromTower, toTower) {
  if (fromTower > 2 || fromTower < 0) {
    return false;
  }
  if (toTower > 2 || toTower < 0) {
    return false;
  }
  if (fromTower === toTower) {
    return false;
  }
  if (this.towers[fromTower].length === 0) {
    return false;
  }
  if (this.towers[fromTower].last() > this.towers[toTower].last()) {
    return false;
  }
  return true;
}

Game.prototype.makeMove = function(fromTower, toTower) {
  let fromDisk = this.towers[fromTower].pop();
  this.towers[toTower].push(fromDisk);
}

Array.prototype.last = function() {
  if (this.length === 0) {
    return 0;
  }
  return this[this.length - 1];
}


Game.prototype.run = function() {
  // until won
  //   get move
}
Game.prototype.promptMove = function() {
  console.log(this.towers);
  rl.question("\n Enter your move (ex 1, 2)", (input) => {
      if (validMove(input)) {
        makeMove(input)
      } else {
        throw 'Invalid move';
      }) rl.close();
  });
}

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

//constructor
function Game() {
  this.moves = 0;
  this.towers = [
    [3, 2, 1],
    [],
    []
  ];
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
  this.moves += 1;
  let fromDisk = this.towers[fromTower].pop();
  this.towers[toTower].push(fromDisk);
}

Array.prototype.last = function() {
  if (this.length === 0) {
    return 0;
  }
  return this[this.length - 1];
}

Game.prototype.won = function() {
  if (this.towers[1].toString() === "3,2,1") {
    return true;
  }
  if (this.towers[2].toString() === "3,2,1") {
    return true;
  }

  return false;
}

let game = new Game();


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

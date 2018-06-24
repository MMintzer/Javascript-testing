const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

//constructor
function Game() {
  this.moves = 0;
  this.towers = [
    [3, 2, 1],
    [],
    []
  ];
}
console.log("hi1")
Game.prototype.validMove = function(fromTower, toTower) {
  if (fromTower > 2 || fromTower < 0) {
    console.log("hi2")
    return false;
  }
  if (toTower > 2 || toTower < 0) {
    console.log("hi3")
    return false;
  }
  if (fromTower === toTower) {
    console.log("hi4")
    return false;
  }
  if (this.towers[fromTower].length === 0) {
    console.log("hi5")
    return false;
  }
  if (this.towers[fromTower].last() < this.towers[toTower].last()) {
    console.log("hi6")
    return false;
  }
  return true;
}

Game.prototype.makeMove = function(fromTower, toTower) {
  if (this.validMove(fromTower, toTower)) {
    this.moves += 1;
    let fromDisk = this.towers[fromTower].pop();
    this.towers[toTower].push(fromDisk);
  }
  else{
    throw 'Not a valid move';
  }
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


Game.prototype.promptMove = function(rl, callback) {
  console.log(this.towers);
  rl.question("Enter a from tower: ", start => {
    let startTowerIdx = parseInt(start);
    rl.question("Enter a to tower: ", end => {
      let endTowerIdx = parseInt(end);
      callback(startTowerIdx, endTowerIdx);
    })
  })
}





Game.prototype.run = function() {
  while (!game.won) {
    promptMove();
  }
}

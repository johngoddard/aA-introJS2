// HanoiGame.prototype.run = function() {
  // until one of the towers has all three disks in order
    // until move is valid
      // get move from player (start and finish)
      // another input if move isnt valid
//};

class Game {
  constructor(rl, callback) {
    this.towers = [[4,3,2,1], [], []];
    this.rl = rl;
    this.completionCallback = callback;
  }


  run(){
    if(!this.isWon()){
      this.promptMove(this.move);
    }else{
      console.log("You win!");
      this.completionCallback();
    }
  }

  move(start, end){
    if(this.isValidMove(start, end)){
      this.towers[end].push(this.towers[start].pop());
      return true;
    }else{
      console.log("Invalid move!");
      return false;
    }
  }

  promptMove(callback) {
    let game = this;
    this.print();
    this.rl.question("Enter a start, end move: ", (answer) => {
      let [startTowerIdx, endTowerIdx] = answer.split(",").map((el) => parseInt(el));

      callback.call(game, startTowerIdx, endTowerIdx);

      game.run();
    });
  }

  isValidMove(start, end) {
    if (start < 0 || start > 2 || end < 0 || end > 2 ||
    this.towers[start].length === 0) {
      return false;
    }

    let startDisk = this.towers[start].slice(-1)[0];

    if(this.towers[end].length === 0 ||
      startDisk < this.towers[end].slice(-1)[0]){
      return true;
    } else{
      return false;
    }
  }

  print(){
    this.towers.forEach((tower, index) => {
      console.log(`Tower ${index}: ${JSON.stringify(tower)}`);
    });
  }

  isWon(){
    if(this.towers[1].length === 4 || this.towers[2] === 4){
      return true;
    }else{
      return false;
    }
  }
}


module.exports = Game;

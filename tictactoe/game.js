let Board = require('./board.js');

class Game {

  constructor(rl, callback) {
    this.board = new Board();
    this.callback = callback;
    this.rl = rl;
    this.currentMark = 'X';
  }

  run() {
    let winner = this.board.isWon();

    if(this.board.isTie()){
      console.log("It's a tie!");
      this.board.print();
      this.callback();
    } else if (!winner) {
      this.promptMove(this.board.placeMark);
    } else {
      console.log(`Winner is ${winner}!`);
      this.board.print();
      this.callback();
    }
  }

  promptMove(callback) {
    let game = this;
    this.board.print();

    this.rl.question(`${this.currentMark} enter a move (e.g 1,2):`, (answer) => {
      let pos = answer.split(",").map(el => parseInt(el));
      if(this.board.isValidMove(pos)){
        callback.call(this.board, pos, this.currentMark);
        this.switchPlayer();
      } else{
        console.log("Invalid move!");
      }
      game.run();
    });
  }

  switchPlayer(){
    this.currentMark = this.currentMark === 'X' ? 'O' : 'X';
  }
}

module.exports = Game;

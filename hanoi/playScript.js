let Game = require("./hanoigame.js");
const readline = require ('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let completionCallback = function completion() {
  rl.question("Do you want to play again?(y/n): ", (answer) => {
    if (answer === 'y') {
      let game = new Game(rl, completionCallback);
      game.run();
    } else {
      console.log("peace");
      game.rl.close();
    }
  });
};


let game = new Game(rl, completionCallback);
game.run();

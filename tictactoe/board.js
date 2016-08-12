class Board {
  constructor(){
    this.grid = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];
  }

  empty(pos){
    let [x, y] = pos;
    return this.grid[x][y] !== "_" ? false : true;
  }

  placeMark(pos, mark){
    let [x, y] = pos;
    this.grid[x][y] = mark;
  }

  isValidMove(pos){
    let [x, y] = pos;
    if(x >=0 && x < 3 && y >=0 && y < 3 && this.empty(pos)){
      return true;
    } else{
      return false;
    }
  }

  print() {
    this.grid.forEach((row, idx) => {
      let str = "";
      row.forEach((el) => {
        if (el) {
          str = str.concat(` ${el} `);
        } else {
          str = str.concat(' _ ');
        }
      });
      console.log(`${idx}   ${str}`);
    });
  }

  isWon(){
    let winner = null;
    if (this.rowWin()) {
      winner = this.rowWin();
    } else if (this.colWin()) {
      winner = this.colWin();
    } else if (this.diaWin()) {
      winner = this.diaWin();
    }
    return winner;
  }

  rowWin(){
    let winner = null;
    this.grid.forEach((row) => {
      if(row[0] !== "_" && row[0] === row[1] && row[2] === row[1]){
        winner = row[0];
      }
    });

    return winner;
  }

  colWin(){
    let winner = null;

    for(let i = 0; i < 3; i++){
      let mark = this.grid[0][i];
      if(mark !== "_"){
        if (this.grid[1][i] === mark && this.grid[2][i] === mark) {
          winner = mark;
        }
      }
    }

    return winner;
  }
  diaWin(){
    let winner = null;
    let mark = this.grid[0][0];
    if (this.grid[1][1] === mark && this.grid[2][2] === mark && mark !== "_") {
      winner = mark;
    }
    mark = this.grid[2][0];
    if (this.grid[1][1] === mark && this.grid[0][2] === mark && mark !== "_") {
      winner = mark;
    }

    return winner;
  }

  isTie(){
    let tie = true;
    this.grid.forEach((row) => {
      row.forEach((pos) => {
        if(pos === '_'){
          tie = false;
        }
      });
    });
    return tie;
  }
}
module.exports = Board;

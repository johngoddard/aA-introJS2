const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumber(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    rl.question("Please enter a number: ", (answer) => {
      let input = parseInt(answer);
      sum += input;
      console.log(`Current sum is: ${sum}`);
      addNumber(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    rl.close();
  }

}

addNumber(0, 3, sum => console.log(`Total Sum: ${sum}`));

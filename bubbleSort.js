const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} > ${el2} (yes/no): `, (answer) => {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });

}

// askIfGreaterThan(4, 3, (boolean) => console.log(boolean));

function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length -1 ){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if(isGreaterThan){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }

      innerBubbleSort(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }else{
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(swaps){
    if(swaps){
      innerBubbleSort(arr, 0, false, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
      rl.close();
    }
  }

  outerBubbleSortLoop(true);
}

let arr = [5,3,1,2,4];
absurdBubbleSort(arr, (arr2) => console.log(arr2));

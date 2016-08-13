const readline = require ('readline');
const Promise = require('promise');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function askTea(){
  return new Promise(function(resolve, reject){
    rl.question('Would you like some tea?', function (res) {
      console.log(`You replied ${res}.`);
      if(res === 'yes' || res === 'no'){
        resolve(res);
      }else{
        reject(res);
      }
    });
  });
}

askTea().then((response) => askBiscuits(response))
        .then((response) => printOrder(response))
        .catch((res) => console.log(`${res} is not a good answer!`));
// });
        // .catch(function(error) {console.error("Failed!", error);});

function askBiscuits(res1){
  return new Promise(function(resolve, reject){
    rl.question('Would you like some biscuits?', function (res) {
      console.log(`You replied ${res}.`);
      rl.close();
      if(res === 'yes' || res === 'no'){
        resolve([res1, res]);
      }else{
        reject(res);
      }
    });
  });
}

function printOrder(response){
  let [res1, res2] = response;
  const first = (res1 === 'yes') ? 'do' : 'don\'t';
  const second = (res2 === 'yes') ? 'do' : 'don\'t';

  console.log(`So you ${first} want tea and you ${second} want biscuits.`);
}


askTea();

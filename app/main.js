const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
rl.question("$ ", (answer) => {
  rl.close();
});

function promptUser() {
  rl.question("$ ", (answer) => {
    if (answer) {
      console.log(`${answer}: command not found`);
      
    }
    promptUser();
  });
}

promptUser();


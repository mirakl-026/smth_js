const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what?", (answer) => {
    // log the answer in a database
    console.log(`thank you 4 feedback: ${answer}`);
    rl.close();
})
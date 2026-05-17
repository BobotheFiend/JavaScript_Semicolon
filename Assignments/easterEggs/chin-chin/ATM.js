const prompt = require("prompt-sync")();

let userPin = Number(prompt("Enter PIN: "));
      
let pin = 0901;

if (userPin == pin){
    console.log("Welcome back!\nYour balance is N581,000");
}
else {
    console.log("Incorrect PIN");
}

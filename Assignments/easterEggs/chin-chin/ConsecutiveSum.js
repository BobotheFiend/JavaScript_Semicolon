const prompt = require("prompt-sync")();

let number = Number(prompt("Enter an integer: "));
      
let sum = (number * (number + 1)) / 2;

console.log(`sum of consecutive numbers from 1 to ${number} is ${sum}`);
  

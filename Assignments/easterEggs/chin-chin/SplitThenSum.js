const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a three digit integer: "));
let originalNumber = number;
let sum = 0;

while (number > 0){
    let remainder = number % 10;
    sum += remainder;
    number = number / 10;
}
console.log(`Sum of originalNumber digits is ${sum}`);

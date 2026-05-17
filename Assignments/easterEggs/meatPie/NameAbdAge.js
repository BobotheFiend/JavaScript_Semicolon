const prompt = require("prompt-sync")();

let name = prompt("Enter your First name: ")
let age = Number(prompt("Enter your age: "))

console.log(`I am ${name}\nI am ${age}`);


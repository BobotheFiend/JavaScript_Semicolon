const prompt = require("prompt-sync")();

let age = Number(prompt("What is your age: "))

const user = {
name: "John", 
age: age
};
console.log(user)
if (age >= 18)
    console.log("Adult")
else
    console.log("Minor")

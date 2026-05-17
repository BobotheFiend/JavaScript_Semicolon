const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "))

let minusByFive = number - 5

console.log(`${number} - 5 = ${minusByFive}`)

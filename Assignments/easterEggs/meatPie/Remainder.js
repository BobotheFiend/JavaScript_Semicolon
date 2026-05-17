const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "))

let remainderWhenDivideByTwo = number % 2

console.log(`When ${number} / 2, the Remainder = ${remainderWhenDivideByTwo}`)

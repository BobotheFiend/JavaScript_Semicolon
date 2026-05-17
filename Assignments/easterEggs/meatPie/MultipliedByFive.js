const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "))

let productUsingFive = number * 5

console.log(`${number} x 5 = ${productUsingFive}`)

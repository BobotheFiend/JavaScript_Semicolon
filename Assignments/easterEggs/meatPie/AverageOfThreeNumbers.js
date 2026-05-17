const prompt = require("prompt-sync")();

let firstNumber = Number(prompt("Enter a number: "))
let secondNumber = Number(prompt("Enter another Number: "))
let thirdNumber = Number(prompt("Enter another Number: "))

let average = (firstNumber + secondNumber + thirdNumber) / 3

console.log(` The average of ${firstNumber+secondNumber+thirdNumber} = ${average} `)

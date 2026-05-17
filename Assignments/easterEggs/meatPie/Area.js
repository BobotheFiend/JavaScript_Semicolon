const prompt = require("prompt-sync")();

let length = Number(prompt("Enter a length: "))
let width = Number(prompt("Enter a width: "))

let area = length * width

console.log(`THe area = ${area}`)

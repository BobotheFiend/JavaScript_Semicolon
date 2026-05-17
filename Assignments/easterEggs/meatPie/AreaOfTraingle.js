const prompt = require("prompt-sync")();

let base = Number(prompt("Enter a base: "))
let heigth = Number(prompt("Enter a heigth: "))

let area = 0.5 * base * heigth

console.log(`THe area = ${area}`)

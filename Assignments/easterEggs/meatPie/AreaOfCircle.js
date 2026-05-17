const prompt = require("prompt-sync")();

let radius = Number(prompt("Enter a radius: "))

let area = 3.14 * (radius * radius)

console.log(`The area of a Circle = ${area} cm`)

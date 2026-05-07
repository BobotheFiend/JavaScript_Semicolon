const prompt = require("prompt-sync")();

let price = Number(prompt("What is the price?... "))
let stockCheck = prompt("Is it in stock (true/false)?... ")

if (stockCheck == false)
    stockCheck = "Out of Stock"
const product = {
"price": price,
inStock: stockCheck
}
console.log(product)
if (price > 1000)
    console.log("Expensive")
else
    console.log("Affordable")

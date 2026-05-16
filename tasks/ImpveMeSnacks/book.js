
const prompt = require("prompt-sync")();
let title = (prompt("Enter the Title... "))
let author = (prompt("Enter the author... "))
let year = Number(prompt("Enter the year... "))
let Genre = (prompt("Enter the genre... "))

const book = {

"Title": title,
"author": author,
"year": year,
"Genre": Genre
}

console.log(book)

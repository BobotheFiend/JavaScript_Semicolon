const prompt = require("prompt-sync")();

let id = Number(prompt("What is your ID: "))

let available  = Boolean(prompt("Is the Book available (true/false): "))
if (available == true){
let available = true
}
else{
let available = false
}

let count = Number(prompt("What is the amout of books: "))

let name = String(prompt("What is the name of the book: "))

let author = String(prompt("Who is the author of the book: "))

let user = {
"ID": id,
isAvaliable: available,
"Count": count,
"Name": name,
"Author": author
}

console.log(user)

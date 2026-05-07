const prompt = require("prompt-sync")();

let name = prompt("What is your name?... ")
let age = Number(prompt("What is your age?... "))
let courseOfStudy = prompt("What is your course of study?...  ")

let student = {

"Name": name,
"Age": age,
"Course of Study": courseOfStudy
}

console.log(student)


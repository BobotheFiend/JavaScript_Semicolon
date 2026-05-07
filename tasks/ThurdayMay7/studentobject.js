const prompt = require("prompt-sync")();

const name = prompt("Input student name: ")
let score = Number(prompt("Input score: "))
let grade = "";

if(score >= 90 && score <= 100){
    grade = "A"
    }
else if (score >= 80 && score <= 89){
    grade = "B"
    }
else if (score >= 70 && score <= 79){
    grade = "C"
    }
else if (score >= 0 && score < 70){
    grade = "F"
    }
else{
    grade = "Invalid Score"
    }

const student = {

"Name": name,
"Score": score,
"Grade": grade
}
console.log(student)

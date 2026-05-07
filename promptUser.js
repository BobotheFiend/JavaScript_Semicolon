const prompt = require("prompt-sync")();

let age = Number(prompt("What is your age? "))

if(age > 0 && age <= 12){
    console.log("A child")
    }
else if(age > 12 && age < 18){
    console.log("A Teenager")
    }
else if (age >= 18 && age < 50){
    console.log("An Adult")
    }
else if(age >= 50 && age <= 100){
    console.log("An Old Adult")
    }
else {
        console.log("Not Existing")
    }

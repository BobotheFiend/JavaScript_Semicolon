const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "))

if (number > 0){
    console.log(number + " is Positive" )
    }
else if(number < 0){
    console.log(number + " is Negative")
    }
else{
    console.log(number + " is Zero")
    }

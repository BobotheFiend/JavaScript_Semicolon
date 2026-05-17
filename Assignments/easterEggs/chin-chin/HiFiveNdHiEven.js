const prompt = require("prompt-sync")();

const number = Number(prompt("Enter the Number: "))

if (number % 5 == 0){
    console.log("HiFive");
}
else if(number % 2 == 0){
    console.log("HiEven")
}
else{
console.log("HiNothing!!!!");
}

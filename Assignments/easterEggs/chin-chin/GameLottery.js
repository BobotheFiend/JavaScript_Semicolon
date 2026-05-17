const prompt = require("prompt-sync")();

let number = Math.floor(Math.random() * 419)
let userInput = Number(prompt("Enter a two digit number: "));
    

let numberAtLeft = Math.floor(number / 10);
let numberAtRight = Math.floor(number / 10);
let userNumberAtLeft = userInput / 10;
let userNumberAtRight = userInput % 10;
           

if (number == userInput){
    console.log("Lottery number is %02d and your number is %02d, You won $10000", number, userInput);
}

else if (numberAtLeft == userNumberAtRight && numberAtRight == userNumberAtLeft){
    console.log("Lottery number is %02d and your number is %02d, You won $3000", number, userInput);
}
else if (numberAtLeft == userNumberAtRight || numberAtRight == userNumberAtLeft || numberAtLeft == userNumberAtLeft || numberAtRight == userNumberAtRight){
    console.log("Lottery number is %02d and your number is %02d, You won $1000", number, userInput);
}
else{
    console.log("Lottery number is %02d and your number is %02d Nothing for you!!! ", number, userInput);
}
 

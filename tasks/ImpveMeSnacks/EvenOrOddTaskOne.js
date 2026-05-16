
const prompt = require("prompt-sync")();

let number = prompt("Enter a number.. ");

if (number % 2 == 0){

    console.log(number + " " + "It's an Even Number");

}
else{
    console.log(number + " " + "It is an Odd Number");
}

const prompt = require("prompt-sync")();

let numberOne = Number(prompt("Enter a number: "));
let numberTwo = Number(prompt("Enter a number: "));

let divsion = numberOne / numberTwo;

if (numberTwo == 0){
    console.log("0 / 0 ... it cannot gooo");
}
else {
    console.log("%d/%d = %d", numberOne, numberTwo, division);
}

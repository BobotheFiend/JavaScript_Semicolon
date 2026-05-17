const prompt = require("prompt-sync")();

let numberOne = Number(prompt("Enter first edge: "));
let numberTwo = Number(prompt("Enter second edge: "));
        
let perimeter = 2 * (numberOne + numberTwo);

if (numberOne != numberTwo){
    console.log(`Perimeter = ${perimeter}`);
}

else {
    console.log("Invalid");
}

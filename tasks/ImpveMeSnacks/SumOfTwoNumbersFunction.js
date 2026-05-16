
function displaySum(firstNumber, secondNumber){

    return firstNumber + secondNumber;
}

const prompt = require("prompt-sync")();

let numOne = Number(prompt("Enter a number: "))
let numTwo = Number(prompt("Enter a second number: "))

let addUp = displaySum(numOne, numTwo)

console.log(`The sum of ${numOne} + ${numTwo} = ${addUp}`)



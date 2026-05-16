
const prompt = require("prompt-sync")();
let number = (prompt("Enter the number... "))

function numberChecker(number){
    let numbers = []
    let count = 1;
    let index = 0;
    while( count <= number){
        numbers[index++] = count;
        count++;
               
        }
    return numbers
    }

let loopingThrough = numberChecker(number);
console.log(loopingThrough);

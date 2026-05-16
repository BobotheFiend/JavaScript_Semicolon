
const prompt = require("prompt-sync")();
let number = (prompt("Enter the number... "))

function numberChecker(number){

    if (number > 0){
        return "Positive Number!";
    }
    else if (number < 0) {
        return "Negative Number!";
    }
    else{
        return "0 is 0"
    }
}

let numberChecking = numberChecker(number);
console.log(numberChecking)

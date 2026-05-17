const prompt = require("prompt-sync")();

let number = Number(prompt("Enter Integer: "));

if (number % 4 == 0 && number % 5 == 0){
    console.log(`${number} is divisible by 4 and 5`);
}
else {
    console.log(`${number} is not divisible by 4 and 5`);
}

if (number % 4 == 0 || number % 5 == 0){
    console.log(`${number} is divisible by 4 or 5`);
}
else {
    console.log(`${number} is not divisible by 4 or 5`);
}

if (number % 4 != 0 && number % 5 == 0 || number % 4 == 0 && number % 5 != 0 && (!number % 4 == 0 && number % 5 == 0)){
    console.log(`${number} is divisible by 4 or 5 but not both`);
}
else {
    console.log(`${number} is either divisible by 4 and 5 or not divisible by any`);
}

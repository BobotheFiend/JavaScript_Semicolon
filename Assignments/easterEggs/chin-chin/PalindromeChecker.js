const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a three digit integer: "));
let originalNumber = number;
let reverseNumber = 0;

while(number > 0){
    let remainder = number % 10;
    reverseNumber = reverseNumber * 10 + remainder;
    number = Math.floor(number / 10);

}

if (reverseNumber == originalNumber){
    console.log(`${originalNumber} ---> ${reverseNumber}, A Palindrome`);
}
else{
    console.log(`${originalNumber} ---> ${reverseNumber}, NOT Palindrome`)
}

const prompt = require("prompt-sync")();

let number = prompt("Enter a four digit integer[1234]: ");
let reverse = 0;
originalNumber = number;

if (number.length == 4){
    
    while(number > 0){
    
        let remainder = Number(number) % 10;
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
    
    }console.log(`Reverse of ${originalNumber} = ${reverse}`);
    
}  
else
    console.log(`Not a four digit integer`);      

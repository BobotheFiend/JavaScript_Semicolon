const prompt = require("prompt-sync")();

let hourlyWage = Number(prompt("Enter amount per hour: "));
let hoursWorked = Number(prompt("Enter amount of hours worked for: "));

if(hoursWorked <= 40 ){
    let payment = hourlyWage;
    console.log(`${payment}`)
}

else if (hoursWorked  > 40){
    let payment == 

const prompt = require("prompt-sync")();

let principal = Number(prompt("Enter principal: "));
let time = Number(prompt("Enter time: "));
let rate = Number(prompt("Enter rate: "));
        
let simpleInterest = (principal * time * rate) / 100;
let compoundInterest = principal * (Math.pow((1 + (rate / 100)), time));

console.log(`Simple Interest = ${simpleInterest}\nCompound Interest = ${compoundInterest}`);
       

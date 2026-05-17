const prompt = require("prompt-sync")();

let hour = Number(prompt("Enter an hour from 0 - 23: "));
    
if (hour >= 5 && hour <= 11){
    console.log("Good Morning");
} 
else if (hour >= 12 && hour <= 17){
    console.log("Good Afternoon");
} 
else if (hour >= 18 && hour <= 21){
    console.log("Good Evening");
} 
else if (hour >= 22 && hour <= 23){
    console.log("Good Night");
} 
else if (hour >= 0 && hour <= 4){
    console.log("Good Night");
} 
else{
    console.log("Not valid hour input");
} 

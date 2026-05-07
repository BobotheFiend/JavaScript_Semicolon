const prompt = require("prompt-sync")();

const points = Number(prompt("Enter points: "))
if (points >= 100){
     console.log("Gold")
    }
  else{
    console.log("Silver")
}

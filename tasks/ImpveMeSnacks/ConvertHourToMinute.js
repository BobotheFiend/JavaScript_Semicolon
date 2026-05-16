const prompt = require("prompt-sync")();

function hourMinutes(time){
    return time * 60
}


let hourInput = prompt("Enter hour(s): ")
let functionCoverter = hourMinutes(hourInput)

console.log(`${hourInput}hrs to minutes = ${functionCoverter}mins`)



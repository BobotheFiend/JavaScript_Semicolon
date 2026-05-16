const prompt = require("prompt-sync")();

let day = prompt("Enter the Day of the week: ")

switch(day){

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
                    console.log("It's the WEEKDAY!");
                    break;
    case "Saturday":
    case "Sunday":
                    console.log("It's the WEEKEND!!!");
                    break;
    default:
                    console.log("Invalid Day of the week")

    }

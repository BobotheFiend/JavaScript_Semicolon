const prompt = require("prompt-sync")();

const year = Number(prompt("Enter the year: "))
const month = prompt("Enter the month: ")

switch(month){

    case "January":
    case "JANUARY":
    case "january":

    case "March":
    case "MARCH":
    case "march":

    case "May":
    case "MAY":
    case "may":

    case "July":
    case "JULY":
    case "july":

    case "August":
    case "AUGUST":
    case "august":

    case "October":
    case "OCTOBER":
    case "october":

    case "December":
    case "DECEMBER":
    case "december":
                    console.log("31 Days")
                    break;
                
    case "September":
    case "SEPTEMBER":
    case "september":

    case "April":
    case "APRIL":
    case "april":

    case "June":
    case "JUNE":
    case "june":

    case "November":
    case "NOVEMBER":
    case "november":
                    console.log("30 Days")
                    break;

    case "February":
    case "FEBRUARY":
    case "february":
                    if (year % 4 == 0 || year % 400 == 0){
                    console.log("29 Days")
                    }
                    else{
                    console.log("28 Days")
                    }
                    break;

    default: console.log("Invalid Month");
}

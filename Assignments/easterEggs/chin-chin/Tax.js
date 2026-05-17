const prompt = require("prompt-sync")();

let filingStatus = Number(prompt("Enter filing Status: 0 for Single filers, 1 for married filing jointly or qualified widow(er), 2 for married filing separately and 3 for head of household: "));
let taxableIncome = Number(prompt("Enter taxable Income: "));

let tax;

switch(filingStatus){

    case 0:
        if (taxableIncome >= 0 && taxableIncome <= 8350){
                tax = 0.1 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 8351 && taxableIncome <= 33950){
                tax = 0.15 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 33951 && taxableIncome <= 82250){
                tax = 0.25 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 82251 && taxableIncome <= 171550){
                tax = 0.28 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 171551 && taxableIncome <= 372950){
                tax = 0.33 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 372951){
                tax = 0.35 * taxableIncome;
                console.log("Your tax is %f", tax);
        }
        break;

    case 1:
        if (taxableIncome >= 0 && taxableIncome <= 16700){
            tax = 0.1 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 16701 && taxableIncome <= 67900){
            tax = 0.15 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 67901 && taxableIncome <= 137050){
            tax = 0.25 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 137051 && taxableIncome <= 208850){
            tax = 0.28 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 208851 && taxableIncome <= 372950){
            tax = 0.33 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 372951){
            tax = 0.35 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        break;

    case 2:
         if (taxableIncome >= 0 && taxableIncome <= 8350){
            tax = 0.1 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 8351 && taxableIncome <= 33950){
            tax = 0.15 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (ftaxableIncome >= 33951 && taxableIncome <= 68525){
            tax = 0.25 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 68526 && taxableIncome <= 104425){
            tax = 0.28 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 104426 && taxableIncome <= 186475){
            tax = 0.33 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 186476){
            tax = 0.35 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        break;
        
    case 3:
        if (taxableIncome >= 0 && taxableIncome <= 11950){
            tax = 0.1 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 11951 && taxableIncome <= 45500){
            tax = 0.15 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 45501 && taxableIncome <= 117450){
            tax = 0.25 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 117451 && taxableIncome <= 190200){
            tax = 0.28 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 190201 && taxableIncome <= 372950){
            tax = 0.33 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        else if (taxableIncome >= 372951){
            tax = 0.35 * taxableIncome;
            console.log("Your tax is %f", tax);
        }
        break;

}

        

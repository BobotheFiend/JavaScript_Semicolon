const prompt = require("prompt-sync")();
const accountBalance = Number(prompt("Enter balance: "))

const account = { balance: accountBalance, isBlocked: false}
console.log(account)
if (accountBalance < 100){
    console.log("Low Balance")
    }
else{
    console.log("Sufficient Balance")
    }

if (account.isBlocked === true){
    console.log("Account Blocked!")
    }
else{
    console.log("Account is Active!")
    }


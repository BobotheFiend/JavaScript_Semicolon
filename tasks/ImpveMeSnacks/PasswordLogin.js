
const prompt = require("prompt-sync")();
let userName = (prompt("Enter the username... "))
let password = (prompt("Enter the password... "))

function passwordChecker(userName, password){

    if (userName.length >= 3 && (password.length >= 8 && password.length < 26)){
        if(userName == "BobotheFiend" && password == "TheBoywhocriedwolf22"){
            return "LoggedIn!! Welcome Back";
        }
        else{
            return "Invalid UserName or Password!"    
            }
    }
    else {
        return "Invalid Username and Password!";
    }
}

let passwordLogin = passwordChecker(userName, password);
console.log(passwordLogin)

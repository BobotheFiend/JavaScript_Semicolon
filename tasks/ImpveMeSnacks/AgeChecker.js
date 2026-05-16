
const prompt = require("prompt-sync")();
let usersAge = Number(prompt("Enter the age.. "))

function ageChecker(usersAge){
//    let ageText = " "
    if (usersAge > 0 && usersAge < 14){
//        let ageText = "You're a Child!"
        return "You're a Child!";
    }
    else if (usersAge >= 14 && usersAge < 18){
//       let ageText = "You're a Teenager!"
        return "You're a Teenager!";
    }
    else if (usersAge >= 18){
//        let ageText = "You're an Adult";
        return "You're an Adult";
    }
//    return ageText;
}

let ageText = ageChecker(usersAge);
console.log(ageText)

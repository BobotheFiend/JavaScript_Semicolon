// By declaration and by name
//const sayHello = function(name, age){
//    return `\t\t\tHello ${name}!\n  \t\t\t${age} years old and runnig\n \t\t\tYou're my Moon and Stars\n`;
//}
//
//let age = 10
//let name = "Ps-5"
//console.log(sayHello(name, age));
//
//
//
// Arrow function
//const greetings = (name, age) => {
//    return `\t\t\tHello ${name}!\n  \t\t\t${age} years old and runnig\n \t\t\tYou're my Moon and Stars\n`;
//}
//
//let ages = 22
//let names = "Ameoba"
//console.log(greetings(names, ages));

//Another arrow functions
//const sayGreetings = (name, age) => `\t\t\t${name}!!!\n\t\t\tArise!!\n\t\t\t$You have {age}months to go`
//
//let namezz = "HORIZONS"
//let months = 10;
//console.log(sayGreetings(namezz, months))

function add(firstNumber, secondNumber){

    return firstNumber + secondNumber;
}

function sub(numberOne, numberTwo){
    return numberOne - numberTwo;
}
//Testing you will export the file to the test file in other to test it

module.exports = { add, sub }

//New way to test

//export const add = function(firstNumber, secondNumber){
//
//    return firstNumber + secondNumber;
//}
//
//export const sub = function(firstNumber, secondNumber){
//    return firstNumber - secondNumber
//}

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter length of a: "));
let b = Number(prompt("Enter length of b: "));
let c = Number(prompt("Enter length of c: "));
  
console.log("Linear equation is %fx + %fx = %f" , a, b, c);
let x = (c - b) / a;

if (a == 0.0){
    console.log("Equation has no unique solution");
}
else{
    console.log("x = ", x);
}
  

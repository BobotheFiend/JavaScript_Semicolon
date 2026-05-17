const prompt = require("prompt-sync")();

let weight = Number(prompt("Enter weight of package: "));
      

if (weight > 0 && weight <= 2){
    console.log("Shipping is 2.5");
}
else if (weight > 2 && weight <= 4){
    console.log("Shipping is 4.5");
}
else if (weight > 4 && weight <= 10){
    console.log("Shipping is 7.5");
}
else if (weight > 10 && weight <= 20){
    console.log("Shipping is 10.5");
}
else if (weight > 20){
    console.log("The package cannot be shipped");
}
else{
    console.log("Try again");
}

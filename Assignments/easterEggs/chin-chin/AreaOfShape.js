const prompt = require("prompt-sync")();

let radius = Number(prompt("Enter radius: "))
let height = Number(prompt("Enter height: "))
       
let surfaceArea = 2 * 3.142857 * radius * (radius + height);
let volume = 3.142857 * radius * radius * height;
console.log("Surface area = %f\nVolume = %f", surfaceArea, volume);

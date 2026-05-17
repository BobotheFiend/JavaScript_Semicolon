const prompt = require("prompt-sync")();

let adj = Number(prompt("Enter length of adjacent sides: "));
let opposite = Number(prompt("Enter length of opposite sides: "));
        
let hypSq = (adj * adj) + (opposite * opposite);
let hyp = Math.sqrt(hypSq);

console.log("The Hypotenuse is", hyp);

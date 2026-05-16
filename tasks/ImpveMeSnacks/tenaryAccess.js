const prompt = require("prompt-sync")();

const age = prompt("What is the age?... ")

 let access = (age >= 18) ? console.log("Granted") : console.log("Denied");

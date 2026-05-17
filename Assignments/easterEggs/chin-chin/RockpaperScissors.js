const prompt = require("prompt-sync")();

let player = Number(prompt("Choose Scissor(0), Rock(1), Paper(2): "));
let game = Math.floor(Math.random() * 3);

console.log(`Computer played ${game}`);

if ((game && player == 0) || (game && player == 1) || (game && player == 2)){
    console.log("Draw");
}
else if ((game == 0 && player == 1) || (game == 1 && player == 2) || (game == 2 && player == 0)){
    console.log("You win!");
}
else if ((game == 1 && player == 0) || (game == 2 && player == 1) || (game == 0 && player == 2)){
    console.log("Computer wins");
}
 

let colors = ["Red", "Green", "Yellow"];
let randomIndex = Math.floor(Math.random() * colors.length);

let options = colors[randomIndex];

if (options == "Green"){
    console.log(`${options} --> GO!`)
    }
else if(options == "Red"){
    console.log(`${options} --> STOP!`)
    }
else if (options == "Yellow"){
    console.log(`${options} --> READY!`)
    }
else{
    console.log("Not an Option")
    }


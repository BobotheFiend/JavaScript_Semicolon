const user = {name: "Amaka",age: 25,country: "Nigeria"}; 

function users(user){
    
    let {name, age} = user;
    return {name, age}

}

console.log(users(user));

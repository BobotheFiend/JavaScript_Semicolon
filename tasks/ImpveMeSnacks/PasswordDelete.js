const user = {username: "admin",password: "12345"};

function remover(user){
    delete user.password;
    return user;
}

console.log(remover(user));

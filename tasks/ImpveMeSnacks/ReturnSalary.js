const employee = {name: "Dapo",role: "Engineer",salary: 50000};

function salary(employee){
    
    let {salary} = employee;
    return {salary}

}

console.log(salary(employee));

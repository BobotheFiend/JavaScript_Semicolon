const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };
function destructuring(employee){


let {name, salary} = employee;
return {name, salary};
}





console.log(destructuring(employee));

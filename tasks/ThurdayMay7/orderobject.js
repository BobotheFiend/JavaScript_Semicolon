const prompt = require("prompt-sync")();
let status = prompt("what is the status? pending/Shipped/Delivered.... ")

const order = {"Status": status}
console.log(order)

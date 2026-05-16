const phone = {brand: "Samsung",battery: 75};

function batteryChecker(phone){
    let {battery} = phone;
    return {battery};
}

console.log(batteryChecker(phone));

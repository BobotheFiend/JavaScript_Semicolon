const car = {brand: "Toyota",model: "Camry",available: true};

function isAvailable(car){

if (car.available == true)
    car.available = "This car is available"
    let {available} = car
    return {available};

}

console.log(isAvailable(car))

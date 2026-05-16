 const order = {id: 1,status: true}

function getStatus(order){
    let statusForOrder = (order.status === true) ? order.status = "Delivered" : order.status = "Pending..."

    let {status} = order;
    return {status};
}

console.log(getStatus(order));


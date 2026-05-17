function ridersPayment(grade, successfulDeliveries){

    switch(grade){
        case 1: 
             if(successfulDeliveries > 0 && successfulDeliveries < 50){
                let payment = (successfulDeliveries * 160) + 5000
                
                return payment;}
            else{
                return "Invalid payGrade, check the number of successful deliveries and match it to the right pay grade"};
        case 2: 
             if(successfulDeliveries >=  50 && successfulDeliveries < 60){
                let payment = (successfulDeliveries * 200) + 5000;
                return payment;}
            else{
                return "Invalid payGrade, check the number of successful deliveries and match it to the right pay grade"};
        case 3: 
             if(successfulDeliveries >= 60  && successfulDeliveries < 70){
            let payment = (successfulDeliveries * 250) + 5000;
                return payment;}
            else{
                return "Invalid payGrade, check the number of successful deliveries and match it to the right pay grade"};
        case 4: 
             if(successfulDeliveries >= 70){
                let payment = (successfulDeliveries * 500) + 5000;
                return payment;}
            else{
                return "Invalid payGrade, check the number of successful deliveries and match it to the right pay grade"};
        case 0: 
             if(successfulDeliveries == 0 ){
                let payment = `Always try not to make zero deliveries! you would get fired!\n${successfulDeliveries + 5000}`;
            else{
                return "Invalid payGrade, check the number of successful deliveries and match it to the right pay grade"};
                return payment;}
        default: 
                return "No Payment";
        }

}

module.exports =  { ridersPayment }

//const prompt = require("prompt-sync")();
//
//let deliveries = Number(prompt("Enter the amount of delivers the rider made: "))
//let theGradeOfPay = Number(prompt("0. 0\n1. 1 - 50\n2. 50 - 59\n3. 60-69\n4. 70 nd above\nEnter the grade of pay: "));
//
//let riderPayment = ridersPayment(theGradeOfPay,deliveries);
//console.log(`The payment for ${deliveries} deliveries = ${riderPayment}`);

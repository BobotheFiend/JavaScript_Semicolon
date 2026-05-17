const { ridersPayment } = require('../BackToSenderLogistics')

test("test that the function takes in atleast 2 number that is less than 50 and returns the accurate payment", () => {


    let grade = 1;
    let firstDelivery = 25;
    let secondDelivery = 45;
    let thirdDelivery = 1;
    let fourthDelivery = 49;
    
    expect(ridersPayment(grade, firstDelivery)).toBe(9000);
    expect(ridersPayment(grade, secondDelivery)).toBe(12200);
    expect(ridersPayment(grade, thirdDelivery)).toBe(5160);
    expect(ridersPayment(grade, fourthDelivery)).toBe(12840);


})

test("test that the function takes in atleast 2 number that is within 50 - 59 and returns the accurate payment", () => {


    let grade = 2;
    let firstDelivery = 55;
    let secondDelivery = 59;
    
    expect(ridersPayment(grade, firstDelivery)).toBe(16000);
    expect(ridersPayment(grade, secondDelivery)).toBe(16800);

})

test("test that the function takes in atleast 2 number that is less than 60-69 and returns the accurate payment", () => {


    let grade = 3;
    let firstDelivery = 69;
    let secondDelivery = 63;
    
    expect(ridersPayment(grade, firstDelivery)).toBe(22250);
    expect(ridersPayment(grade, secondDelivery)).toBe(20750);

})

test("test that the function takes in atleast 2 number that is 70 and above, and returns the accurate payment", () => {


    let grade = 4;
    let firstDelivery = 70;
    let secondDelivery = 99;
    let thirdDelivery = 100;
    let fourthDelivery = 150;
    let fifthDelivery = 80;
    
    expect(ridersPayment(grade, firstDelivery)).toBe(40000);
    expect(ridersPayment(grade, secondDelivery)).toBe(54500);
    expect(ridersPayment(grade, thirdDelivery)).toBe(55000);
    expect(ridersPayment(grade, fourthDelivery)).toBe(80000);
    expect(ridersPayment(grade, fifthDelivery)).toBe(45000);


})

test("test that the function takes in atleast 2 number that is less than 1 and returns the base pay payment", () => {


    let grade = 0;

    let firstDelivery = 0;
    
    expect(ridersPayment(grade, firstDelivery)).toBe(9000);
})

test("test that the function takes in atleast 2 number and returns no payment if it doesnt align with the pay grade or ", () => {


    let gradeOne = 1;
    let gradeTwo = 2;
    let gradeThree = 3;
    let gradeFour = 4;
    let gradeZero = 0;
    let gradeSix = 6;
    let gradeSeven = 7;

    let firstDelivery = 70;
    let secondDelivery = 22;
    let thirdDelivery = 100;
    let fourthDelivery = 150;
    let fifthDelivery = 80;
    let sixthDelivery = 50;
    
    expect(ridersPayment(gradeOne, firstDelivery)).toBe("Invalid payGrade, check the number of successful deliveries and match it to the right pay grade");
    expect(ridersPayment(gradeTwo, secondDelivery)).toBe("Invalid payGrade, check the number of successful deliveries and match it to the right pay grade");
    expect(ridersPayment(gradeSix, thirdDelivery)).toBe("No Payment");
    expect(ridersPayment(gradeZero, fourthDelivery)).toBe("Invalid payGrade, check the number of successful deliveries and match it to the right pay grade");
    expect(ridersPayment(gradeThree, sixthDelivery)).toBe("Invalid payGrade, check the number of successful deliveries and match it to the right pay grade");
    expect(ridersPayment(gradeSeven, fifthDelivery)).toBe("No Payment");

})

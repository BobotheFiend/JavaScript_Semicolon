// You must export from your code file and import it in your test file for javascripts testing
// The dot indicates that you leave a folder. and the slash means to access the environment of the folder you are in. the more dots you have more you exit out of the folder.
// user expect instead of assert
//import { add, subtract } from './Arithemetic-Function'

const { add, sub } = require('./Arithemetic-Function')

test("test addition of two positive numbers", () => {

    let firstNumber = 100;
    let secondNumber = 1000;

    let numb3 = 800;
    let num4 = 200;

    expect(add(firstNumber, secondNumber)).toBe(1100)

    expect(add(numb3, num4)).toBe(1000)

})

test("test addition of two negative numbers", () => {

    let firstNumber = -10000;
    let secondNumber = -10000;

    let numb3 = -800;
    let num4 = -500;

    expect(add(firstNumber, secondNumber)).toBe(-20000)

    expect(add(numb3, num4)).toBe(-1300)

})



test("test that addition of a positive and negative numbers works accurately", () => {

    let firstNumber = -100;
    let secondNumber = 1000;

    let numb3 = 300;
    let num4 = -100;

    expect(add(firstNumber, secondNumber)).toBe(900)

    expect(add(numb3, num4)).toBe(200)

})

test("test addition of two negatives numbers gives negative results", () => {

    let firstNumber = -100;
    let secondNumber = -400;

    let numb3 = -800;
    let num4 = -200;

    expect(add(firstNumber, secondNumber)).toBe(-500)

    expect(add(numb3, num4)).toBe(-1000)

})

test("test subtraction of two positive numbers", () => {

    let firstNumber = 100;
    let secondNumber = 50;

    let numb3 = 800;
    let num4 = 600;

    expect(sub(firstNumber, secondNumber)).toBe(50)

    expect(sub(numb3, num4)).toBe(200)

})


test("test sub of two negative and positive numbers is accurate", () => {

    let firstNumber = -10000;
    let secondNumber = 4000;

    let numb3 = -800;
    let num4 = 500;

    expect(add(firstNumber, secondNumber)).toBe(-6000)

    expect(add(numb3, num4)).toBe(-300)

})

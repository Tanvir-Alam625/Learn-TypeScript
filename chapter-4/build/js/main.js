"use strict";
/**
 * class implementation
 * class implementation with interface
 * class implementation with method parameters
 */
// simple class 
class Calculator1 {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    getAdd() {
        return this.firstNumber + this.secondNumber;
    }
    getSub() {
        return this.firstNumber - this.secondNumber;
    }
    getMulti() {
        return this.firstNumber * this.secondNumber;
    }
    getDivision() {
        return this.firstNumber / this.secondNumber;
    }
}
const calculate1 = new Calculator1(4, 2);
console.log(calculate1.getAdd());
class Calculator2 {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    getAdd() {
        return this.firstNumber + this.secondNumber;
    }
    getSub() {
        return this.firstNumber - this.secondNumber;
    }
    getMulti() {
        return this.firstNumber * this.secondNumber;
    }
    getDivision() {
        return this.firstNumber / this.secondNumber;
    }
}
const calculate2 = new Calculator2(4, 4);
console.log(calculate2.getMulti());
class Calculator3 {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    getAdd(params) {
        const defaultCalculation = this.firstNumber + this.secondNumber;
        const paramsCalculation = params.reduce((prev, next) => prev + next);
        return defaultCalculation + paramsCalculation;
    }
}
const calculate3 = new Calculator3(4, 4);
console.log(calculate3.getAdd([464, 3546, 464, 536, 46]));

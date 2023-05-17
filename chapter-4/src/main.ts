/**
 * class implementation
 * class implementation with interface
 * class implementation with method parameters
 */

// simple class 
class Calculator1 {
    firstNumber: number;
    secondNumber: number;
    constructor(firstNumber:number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber
    }
    getAdd(): number{
        return this.firstNumber + this.secondNumber;
    }
    getSub(): number {
        return this.firstNumber - this.secondNumber;
    }
    getMulti(): number{
        return this.firstNumber * this.secondNumber;
    }
    getDivision(): number{
        return this.firstNumber / this.secondNumber;
    }
}
const calculate1 = new Calculator1(4,2);
console.log(calculate1.getAdd());


// class with interface
interface CalculatorType{
firstNumber: number;
secondNumber: number;
getAdd: () => number;
getSub: () => number;
getMulti: () => number;
getDivision: () => number;
}
class Calculator2 implements CalculatorType {
    firstNumber
    secondNumber
    constructor(firstNumber:number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber
    }
    getAdd(){
        return this.firstNumber + this.secondNumber;
    }
    getSub() {
        return this.firstNumber - this.secondNumber;
    }
    getMulti(){
        return this.firstNumber * this.secondNumber;
    }
    getDivision(){
        return this.firstNumber / this.secondNumber;
    }
}
const calculate2 = new Calculator2(4,4);
console.log(calculate2.getMulti());

// class with interface && parameters
interface CalculatorTypeWithParams{
firstNumber: number;
secondNumber: number;
getAdd: (params:number[]) => number;
}
class Calculator3 implements CalculatorTypeWithParams {
    firstNumber
    secondNumber
    constructor(firstNumber:number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber
    }
    getAdd(params:number[]){
        const defaultCalculation = this.firstNumber + this.secondNumber;
        const paramsCalculation = params.reduce((prev:number, next:number) => prev + next)
        return defaultCalculation + paramsCalculation;
    }
}
const calculate3 = new Calculator3(4,4);
console.log(calculate3.getAdd([464,3546,464,536,46]));





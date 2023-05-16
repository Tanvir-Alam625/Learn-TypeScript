/**
 * Array Type
 * Object Type
 * Type feature
 * interface feature
 * void | explicitly function type
 */

// Array Types 
let brand: string[] = ['tesla']; // string type of array
let number: number[] = [34,5,56,534,64] //string type of array
let isActive: boolean[] = [true,false] //boolean type of array
let user: (string | number | boolean)[] = ['Tanvir', 43, true] // mixed type of array , like union type
let user1: [string, number, boolean] = ["Tanvir", 45, false] // tuple  type

// Object Types 
let user2: object ={
    name: "Tanvir Alam",
    email: "tanvir@example.com"
}
// Object type with properties validation
let user3: {name:string, age:number, isActive:boolean} = {
    name: "Tanvir",
    age:23,
    isActive: false
}

// Object type with type keyword
type user4Type ={
    name: string,
    age:number,
    isActive:boolean
}
let user4: user4Type = {
    name: "Tanvir",
    age:23,
    isActive: false
}

// Object type with interface keyword
interface user5Type {
    name: string,
    age:number,
    isActive:boolean
}

let user5: user5Type = {
    name: "Tanvir",
    age:23,
    isActive: false
}

// Object type with optional properties
type user6Type ={
    name: string,
    age?:number,
    isActive:boolean
}
let user6: user6Type = {
    name: "Tanvir",
    isActive: false
}


// function Return type definition 
const getUserInfo = (name:string): string => `Hello! ${name}`;
console.log(getUserInfo(user5.name));

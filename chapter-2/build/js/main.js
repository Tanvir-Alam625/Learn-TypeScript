"use strict";
/**
 * Array Type
 * Object Type
 * Type feature
 * interface feature
 * void | explicitly function type
 */
// Array Types 
let brand = ['tesla']; // string type of array
let number = [34, 5, 56, 534, 64]; //string type of array
let isActive = [true, false]; //boolean type of array
let user = ['Tanvir', 43, true]; // mixed type of array , like union type
let user1 = ["Tanvir", 45, false]; // tuple  type
// Object Types 
let user2 = {
    name: "Tanvir Alam",
    email: "tanvir@example.com"
};
// Object type with properties validation
let user3 = {
    name: "Tanvir",
    age: 23,
    isActive: false
};
let user4 = {
    name: "Tanvir",
    age: 23,
    isActive: false
};
let user5 = {
    name: "Tanvir",
    age: 23,
    isActive: false
};
let user6 = {
    name: "Tanvir",
    isActive: false
};
// function Return type definition 
const getUserInfo = (name) => `Hello! ${name}`;
console.log(getUserInfo(user5.name));

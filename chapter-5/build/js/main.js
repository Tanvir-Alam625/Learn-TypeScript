"use strict";
/**
 * dynamic value => Index signature
 * dynamic with loop => Index signature
 * dynamic with function => Index signature
 */
// type definition with index signature
// interface UserType {
//     [index: string]: string | number | boolean
//     name: string,
//     age: number,
//     email: string,
//     active: boolean
// }
// declare object 
const user = {
    name: 'tanvir',
    age: 23,
    email: 'tanvir@example.com',
    active: false
};
//  ------------ Start Dynamic Value --------- 
const nameProperty = 'name';
console.log('hard coded: ', user['name']); // you use hard code
// console.log('with index signature: ', user[nameProperty]); // you can't use without index signature
console.log('reference by interface type: ', user[nameProperty]); //  reference by interface type
// or 
console.log('reference by object: ', user[nameProperty]); // reference by object 
//  ------------ End Dynamic Value --------- 
// ----------------- Start Loop ----------------
// without index signature -> reference by interface type -> exm-1
for (const key in user) {
    console.log(`${key}:`, user[key]);
}
// without index signature -> reference by object -> exm-2
for (const key in user) {
    console.log(`${key}:`, user[key]);
}
// with index signature -> exm-3
// for (const key in user) {
//     console.log(`${key}:`, user[key]);
// }
// ----------------- End Loop ----------------
// ----------------- Start Function ----------------
// without index signature -> reference by interface type -> exm-1
const getUser = (name) => {
    return user[name];
};
console.log(getUser(nameProperty));
// without index signature -> reference by object -> exm-2
const getUse2 = (name) => {
    return user[name];
};
console.log(getUse2(nameProperty));
// with index signature -> reference by object -> exm-3
// const getUse3 = (name: string): string | number | boolean => {
//     return user[name];
// }
// console.log(getUse3(nameProperty));
// ----------------- End Function ----------------

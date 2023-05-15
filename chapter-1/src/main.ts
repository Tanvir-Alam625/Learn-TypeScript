//  Type Steps 
/**
 * string type ✓
 * number type ✓
 * boolean type ✓
 * union type ✓
 * any type ✓
 */

// declaration  type
let userName: string; // String Type
let userId: number;  // Number Type
let isLogin: boolean;  // Boolean Type
let album:any;  //Any Type
let userStatus: 'loading' | 'error' | 'success';  // Union Type


// assign value 
userName = "tanvir";        // You can assign only string type of value
userId = 23;                // You can assign only number type of value
isLogin = false;            // You can assign only boolean type of value
album = "tanvir alam";      // You can assign any type of value
userStatus = 'loading';     // You can assign limited of value what declared of the type

// OutPut
console.log(userName,userId,isLogin, album, userStatus);

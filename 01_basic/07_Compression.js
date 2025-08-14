
// ***************************************Compression of data types *********************************************

let num = 10
let str = "jitendra"
let bool = true
let obj = { name: "jitendra" }
let arr = [1, 2, 3, 4] 
console.log(typeof num);    // number
console.log(typeof str);    // string
console.log(typeof bool);   // boolean
console.log(typeof obj);    // object
console.log(typeof arr);    // object   

console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true

console.log(false < 0);       // false
console.log(false == 0);      // true
console.log(false === 0);     // false
console.log(false > 0);       // false
console.log(false >= 0);      // true
console.log(false < "0");     // false
console.log(false == "0");    // true
console.log(false === "0");   // false
console.log(false > "0");     // false
console.log(false >= "0");    // true

console.log(undefined > 0);      // false
console.log(undefined == 0);     // false
console.log(undefined === 0);    // false
console.log(undefined < 0);      // false
console.log(undefined >= 0);     // false


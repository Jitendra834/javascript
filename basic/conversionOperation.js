let a = "54"
let b = "123abc"

console.log(a);
console.log(typeof a);          // string

let valueInNumber1 = Number(a)
let valueInNumber2 = Number(b)

console.log(typeof valueInNumber);  // number
console.log(valueInNumber1)         // 54
console.log(valueInNumber2)         //NaN


// "54" convert to => 54
// "54abc" convert to => NaN
// true convert to => 1; false => 0


// Convert number to string

// let someNumber = 123
// let someString = String(someNumber)
// console.log(someString);            // "123"
// console.log(typeof someString);     // string


// ***************************************** Operations**********************************************
let num1 = 10
let negativeNum = -num1
console.log(negativeNum);          // -10

let str1 = "jitendra"
let str2 = "prajapati"
let str3 = str1 + " " + str2
console.log(str3);                // jitendra prajapati 

console.log("1" + 2);          // "12"
console.log(1 + "2");          // "12"
console.log(1 + 2);            // 3
console.log("1" + 2 + 3);      // "123"
console.log(1 + 2 + "3");      // "33"
console.log("1" + (2 + 3));    // "15"
console.log(1 + 2 + 3 + "4");  // "64"
console.log(1 + 2 + "3" + 4);  // "334"
console.log("1" + 2 + 3 + 4);  // "1234"
console.log(1 + "2" + 3 + 4);  // " 1234"
console.log(1 + 2 + 3 + 4);    // 10                                                                                                    


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
let someNumber = 123
let someString = String(someNumber)
console.log(someString);            // "123"
console.log(typeof someString);     // string
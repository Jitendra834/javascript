const number = 400
console.log(number)         // 400

const balance = new Number(5000000)
console.log(balance)       // [Number: 5000000]

console.log(balance.toFixed(2)) // 5000000.00
console.log(balance.toLocaleString('en-IN')) // 50,00,000.00
console.log(balance.toPrecision(4)) // 5.000E+6
console.log(balance.valueOf()) // 5000000
console.log(balance.toString()) // "5000000"





// ********************************MATHS********************************************


console.log(Math)
console.log(Math.abs(-4))  // Negative to positive
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.1)) // 5    // if above 4 then next ans 5

console.log(Math.min(4, 2, 8, 6)) // 2
console.log(Math.max(4, 2, 8, 6)) // 8
console.log(Math.random()) // Random number between 0 and 1  this is use in DICE Game 
console.log(Math.floor((Math.random()*10)+1)) // Random number between 1 and 10


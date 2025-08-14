let myDate = new Date()
console.log(myDate.toString());            // Current date and time
console.log(myDate.toDateString());       // Current date
console.log(myDate.toTimeString());       // Current time

console.log(typeof myDate)                 // object

let  createDate = new Date(2025,8,14)
console.log(createDate.toString());       // Fri Sep 14 2025 00:00:00 GMT+0530 (India Standard Time)
console.log(createDate.toDateString());   // Fri Sep 14 2025
console.log(createDate.toTimeString());   // 00:00:00 GMT+0530 (India Standard Time)
console.log(createDate.getFullYear());    // 2025
console.log(createDate.getMonth());       // 8
console.log(createDate.getDate());        // 14 

console.log(createDate.toLocaleTimeString());         // 5 (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

let myTimeStamp = new Date()
console.log(myTimeStamp.getTime());       // Current timestamp in milliseconds
console.log(createDate.getTime());        // Timestamp for the specified date in milliseconds

console.log(myTimeStamp.getFullYear());   // Current year
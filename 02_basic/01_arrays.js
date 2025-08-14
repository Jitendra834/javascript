const myarray = [1, 2, 3, 4, 5];
console.log(myarray.length); // Output: 5
console.log(myarray[0]);     // Output: 1
console.log(myarray);  // Output: [1, 2, 3, 4, 5]



const myHeros = ["Spider-Man", "Iron Man", "Captain America"];
console.log(myHeros.length); // Output: 3
console.log(myHeros[0]);     // Output: Spider-Man
console.log(myHeros);        // Output: ["Spider-Man", "Iron Man", "Captain America"]
myHeros.push("Thor");        // Adds "Thor" to the end of the array

console.log(myHeros);        // Output: ["Spider-Man", "Iron Man", "Captain America", "Thor"]
myHeros.pop();               // Removes the last element from the array
console.log(myHeros);        // Output: ["Spider-Man", "Iron Man", "Captain America"]

myHeros.unshift("Hulk");     // Adds "Hulk" to the beginning of the array
console.log(myHeros);        // Output: ["Hulk", "Spider-Man", "Iron Man", "Captain America"]

myHeros.shift();             // Removes the first element from the array
console.log(myHeros);        // Output: ["Spider-Man", "Iron Man", "Captain America"]

myHeros.includes('Iron Man');  // Checks if 'Iron Man' is in the array


const newArray = myHeros.join()

console.log(newArray);        // Output: "Spider-Man,Iron Man,Captain America"
console.log(typeof newArray); // Output: string 


//  video time 3:29:42

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);           // Output: ["thor", "Ironman", "spiderman", ["batman", "superman", "flash"]]

const all_array = marvel_heros.concat(dc_heros);
console.log(all_array)                 // Output: ["thor", "Ironman", "spiderman", "batman", "superman","flash"]


// Spred

const all_array_spread = [...marvel_heros, ...dc_heros];
console.log(all_array_spread)          // Output: ["thor", "Ironman", "spiderman", "batman", "superman","flash"]


const another_array = [1,2,3,[4,5,6],7,8,[9,[10,11],12],13]
const real_array = another_array.flat(Infinity)
console.log(real_array)                 // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
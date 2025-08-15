//Singleton

//object literal

const user = {
    name :'Jitendra',
    age : 21,
    location :'Ahmedabad',
    email : 'jitendra@example.com'
}

console.log(user.name, user.email)             // Output: Jitendra jitendra@example.com
console.log(user['name'], user['email'])       // Output: Jitendra jitendra@example.com 


//change email 
user.email = 'jitu@example.com'
console.log(user.email)                        // Output: jitu@example.com

// function 

user.greeting = function(){
    console.log("Hello user ")
}
console.log(user.greeting())
// *************************** # Primitive dataTypes ********************   
// 1.String
// 2.Number
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol
// 7.BigInt



// ********************* Non-Primitive Data Types***********************
// 1.Object
     const person = {
        name : "jitendra",
        age: 21,
        isMarried : false
     };
     console.log(person.name);  // jitendra


     // 2.Array
     const fruits = ["apple", "banana", "orange"];
     for(let i=0;i<fruits.length;i++)
     console.log(fruits[i]); 



     // 3.Function
     function greet(name) {
         return "Hello, " + name + "!";
     }

    console.log(greet("Jitendra"));


    // *********************************Memory*************************************

    //Stack (Primitive), 
    // Heap (Non-Primitive)
    
    let myName = "Jitendra Prajapati "
    let anotherName = myName
    console.log(myName);          // Jitendra Prajapati

    let user = {
        email: "jitendra@example.com",
        upiId: "1234567890"
    }
    let user1 = user
    user1.email = "another@example.com"
    console.log(user.email);        // another@example.com
    console.log(user1.email);      // another@example.com
        // change because both use same reference not copy

        
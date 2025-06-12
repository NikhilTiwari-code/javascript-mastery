// const user1 = function () {

//     console.log(this.username);
// };

// const myObject = {
//     username: "hiteshwar",
//     user : user1,    //   in object we can also give reference of functions

// }

// myObject.user()
// // Equivalent to:
// myObject.user.call(myObject);  // "this" is explicitly set to myObject



//    **************   DESTRUCTURING OF OBJECT  **************



// const person = { 
//     name: "Alice", 
//     age: 30, 
//     country: "Canada" 
// };

// // Destructure the object:


// const { name, age ,country} = person;

// console.log(name); // "Alice"
// console.log(age); // 30
// console.log(country); // "Canada"



// const person = { name: "Bob" };

// // Extract `name` but rename it to `personName`:
// const { name: personName } = person;

// console.log(personName); // "Bob"
// // console.log(name); // Error: "name" is not defined


//  function greetUser(user) {
//        const name = user.name;
//        const age = user.age;
// //     const { name, age } = user;
//        console.log(`Hello ${name}, you are ${age} years old!`);
//   }

function greetUser({name, age}) {   
    console.log(`Hello ${name}, you are ${age} years old!`); 
}
  
  //const user = { name: "Alice", age: 30 };
  
//   greetUser(user);


const user = {
    id: 1,
    profile: {
      username: "dev_guru",
      email: "dev@example.com",
    },
  };
  
  // Destructure nested properties:
  const {profile: { username, email },} = user;
  
  console.log(username); // "dev_guru"
//   console.log(email); // "dev@example.com"
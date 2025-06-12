// object literal
 
 
 const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);  // this keyword points to object
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

 const userOne = new User("rameswar", 12, true)
 const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);



console.log(userOne===userTwo); // Should print false
// console.log(userOne);
// console.log(userTwo);

console.log(userOne instanceof User);



// constructor function  
  // when new keyword  is used then constructor function is called and creatres,
  //   a new instance of object

//   ************* new keyword**********

//1. whenever we use new keyword then a new empty object is created
//2. this keyword points to new empty object
//3. constructor function is called  and packed all the arguments in this empty object
//4. then added to  this empty object 
//5.finnaly this empty object is returned with the values encoded in it 


// constructor 

//it is reference of itself (function )

//singelton = constructor  , object.create 

//object literals

const mySym = Symbol("key1")

const user = {
    name :"nikhil",
    "fullName":"Nikhil Tiwari",
    [mySym] :"myKey1",
    age :16,
    email:"nikhil@github.com",
    isLoggedIn :false,
    lastLoggedIn :["Monday","Friday"]
}

// console.log(user.email)
// console.log(user[mySym])
// console.log(user["email"])

user.email = "nikhil@google.com";
// console.log(user)

//Object.freeze(user)

user.email= "nikhil@microsoft.com"
console.log(user)

user.greeting = function (){
    console.log(`hello user ,${this.fullName}`)


}

console.log(user.greeting())




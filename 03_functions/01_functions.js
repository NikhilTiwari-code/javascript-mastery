
//  functions are used for reusability of code 
//  functions in js are first class citizens

function sayMyName(){
    console.log("n")
    console.log("i")
    console.log("k")
    console.log("h")
    console.log("i")
    console.log("l")
    
}

// sayMyName()

function addTwoNummbers(param1,param2){

    return param1+param2       //return keyword is used to return a value from a function
    //console.log(param1+param2)
}

 let result = addTwoNummbers(2,4)

 //console.log(result); 


 function loginUserMessage(username="baba"){
    if (!username){
        console.log("please enter a username")
        return
    }
    return `${username} ,just logged in`
 }

 //console.log(loginUserMessage())

 function calculateCartPrice(val1,val2,...num1){
    return num1
 }

 //console.log(calculateCartPrice(100,34,456,678))

 const user = {
    username:"john"  ,
    price :199,
    
 } 

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObject(user)

const array = [200,300,400]

function returnSeconValue(anyarray){
    return anyarray[1]
}

 console.log(returnSeconValue(array))
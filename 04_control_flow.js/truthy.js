//truthy values

const userEmail = []    //truthy
const username = ""      // falsy
const user ={}          // truthy   
function myName(){}     // truthy
const number = "0"      // truthy


if(myName){
    console.log(`email `)
}else{
    console.log(" empty")
}

// falsy values

// false, 0, "", null, undefined, NaN -0


//nullish coalescing operator (??): null undefined

let val ;

val = 5??10; //10
val = null??10; //10
val = undefined??10; //10
val = ""??10; //10
val = null??0??10; //0

// console.log(val);

// ternary operator

// condition ? true : false

const cold = true;

cold? console.log("it is cold"): console.log("it is hot");





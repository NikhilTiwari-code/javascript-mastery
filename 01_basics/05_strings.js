// STRINGS IN JAVASCRIPT

// Strings are used to store text. 
// Strings must be enclosed in quotes. 
// You can use single or double quotes:


//console.log( typeof String) // function

const name = "Nikhil"
const repo = 'javascript-basics';
const repoCount = 1;
const value = 10;
const age = 20;

// console.log(name+repo+repoCount+"Hello World");

//console.log(`Hello my name is :${name} and I have ${repoCount} repo named ${repo}`)

//console.log("Hello my name is :"+name+" and I have "+repoCount+" repo named "+repo )


const gameName = new String("PUBG")

console.log(gameName[0,1,2])
console.log(gameName.length)
console.log(gameName.charAt(0))
console.log(gameName.__proto__)
console.log(gameName.indexOf("U"))

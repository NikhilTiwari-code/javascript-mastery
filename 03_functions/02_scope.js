// functions in js



//global scope

//block scope

//function scope


function sayMyName(){
    console.log("n")
}

sayMyName()

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()

}

 one()


console.log("n")
function addTwoNummbers(num1,num2){
    console.log(num1+num2);
    return num1+num2
}

addTwoNummbers(1,2)

function subtractTwoNUmbers(num1,num2){
    return num1-num2
}

 const result = subtractTwoNUmbers(1,2)
console.log(result);


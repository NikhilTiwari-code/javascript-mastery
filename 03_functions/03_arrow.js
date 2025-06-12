const user = {
    username:"nikesh",
    price :199,

    welcomeMessage :function ()  {
        console.log(`hello ${this.username}`)
        console.log(this)
    }
 }
// user.welcomeMessage();

// user.username= "nikeswar";
// user.welcomeMessage() ;
 
//console.log(this)



const user1 =function () {
    let username="umesh"
    console.log(this.username)

}

const user2 = () => {
    let username="umeshwar"
    console.log(this.username)
}


function user3 (){
    let username="rameshwar"
    console.log(this.username)
}

// user1()
//user2()
// user3()


//arrow function does not have their own this keyword they inherit this keyword from their parent function;

// arrow function defination

// ()=>{}

// const  addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(1,2))

//const addTwo =(num1,num2)=> num1+num2
//const addTwo =(num1,num2)=> (num1+num2)





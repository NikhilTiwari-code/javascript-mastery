// operators

// 1. arithmetic operators
// 2. relational operators
// 3. logical operators
// 4. assignment operators
// 5. comparison operators
// 6. bitwise operators


// 1. arithmetic operators
//  +,-,*,/,%,++,--

//2. relational operators
// <,>,<=,>=,==,!=

// 3. logical operators
// &&,||,!

// 4. assignment operators
// =,+=,-=,*=,/=,%=,>>=,<<=

// 5. comparison operators
// ==,===,!=,!==

// 6. bitwise operators
// &,|,^,~,<<,>>


   //if 
   //if else

   //const isUserLoggedIn = true

//    if(!isUserLoggedIn){
//     console.log(`user logged in`);
    
//    }else{
//     console.log(`user not logged in`);
    
//    }

   let score = 200;

   if (score > 100) {
        let power = "fly"
        //console.log(`User power: ${power}`);

   }

// console.log(`User power: ${power}`);

           // else if


const balance = 1000;

// if(balance<200){
//     console.log(`balance is less than 200`);
    
// }else if(balance<500){
//     console.log(`balance is less than 500`);
    
// }else if(balance>500){
//     console.log(`balance is more than 500`);
    
// }else{
//     console.log(`balance is 500`);
    
// }


const isUserLoggedIn = true;
const debitCard = true;
const loggeeddInFromGoogle = false;
const LoggedInFromEmail = true;


if(isUserLoggedIn  &&  debitCard){
    console.log(`user can buy course`);
    
}else{
    console.log(`please have a credit card and loogedin for couurse purchase`);
}

if(LoggedInFromEmail||loggeeddInFromGoogle){
    console.log(`user logged in`);
}else{
    console.log(`user not logged in`);
}
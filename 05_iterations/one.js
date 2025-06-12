// loops


//for 



//   for (let index = 0; index < 10; index++) {
    
//    console.log(index);

//    for(let j =1; j<=10; j++){
//       console.log(j)
//       if (j==5) {
//          console.log("hello :5");
         
         
//       }
     
// }
// }

// for(let i = 0; i<10; i++){
//     console.log(`outer loop value ,${i}`);
//     for(let j = 0; j<10; j++){
//         console.log(`inner loop value ,${j} and outer loop value ,${i}`);

//     }
//    //  console.log(`inner loop value ${j}`)
// }


   // ****Assignment 01 . print table form 0 to 10


// for(let i = 0; i<=10; i++){
//     console.log(`Table of ${i} is :`);
//     for(let j = 0; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }

// }

let myArray = ["flash","superman","batman"]
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
}


// ******** break and continue ********


// for (let index = 1; index < 10; index++) {
//    if (index==5) {
//       console.log("hello");
//       continue;
      
//    }
//    console.log(index);
   
// }
for (let index = 1; index < 10; index++) {
   if (index==5) {
      console.log("detected");
      break;
      
   }
   console.log(index);
   
}






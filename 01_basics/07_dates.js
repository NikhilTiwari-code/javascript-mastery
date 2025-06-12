//Dates 


// let myDate = new Date(); 
// console.log( myDate);
// console.log(Date.now());  //returns the current date in milliseconds.



//Date Methods
let myDate = new Date(); 
// console.log( myDate);
// console.log(myDate.getTime());  //returns the current date in milliseconds.
// console.log(myDate.getFullYear());  //returns the current year.
// console.log(myDate.getDay());  //returns the current day.
// console.log(myDate.getMinutes());  //returns the current minutes.
// console.log(myDate.getHours());  //returns the current hours.
// console.log(myDate.getSeconds());  //returns the current seconds.
// console.log(myDate.getMilliseconds());  //returns the current milliseconds.
// console.log(myDate.getMonth());  //returns the current month.
// console.log(myDate.getDate());  //returns the current date.


//    Setting the date
myDate.setDate(5);
myDate.setMonth(5);
myDate.setFullYear(2023);
myDate.setHours(5);
myDate.setMinutes(5);
myDate.setSeconds(5);

// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());


//date creation

//let myCreatedDate = new Date('2025-01-12');
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date(2025,0,12,5,18);

//console.log(myCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()/(1000))); 


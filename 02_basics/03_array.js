
 // some behind the scene of array

 // Array.from syntax => Array.from(arrayLike[, mapFn[, thisArg]])


//  print the array of 5 elements using Array.from from 0 to 4
console.log(Array.from({length:5},function(v,i){
    console.log(v,i);
    return i;
     }));


// Create an array-like object with custom values
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', length: 5 };

// Create an array from the array-like objectc
console.log(Array.from(arrayLike, function(v, i) {
    console.log(`Value: ${v}, Index: ${i}`);
    return v; // Set the value of each element to the corresponding value in the array-like object
}));     
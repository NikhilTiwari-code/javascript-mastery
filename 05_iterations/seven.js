// loops chaining

const myArray = [1,2,3,4,5,6,7,8,9,10]

const newNums = myArray
                  .map((item) => item * 2)
                  .map((item) => item + 1)
                  .filter((item) => item > 5)

console.log(newNums);

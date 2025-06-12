// reduce method

const myArray = [1,2,3,4,5,6,7,8,9,10]

const total = myArray.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc * currval
},1)

// console.log(total);

const shoppingCart  = [
{
    itemName :"glass",
    price :2999

},
{
    itemName:"bottle",
    price :1999,
},
{
    itemName:"mug",
    price :2000,
}

 
] 


const priceTotal = shoppingCart.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval.price}`);
    return acc + currval.price
},0)
console.log(priceTotal);
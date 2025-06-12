// for Each


const coading = ["javascript","php","typescript"]

//const coadingValues =coading.forEach((val) =>console.log(val))

//console.log(coadingValues)// undefined because forEach is not returning anything

coading.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
})


const myCoading = [{
    name:"javascript",
    type:"js"
},
{
    name:"php",
    type:"scripting"
},
{
    name:"typescript",
    type:"ts"
}]

myCoading.forEach((item , index)=>{
    console.log(item,index);
    const myCoadingType = item.type;
    console.log(myCoadingType);
})
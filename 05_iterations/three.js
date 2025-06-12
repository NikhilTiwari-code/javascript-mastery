// for of 

const array = [1,2,3,4,5];

for (const element of array) {
    //console.log(element);

    
}

const greeting = "hello";

for (const caharacter of greeting) {
   // console.log(`texts of greeting ${caharacter}`);
    
}

// Maps


const map = new Map(); // store key value unique pair

map.set("IN", "India");
map.set("US", "United States"); 
map.set("FR", "France");
map.set("IN", "India");

console.log( typeof map);
console.log(map.get("IN"));

for (const [key,value] of map) {
    console.log(key,value);

}

const myObject = {
    name: "Nikhil",
    age: 20
}
for (const [key,value] of Object) {
    console.log(key,value);    // not working for object
    
}





    




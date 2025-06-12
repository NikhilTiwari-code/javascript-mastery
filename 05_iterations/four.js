const myObject = {
    js:"javascript",
    php:"php",
    ts :"typescript",

 }

for (const key in myObject) {
        //console.log(key);
        //console.log(myObject[key]);
        
    }

const programming = ["javascript","php","typescript"]    //array iterating 
 
 for (const key in programming) {
        //console.log(key);
        //console.log(programming[key]);
 }

 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {  // not working for map
    // console.log(key);
    // console.log(map[key]);
}
 
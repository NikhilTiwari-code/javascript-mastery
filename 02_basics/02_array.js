const marvel_heroes = ["thor","ironman","spiderman"]

const dc_heroes = [ "superman","flash","batman"]

const allHeroes = marvel_heroes.concat(dc_heroes)

const allHeroes2 = [...marvel_heroes,...dc_heroes]

// spread operator used to add arrays

const anotherArray = [1,2,3,[4,[5,6,8]]]
//console.log(anotherArray.flat(Infinity))

const newMarvelHeroes = (marvel_heroes.join())//converts array to string

console.log(Array.isArray("nikhil"))
console.log(Array.from("nikhil"))
console.log(Array.from({name:"nikhil"}))  // returns empty array  because .from can only convert array like
                                            //  iterable  objects
                                               

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))










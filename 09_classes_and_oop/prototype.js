// making object method and adding in the prototypes

const name = "     nikhil";
//console.log(name.trim().length);

// can we make property .truelength in the prototype? 
// that returns the true length of the string

// yes we can
 String.prototype.trueLength = function() {
    console.log(`${this}`); 
    console.log(`True length is: ${this.trim().length}`);
}
console.log(name.trueLength());
//console.log(methodAdder);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling", 
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}   
//console.log(heroPower.getSpiderPower());

Object.prototype.chai = function() {
    console.log( `i love chai`);
    
}

// myHeros.chai();
// heroPower.chai();

Array.prototype.secondValue = function() {
    console.log(this[1]);
}

//myHeros.secondValue();
//heroPower.secondValue();




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


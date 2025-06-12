// Math.PI is a built-in constant in JavaScript that represents the value of π (pi)
// Math is not a constructor, you don’t create an instance of Math. Instead, its properties and methods are directly accessible.




//console.log(Math.PI); // 3.141592653589793

Math.PI = 3.0; // This will not work, Math.PI is read-only

//console.log(Math.PI); // 3.141592653589793

// we can check if ithe value is read only or not

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


const chai = {
        name: 'ginger chai',
        price: 250,
        isAvailable: true,
    
        orderChai: function(){
            console.log("chai nhi bni");
        }
    }
    
    console.log(Object.getOwnPropertyDescriptor(chai, "name"));
    
    Object.defineProperty(chai, 'name', {
        writable: false,
        enumerable: true,
        
    })
    
    console.log(Object.getOwnPropertyDescriptor(chai, "name"));
    
    for (let [key, value] of Object.entries(chai)) {
        if (typeof value !== 'function') {
            
            console.log(`${key} : ${value}`);
        }
       // console.log(`${key} : ${value}`);   
    }

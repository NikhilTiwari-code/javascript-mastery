const tinderUser = {}

tinderUser.id = "123a";
tinderUser.name = "jai";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const jsUser = {
    emial:"jsuser@google.com",
    fullname:{
        userFullName:{
            firstName:"jai",
            lastName:"ho"
        },
    }
}

//console.log(jsUser["fullname"]["userFullName"]);

// joining multiple objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}


//const obj3 = Object.assign( {},obj1,obj2)  //   ***if the properties are same then it will override
const obj3 = {...obj1,...obj2}

//console.log(obj3)


const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))  // return array of keys
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // return array of key value pair

// console.log(Object.hasOwnProperty("isLoggedIn"))


const course = {
    coursername :"js mastery",
    price :"9999",
    coursInstructor :"Hitesh sir",
}

// de-structuring of object

// course.coursInstructor 

const {coursInstructor} = course
console.log(coursInstructor);



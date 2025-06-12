function SetUsername(username){
    //complex DB calls
    // complex calculations
    
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// call method => current execution context kisi function ko  pass kar deta hain.
// .call => function ke refence hold kar ke rakthta hai
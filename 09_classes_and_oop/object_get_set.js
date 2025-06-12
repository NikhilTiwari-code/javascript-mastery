const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// factory function => Object.create , or Object.assign

const tea = Object.create(User)  
console.log(tea.email);


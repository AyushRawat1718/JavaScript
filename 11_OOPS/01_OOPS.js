//An example of object, which contains some properties and functions.
const user = {
    username : "Ayush",
    loginCount : 7,
    signedIn : true,
    
    
    getUserDetails : () =>{
        console.log(`User Data has been fetched from database`);
    },

    // this -> Refers to the current context.
    // Note => Whenever using `this` try to avoid using arrow functions.
    getUserDetails2 : function(){
        console.log(`Username: ${this.username}, Signed In: ${this.signedIn}`);
    }
}

console.log(user["username"]);
user.getUserDetails();
user.getUserDetails2();

// If we use 'this' globally then here the global context is an 'empty object' in our case, but when we us 'this' in browser, then the global object is the 'window object'
console.log(this);


const User1 = {
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

// Now let's assume we have to create several more users having same properties and methods, in that case we would use a constructor function

// In that case we would create a function (Constructor), that will be like a blueprint of the object, which would take some arguments as input and will create the desired object.

// So we can say that `Constructor` is just a function which by using which we could create multiple objects of a particular type

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.getUserDetails_1 = () =>{
        console.log(`User Data has been fetched from the database`);
    }

    this.getUserDetails_2 = function() {
        console.log(`Username -> ${this.username}, Login Status -> ${this.isLoggedIn}`);
    }

    // return this // By this we are returning the reference of the object, well actually this would be returned implictilly.
}

const userOne = new User("Ayush Rawat", 14, true); //Here we are creating a new user called 'userOne' of type 'User'
const userTwo = new User("Ayush ", 20, false);
console.log(userOne);
console.log(userTwo);
userOne.getUserDetails_1();
userTwo.getUserDetails_1();


console.log(userOne.constructor); //This would give us the class Name of the object

//Example
let a = 5
console.log(a.constructor);



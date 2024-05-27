//Using Symbol(Side topic)
const mySymbol = Symbol(":)")

const jsUser = {
    name : "Ayush", //Behind the scene the key are stored as string(wherever applicable)
    age : 21,
    location : "Ghaziabad",
    email : "ayushrawat@google.com",
    isLoggedIn : true,
    LastLoggedInDays : ["Monday", "Tuesday", "Friday"],
    [mySymbol] : "key1" //This is the ways to use symbol as a key
}

//Accessing the values of the object    
console.log(jsUser.email) //Normal Way, might fail sometimes
console.log(jsUser["email"]) //Prefferd Way, always works
console.log(jsUser[mySymbol]);

//Updating the values
jsUser["email"]= "ayushrawat1718@google.com"
console.log(jsUser["email"]);

//Adding new key-value pairs in object
jsUser["username"] = "random123"; 

//Locking an object -> Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

//Note -> Once the object is frozen, it can't be unfreezed
// Object.freeze(jsUser)
jsUser["email"] = "ayushrawat6969@google.com" //This change would not work.
console.log(jsUser);

//Adding functions in the object
jsUser.greeting_1 = function(){
    console.log("Hello Js User!!");
}

jsUser.greeting_2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting_1());
console.log(jsUser.greeting_2());

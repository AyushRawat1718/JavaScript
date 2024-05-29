//this keyword -> Refers to the current context/object
const user = {
    username : "Ayush Rawat",
    age : 21,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to the platform`);

        console.log(this) //This will print the current context or we can say the current object
    }

}

user.welcomeMessage();
user["username"] = "Ayush Bro"
user.welcomeMessage()

/*
IMP Concept 

> When we execute 'console.log(this)' using Node.js, at the top level of your script(outside any functions). Then 'this' refers to the global object which is by default empty => So output will be an empty object .

>When we execute 'console.log(this)' using the browser console, then this refers to the window object i.e the global object of the browser => So output will be like this 'Window {name: "", location: Location, history: History, ...}
'
*/

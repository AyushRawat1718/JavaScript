//Syntax of Regular Function
const addNumbers = function(num1, num2) {
    return (num1+num2)
}
console.log(addNumbers(4,5))

//Syntax of "Arrow Functions"

/*

function_name = (parameters) => {
    function_body
}

*/

const addNumbers_1 = (num1, num2) => {
    return (num1+num2)
}
console.log(addNumbers_1(4,5))

/*
> When we only have one line of function_code and we have to return, then we can do it like this.
> Remember : Here no 'return' keyword and instead of curly braces '{}' we would use parenthesis '()'
> This is called implicit return i.e function is returning itself without the return keyword, Normally we use explicit return i.e. we have
to user return keyword to return the values.

> JUST REMEMBER -> Whenever we have opened a scope in a function then we have to explicitly provide the 'return keyword'
*/
const addNumbers_2 = (num1, num2) => (num1 + num2)
console.log(addNumbers_2(4,5))

//Returning object
const func = () => ({name : "Ayush", age : 21})
console.log(func())

//In case of only one parameter
const addNumbers_3 = num1 => (num1+10)
console.log(addNumbers_3(4))

//-----------------------------------------------------------------------------------------

//Concept of Lexical Scoping

//In regular functions, we get to know that 'this' refers to the Node.js environmnet object
const func_1 = function(){
    const username = "Ayush"
    console.log(this)
    console.log(this.username) //Output -> Undefined
}
// func_1() 

//In case of arrow functions, 'this' inherits the value from the parent, In below cases the lexical parent of these functions is the global object of Node.js Environment
const func_2 = () => {
    const username = "Ayush"
    console.log(this)
    console.log(this.username) //Output -> Undefined
}
// func_2()

const user = {
    name : "Ayush",
    age : 21,
    email : "ayushrawat@google.com",

    greet : () => `User Logged In\nDetails of the user ->\nName : ${this.name}, Email id : ${this.email}`,

    check_this : () => {
        console.log(this)
    }
}

console.log(user.greet())
user.check_this()

//Remember -> In cases where you have to use 'this' keyword avoid using arrow functions

function func(){
    console.log("Ayush");
}

const ref = func //Here variable 'ref' is just the reference of the function 'func' i.e just pointing to the function

func() //Executing the function

function addTwoNumbers_1(num1, num2){
    console.log(num1+num2);
}

addTwoNumbers_1() // Output -> NaN i.e Not a Number
const result_1 = addTwoNumbers_1(4,5) //Here variable 'result' will store 'undefined'; b/c we haven't defined what the function has to returned 
console.log(`Result -> ${result_1}`) 

function addTwoNumbers_2(num1, num2){
    return num1 + num2;
}

const result_2 = addTwoNumbers_2(4,5)
console.log(`Result -> ${result_2}`) 

//Recall Basics -> No code is executed inside the function after return statement

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush123"))
console.log(loginUserMessage()) //Remember whenever we don't provide the argument, then 'undefined' is passed as the argument

function loginUserMessage_1(username){
    if (!username){ //Undefined is treated as false value just like empty string ("")
        console.log("Please enter a Username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage_1())

//Concept of default values in function
function loginUserMessage_2(username = "default user"){
    return `${username} just logged in`
}

console.log(loginUserMessage_2());

// Remember the execution call stack concept, that at starting there is global context, which by default in case of node environment is the an empty object while in case of browser is a window object.

// So whenver we create a function and use 'this' keyword in that, then there 'this' refers to the current execution context, but what would happen if some part of that function is outsourced (i.e done by some other function) then if we use 'this' in another function, then logically it should should refer to the context of the parent function, b/c if the second function (another one) performs some task then after the execution its execution context would be removed and the task would be still not performed.

// In that case we use 'call' keyword with the original function, and in the parameters we provide an optional argument(in starting), that is 'this'. Which means we are passing the current context with the function. So the second function(another one) would perform on the given context.

// Finally we can say that 'call' keyword helps us passing the current execution context to another function.

function setUserName(username){ 
    //Performing some tasks
    this.username = username;
    console.log("setUsername function called !!");
    
}

function creatUser(username, password, email){
    
    // setUserName(username); //Not passing the current context

    setUserName.call(this, username); //Passing the current context

    this.password = password;
    this.email = email;
}

const user = new creatUser("Ayush123", "tempSecured001", "random@google.com");
console.log(user);

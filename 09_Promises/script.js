/*
In JavaScript, promises are 'objects' that represent the eventual completion (or failure) of an 'asynchronous operation' and its resulting value. 

# Promise States: A promise can be in one of three states:
1) Pending: The initial state, indicating the operation hasn't finished yet.
2) Fulfilled: The operation succeeded, and the promise holds the resulting value.
3) Rejected: The operation failed, and the promise holds the error reason.

# Creating a new Promise object, For understanding assume that, a promise has a task to do(mostly it is a async task, so there are chances that the task would either complete successfully or unsuccessfully) and that task is passed as a callback function in the parameter, if that task is completed then we would call a 'resolve()' function and if the task is failed then we would call the 'reject()' function. That's the reason we pass two parameters resolve and reject as a parameter to the callback function of the promise.
   
    > resolve: A function to call when the task is completed successfully. It takes the resulting value (or data) as a parameter.
    > reject: A function to call if the task encounters an error. It takes the error reason (or object) as a parameter.
*/


const promiseOne = new Promise((resolve, reject) => {
    //Performing an async task like Database Calls, Network Calls etc.

    setTimeout(() => {
        console.log('Async task 1 is completed')
        //As our async task is completed, then we have to call the resolve function. It is just like an indicator that promise is completed successfully. Now we have to move the task to the call stack, for execution
        resolve()
    }, 1000);
}) 

//then() is a function that is called on a promise, it gets executed automatically when the promise is completed successfully or we can say whenever the resolve function in the promise is called then the 'then()' function is called. then() takes a callback function which gets executed when the promise successfully resolves (completes).

promiseOne.then(() => {
    console.log("Promise consumed !!")
})

new Promise( (resolve, reject) => {
    setTimeout( () =>{
        console.log("Aync task 2 completed")
        resolve() //
    }, 3000)
}).then(() => {
    console.log('Async 2 resolved successfully !!!')

})

const promiseTwo = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //Performing an async task or whatever
        //In most of the cases when our task would be completed we would passing some data. That we can pass via the resolve() function 
        console.log("Data fetched successfully !!")
        resolve({
            name : "Ayush Rawat",
            email_id : "ayush@google.com"
        })
    }, 5000)
})

promiseTwo.then((user) => {
    console.log(`Name of the user is -> ${user.name} and email id is -> ${user.email_id}`)
})

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error){
            //When the task is completed without any error
            resolve({
                username : "Ayush Rawat",
                logged_in : true
            })
        }else{
            //When the task is not completed without any error
            reject("ERROR : Something went wrong")
        }
    },7000)
})

//Chaining of the functions.
promiseThree.then((user) => {
    console.log(`Complete details of the user -> ${user}`)
    return (user.username) //This would be returned to the next then() function, similarly we can do for the catch() function
})
.then((userName) => {
    console.log(`Extracted username -> ${userName}`)
    return (`Promise Three Completed Sucessfully`)
})
.then((Message) => {
    console.log(Message)
})
.catch((error) => {
    console.log(`Error Message => ${error}`)
})
.finally(() =>{
    //This function will 'always' execute, either the function is resolved or rejected
    console.log('The promise is either resolved or rejected')
})

/*
Concept of async/await
In cases where we want to move forward only after a required task is completed or a required promise is completed and we want the application still responsive at the moment, in such cases we declare our function as async, and then use await keyword for waiting. By doing so we would be waiting for our required task, while not blocking the other functionalties

    >Async:  Lets a function handle asynchronous tasks (like waiting for data) without blocking the main program.

    >Await:  Pauses an async function until the awaited task finishes, then lets the function continue with the result.
*/

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let noError = true;
        if (noError){
            resolve({
                Task_id : "JS123",
                status : "Completed",
                validator : "Admin_056"
            })
        }
        else{
            reject("ERROR: Some random error 123")
        }
    },9000)
})

/*
Here if the promise is completed successfully i.e. promise is resolved then the try block would execute else the catch block would execute

NOTE -
> .then()/.catch(): Like giving instructions one after another, with separate notes for handling mistakes.
> async/await: Like following a recipe step-by-step, pausing at specific points until something is done before continuing.
*/

// async function consumePomiseFour(){
//     //Regular function syntax
// }

const consumePomiseFour = async() =>{
    try {
        const response = await promiseFour //Waiting till the promiseFour is not consumed, if the promise gets resolved then we would get the desired response.
        console.log(response)
    } catch (error) {
        console.log(error);   //When the promise is rejected, the flow of code comes to the catch block. 
    }
}

consumePomiseFour()
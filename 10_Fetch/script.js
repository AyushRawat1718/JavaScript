/*
Concept of fetch()

> Function-based: Fetch uses the fetch(url, options) function to initiate a request.
> Promises: It returns a Promise object, allowing asynchronous handling of the response. You can use await (within an async function) or .then() and .catch() to handle success and failure scenarios.
> Flexibility: You can specify various request options like method (GET, POST, etc.), headers, and body for sending data.
*/

const getAllUsers = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //We have used 'await' b/c fetching the data may take time
        const data = await response.json() //we have used the 'await' b/c converting the data to the json format would take time
        console.log(data);
        
    } catch (error) {
        console.log('ERROR')
    }
}

console.log("Data handled using async/await !!");
getAllUsers();



console.log("Data handled using then()/catch() !!");
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    return response.json();
})
.then( (data) =>{
    console.log(data)
})
.catch( (err) =>{
    console.log(err)
})


// Prefer these documentations for concept -> 
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://web.dev/articles/introduction-to-fetch
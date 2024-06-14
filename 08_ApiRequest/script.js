const submit_button = document.querySelector('#submit')
    const userInput = document.querySelector('#github_username')
    const div_userData = document.querySelector('#userData')

    submit_button.addEventListener('click',() => {
        url = `https://api.github.com/users/${userInput.value}`
        fetch_data()
        
    })

    const fetch_data = () => {
    //Creating the XML object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url); //Here we are using the xml object's open() function, that will open an request which is of type 'GET' from a given url.
    xhr.send(); //This will send the request
    /*
    There are states in the complete process of using API's and in this every state has a code & for tracking the status of the API we use these codes

        Value -> State -> Description
        0 -> UNSENT -> Client has been created. open() not called yet.
        1 -> OPENED -> open() has been called.
        2 -> HEADERS_RECEIVED -> send() has been called, and headers and status are available.   
        3 -> LOADING -> Downloading; responseText holds partial data.
        4 -> DONE -> The operation is complete.
    */

    //The 'onreadystatechange' attribute takes a function that is to be executed whenever their is a change in the ready state
    xhr.onreadystatechange = () => {
        console.log(`Current state of the process is ${xhr.readyState}`)

        if (xhr.readyState === 4){
            const user_data = xhr.responseText //This would get us all the data recieved through the api call
            console.log(user_data)
            console.log(typeof user_data) //String -> most of the time the data received via api is in the form of a string
            const converted_data = JSON.parse(user_data);
            console.log(typeof converted_data) //Object -> Now it is usable

            if (!converted_data.name){
                div_userData.innerHTML = `<h2>User Not Found !!<h2>`
            }
            else{
                div_userData.innerHTML = 
                `
                <h3>Info Fetched from the given link => ${url}</h3>
                <div>
                    Username => ${converted_data.name} 
                </div>
                <br>
                <div>
                    User's Avatar
                    <br>  
                    <img src="${converted_data.avatar_url}" alt="User's Avatar" height = "200px">
                </div>
                <br>
                <div>
                    Number of Repositories => ${converted_data.public_repos}
                </div>
                `  
            }
        }
    } 
}

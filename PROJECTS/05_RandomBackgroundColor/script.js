//Basically hex code of the color are of six digits, and they consist of the numbers 0 to 9 and chars A to F

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#"; //starting of the hex code is with a '#'
    for (let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

const start_button = document.querySelector("#start")
const stop_button = document.querySelector("#stop")
const reset_button = document.querySelector("#reset")

let intervalId = null; 

const startChangingColor = () => {
    const changeBG_Color = () =>{
        document.body.style.backgroundColor = randomColor();
    }
    if (!intervalId){
        intervalId = setInterval(changeBG_Color, 1000);
    }
}

const stopChangingColor = () =>{
    clearInterval(intervalId)
    intervalId = null; //clearing the memory, as the variable is not being used for referencing
}

const resetColor = () =>{
    document.body.style.backgroundColor = "#fff"
}

start_button.addEventListener('click',startChangingColor);
stop_button.addEventListener('click',stopChangingColor);
reset_button.addEventListener('click',resetColor);
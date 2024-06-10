const myButtons = document.querySelectorAll(".button")
myButtons.forEach((b) => {
    b.addEventListener("click",(e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            
            case "grey":document.body.style.backgroundColor = e.target.id; 
                break;
            case "white":document.body.style.backgroundColor = e.target.id; 
                break;
            case "blue":document.body.style.backgroundColor = e.target.id; 
                break;
            case "yellow":document.body.style.backgroundColor = e.target.id; 
                break;
            default:
                break;
        }
    })
})

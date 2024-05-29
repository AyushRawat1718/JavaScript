//Most of the times there are some functions which we want to be executed immediately

//Syntax of normal functions

//These functions must be called for execution
const regular_1 = function(){
    console.log("Regular_1 function executed");
}

const arrow_1 = () => {
    console.log("Arrow_1 function executed");
}

//Syntax of IIFE

//Most Important thing about these functions is that, they start execution immediately but for ending the execution we must provide a semicolon';' after the function call.

(function(){
    console.log("IIFE Regular function executed");
})();


(function regular_2(){
    console.log("IIFE Regular_2 function executed")
})();

( () => {
    console.log("IIFE arrow function executed")
})();

(arrow_2 = () => {
    console.log("IIFE arrow_2 function execeuted")
})();

//We could also provide the arguments

( (admin_id) => {
    console.log(`Process initiated with given Admin Id : ${admin_id}`)
})("Ayush123");

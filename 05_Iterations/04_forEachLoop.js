// 'forEach' Loop -> These loop are the in built functions of the many iterable objects, which take a callback function as an argument -> which don't have a name and in every iteration this callback function gets the element of the iterable object

const code_lang = ["js", "cpp", "java", "python", "ruby", "swift"];

//Using regular function syntax
code_lang.forEach(function (val){
    console.log(val)
})

//Using arrow function syntax
code_lang.forEach((val) => console.log(val))

//Using pre-defined function as a callback function
function printMe(val){
    console.log(val);
}

//Here we just pass the reference of the function, not the execution
code_lang.forEach(printMe)


// Actually the forEach function provides three arguments to the callback function i.e. iterable values, index of the iterable vale, the actual iterable object

code_lang.forEach((item, index, code_lang) => {
    console.log(`In the array -> ${code_lang}, value at index ${index} is ${item}`)
})
const num_1 = 100 //Here it assumes that given value is number 
console.log(num_1);

//Creating via object
const num_2 = new Number(200.1231456) // Here it is fixed that given value is number
console.log(num_2);

//Using various functions of Number

console.log(num_1.toString()) //Now it is converted to string, now we can also use string functions on this

console.log(num_2.toFixed(3)); //By this we could fix the number of decimal places. Remember this will return a string

const num_3 = 1000000000000000
console.log(num_3.toLocaleString()) // Converts the given number according to Indian Number system (By default)
console.log(num_3.toLocaleString("en-US")) //For Different Number System

//---------------------------------------------------MATH---------------------------------------------------
//Math is an object which contains lot of functions and properties, it can't be a type of variable

console.log(Math) //This will return an object containing all the properties and functions of the MATH
/*
console.log(Math.PI)
console.log(Math.round(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.min(1,2,5,4,6,-6))
console.log(Math.max(1,2,5,4,6,-6))
*/

//Using Math.random
console.log(Math.random()); //Returns a random number between 0 & 1

// Task - > Create a variable that will have the random values in the between 10 & 20 (both inclusive)

const res_1 = Math.random()*10
const res_2 = Math.floor(Math.random()*10)
const res_3 = (Math.floor(Math.random()*10) + 1) // Will return random number in between 1 and 10 (both inclusive)
console.log(res_3)

//Now main task
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min); //Samjho
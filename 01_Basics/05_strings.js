const name  = "Ayush Rawat"
const age = 21

console.log("Hello my name is "+name+" and my age is "+age); //Old Syntax
console.log(`Hello my name is ${name} and my age is ${age}`); //New and Preferred Syntax

//Creating string using constructor
const gameName = new String("Hunter1718") // By creating strings like that, we get many string manipulation functions called 'prototype'

console.log(gameName[0]) //Accessing via index

console.log(gameName.__proto__) //This will return an object containing all the prototype of the referenced object

// console.log(gameName.toUpperCase())

const str_1 = new String("Ayush/Rawat/1718")
console.log(str_1.split("/")); //Most usefull !!

//Note -> For creating substring there are two functions 'substring' and 'slice' both have different usecase and features.

const temp_url = new String("https://ayushrawat.com/ayush%20rawat") //Remember -> Spaces are not allowed in URL they are replaced with '%20' 
console.log(temp_url.replace("%20","-"))


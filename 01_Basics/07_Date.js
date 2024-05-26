let myDate = new Date(); //This will get us the current date & time 
console.log(myDate)
//Some of the usefull formats of the date
console.log(myDate.toLocaleDateString()) 
console.log(myDate.toDateString())

console.log(typeof myDate) //As we can see this is an 'object'

//Creating a customized Date
let myCreatedDate_1 = new Date(2024, 0, 23) //Year,Month,Date (Month starts from 0; i.e. 0 -> January)
console.log(myCreatedDate_1.toDateString())

let myCreatedDate_2 = new Date(2024, 0, 23, 17, 1, 0) //More Specified Date
console.log(myCreatedDate_2.toLocaleTimeString())

let myCreatedDate_3 = new Date("06-22-2024") //This is the MM-DD-YYYY format
console.log(myCreatedDate_3.toDateString());

//----------------------------For Time-------------------------------------------

let myTimeStamp = Date.now(); //Returns the number of milliseconds elapsed since midnight, January 1, 1970 
//Use this for the current time
console.log(myTimeStamp);

//Use this for customized time
console.log(myCreatedDate_2.getTime()); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

//This can be used when we have to compare between two time stamps .
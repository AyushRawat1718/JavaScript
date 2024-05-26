// Basically we use two keywords while declaring the variable (to assign memory to the data) i.e const and let, var

const User = "Ayush" //Not Modifiable
let email_1 = "ayush@google.com" //Modifiable
var email_2 = "rawat@google.com" //Modifiable
city = "Delhi" //Modifiable but not preferred


// User = "Ayush Rawat" //Not Allowed
email_1 = "a@google.com" //Allowed
email_2 = "r@google.com" //Allowed
city = "Bengaluru"

console.log(User) 
console.table([User, email_1, email_2, city]) //Used for printing the data in tabular form 

let contactNumber
console.log(contactNumber)

/*
Important Point
> Prefer not to use var keyword, b/c it have issues in the block scope and function scope
> Here semicolons are optional
> Variables which are only declared but not initiallised with a value, they contain by default value as 'undefined'.
*/



//Comparison Operators : < ; > ; <= ; >= ; == ; != ; ===
// Triple Equal operator checks for the value and data type

//if-else
if (2 === "2"){
    console.log("Not Expected")
}else{
    console.log("Executed")

}

const balance = 1000
if (balance > 500) console.log("Checked_1") //Use for one liner code

//We can also do this for multi line also using commas(,) (BUT NOT-RECOMMENDED)
const balance_2 = 1000
if (balance > 750) console.log("Checked_2"),
console.log("Checked_3"),
console.log("Checked_4");

//if-else if-else
const value = 45

if (value < 500) console.log("Less than 500");
else if (value < 750) console.log("Greater than or equal to 500 but less than 750");
else if (value < 1000) console.log("Greater than or equal to 750 but less than 1000");
else console.log("Greater than or equal to 1000");

//Logical Operator : && ; || ; ~

const loggedInFromEmail = true;
const loggedInFromGoogle = true;

if (loggedInFromEmail || loggedInFromGoogle) console.log("Access Granted by Admin 1")
else console.log("Access Denied by Admin 1")

const validID = true;
const validDept = false;

if (validID && validDept) console.log("Access Granted by Admin 2")
else console.log("Access Denied by Admin 2")

//Ternary Operator
//Syntax -> (condition) ? true_statement : false_statement

const shoePrice = 2000;

(shoePrice <= 1000)? console.log("Less than or Equal to 1000") : console.log("More than 1000")

// Special Operator -> Nullish Coaslescing Operator (??)

/*
Here's how it works:

> The operator checks the value on its left side.
> If the left side is null or undefined, it returns the value on the right side.
> If the left side is any other value (including 0, "", false), it returns the left side value itself.
*/

let name = "Alice";
let userName = name ?? "Guest"; // userName will be "Alice"
console.log(`UserName -> ${userName}`);

let age = null;
let userAge = age ?? 25; // defaultAge will be 25
console.log(`UserAge -> ${userAge}`);
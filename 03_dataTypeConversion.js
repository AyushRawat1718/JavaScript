/* For converting the Data Types to other Data Types, we have class functions for each data types
Ex. Converting into Number  => Number(var_name)
    Converting into String => String(var_name)
    Converting into Boolean => Boolean(var_name)
*/

let someNumber_1 = "33" 
let someNumber_2 = "abc" 
let someNumber_3 = ""
let someNumber_4 = true
let someNumber_5 = null
let someNumber_6 = undefined

let Number_1 = Number(someNumber_1) // Conversion Possible
let Number_2 = Number(someNumber_2) // Conversion Not Possible, in such cases it will have value as 'NaN' i.e. Not A Number.
let Number_3 = Number(someNumber_3) // For Empty string it will return 0
let Number_4 = Number(someNumber_4) // For boolean true => 1, boolean false => 0
let Number_5 = Number(someNumber_5) // For Null it will return 0
let Number_6 = Number(someNumber_6) // For undefined also it will return NaN

console.table([Number_1, Number_2, Number_3, Number_4, Number_5, Number_6])
console.table([typeof(Number_1), typeof(Number_1), typeof(Number_2), typeof(Number_3), typeof(Number_4), typeof(Number_5), typeof(Number_6)]) //After conversion type will be changed

let someBool_1 = -5
let someBool_2 = 0
let someBool_3 = ""
let someBool_4 = "random"

let Bool_1 = Boolean(someBool_1) // Non - Zero Numbers returns true
let Bool_2 = Boolean(someBool_2) // Zero Number returns false
let Bool_3 = Boolean(someBool_3) // Empty string returns false
let Bool_4 = Boolean(someBool_4) // Non - Empty strign returns true

console.table([Bool_1, Bool_2, Bool_3, Bool_4])

//Cover Lecture 6 to 9
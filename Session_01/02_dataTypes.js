// Unlike Java/C++ it is not required to specify the data type of the variable while declaring, in this we only have to specify that whether the data is constant or vairable.

let var_1 = "Ayush"
let var_2 = 12
let var_3 = true
let var_4 = null
let var_5

console.table([var_1, var_2, var_3, var_4, var_5])

// When the value of a variable is not initiallised or assigned, it have the default value as 'undefined'. But when we want to represent that variable is empty/void then we use null. Null is a standalone value represnting that given variable is void.

//We use a function 'typeof (var_name)' or 'typeof (value)', to get the data type of variable/value

console.log(typeof (var_1))
console.log(typeof (var_2))
console.log(typeof (var_3))
console.log(typeof (var_4)) //For null, its type is object
console.log(typeof (var_5)) //For undefined, its type is undefined
//When we don't know the exact number of arguments then we use rest(...) operator in parameter

function calculateCartPrice_1(num1) {
    return num1
}

console.log(calculateCartPrice_1(100,200,300)) //Here num1 will only store 100

function calculateCartPrice_2(...num1){
    return num1
}
//In the above function num1 will behave as an array and will store all the incoming arguments as the elements of the array
console.log(calculateCartPrice_2(100,200,300))

function calculateCartPrice_3(num1, num2, ...num3){
    console.log(`Num1 stores -> ${num1}, Num2 stores -> ${num2}, Num3 stores -> ${num3}`);

    console.log(`Type of Num1 -> ${typeof num1}, Type of Num2 -> ${typeof num2}, Type of Num3 -> ${typeof num3}`)
}
calculateCartPrice_3(100,200,300,400,500,600,700)

//Passing objects as an argument
function getUserDetails(object){
    console.log(`Name of the user is ${object["name"]} and age of the user is ${object["age"]}`)
}
const user123 = {
    name : "Ayush",
    age : "21"
}
getUserDetails(user123)
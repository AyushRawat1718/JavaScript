// Reduce Operation -> . It iterates through the array and accumulates a single value based on a function you provide. 

//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

const arr = [1,2,3,4,5,6,7,8,9,10]

const myTotal = arr.reduce(function (accumulator, currval){
    return accumulator+currval
},0)

// Here accumulator stores the sum of prevous numbers, and it is intialized with the value provided outside the function scope. After each iteration this callback function returns the sum of accumulator and currval, and after that accumulator is updated with the value of 'accumulator+currval'

console.log(myTotal)

//Example
const myNums = [1,2,3];
const Total = myNums.reduce((accumulator, currval) => {
    console.log(`Value of accumulator = ${accumulator}, Value of CurrentValue = ${currval}`)
    return accumulator+currval;
},0)

console.log(`Total -> ${Total}`)

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Mobile Development Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, curr) => (curr["price"] + acc),0)

console.log(`Total Price of all the courses : ${priceToPay}`)
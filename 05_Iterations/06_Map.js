// Map Operation -> This function returns all the values of the array after applying the given changes according to the callback function

const arr = [1,2,3,4,5,6,7,8,9,10]

const newNums_1 = arr.map(num => num*10)
console.log(newNums_1)
console.log(arr) //Original array remains unchanged

//Chaining of the Operations -> In case of chaining we follow first come first serve rule i.e. the operation which comes first, is executed first.
const newNums_2 = arr.map(num => num*10).map(num => num+1)
console.log(newNums_2)

//In this first of all we are multiplying all the numbers of the array with 10, then adding 1 to the numbers(modified numbers) after that, we are filtering them on the basis of a given condition
const newNums_3 = arr.map(num => num*10).map(num => num+1).filter(num => num > 50)
console.log(newNums_3)
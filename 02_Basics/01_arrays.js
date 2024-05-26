/*
# JavaScript arrays are resizable and can contain a mix of different data types. 

# They also follows 0-based indexing & we have to use them for accessing the elements of the array

# JavaScript array-copy operations create shallow copies. 

>Shallow Copies : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

>Deep Copies : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
*/

const myArr = [1,2,4,5,"Ayush",true,[4,5,78,3]];

const arr = [1,2,3,4,5,6];

//Array Methods
arr.push(7) //Appends new elements to the end of an array, and returns the new length of the array.

arr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

arr.unshift(0) //Inserts new elements at the start of an array, and returns the new length of the array.

arr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(arr.join('/')) //Adds all the elements of an array into a string, separated by the specified separator string.[By default ','] 

console.log(arr);

//Slice vs Splice
const arr_2 = [0,1,2,3,4,5,6,7,8,9,10]

const myn_arr_1 = arr_2.slice(1, 5)
console.log(`Resultant array of slice operation is -> ${myn_arr_1}, Original array after slice operation is -> ${arr_2}`)

const myn_arr_2 = arr_2.splice(1, 5)
console.log(`Resultant array of splice operation is -> ${myn_arr_2}, Original array after splice operation is -> ${arr_2}`)

// Carefully observe the differences on the resultant array of the operations and also the original array after the operations

//---------------------------------------------------------Part - 2 ----------------------------------------------

const heroes_1 = ["Spiderman", "Thor", "IronMan"]
const heroes_2 = ["Batman", "Superman", "Joker"]

const all_heroes_1 = heroes_1.concat(heroes_2) //This concatenates the given array with the referred array and returns a new array containing all the elements

const all_heroes_2 = [...heroes_1,...heroes_2] //This also concatenates the given arrays. In this we can concatenate as many array as we want

console.log(all_heroes_2);

const new_arr = [1,2,3,4,5,[6,7,8,9],[10,11,12,[13,14,15,16]],17,18,[19,20]] //Here we have array inside an array and so on ....

console.log(new_arr.flat(Infinity)) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. [Use depth as infinity to make it completely flat]

//Some other ways of creating the array

const new_arr_og1 = Array.from("Ayush") //An iterable object to convert to an array. Creates an array from an iterable object

console.log(new_arr_og1)

const new_arr_og2 = Array.from({Name : "Ayush"}) //Where it is not possible to create the array, then it returns an empty array

console.log(new_arr_og2)

let num_1 = 100
let num_2 = 200
let num_3 = 300

const new_arr_og3 = Array.of(num_1, num_2, num_3)//Returns a new array from a set of elements.
console.log(new_arr_og3)

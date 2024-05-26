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


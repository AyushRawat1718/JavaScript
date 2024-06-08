// 'for of' Loop -> This can be used for every iterable object

const arr = [1,2,3,4,5,6,7];

for (const num of arr) {
    console.log(num)
}

const str = "Hello world!";
for (const s of str){
    console.log(`Each char of "Hello world!" -> ${s}`);
}

// Concept of Map -> It is an object which stores the unique key-value pair, in the insertion order of the keys.

// A key in map may only occur once.

const myMap = new Map();

myMap.set("IN","INDIA");
myMap.set("RSA","RUSSIA");
myMap.set("FRA","FRANCE");

// console.log(myMap)

//Here in every iteration, the iterable element stores an array of key and value i.e. [key, value]
for (const key of myMap){ 
    console.log(key); 
}

//Destructuring of the array
for (const [key, value] of myMap){
    console.log(`${key} -> ${value}`)
}

//Trying 'for - of' Loop on object

const myObject = {
    "Game-1" : "SPIDERMAN",
    "Game-2" : "NFS",
    "Game-3" : "GTA",
    "Game-4" : "COC"
}

/*
for (const ob of myObject){
    console.log(ob)
}

This won't work as object is not iterable by 'for of' Loop  

*/

// 'for - in' Loop -> This Loop iterates over the keys of the iterable object

//Using on Array
for (const key in arr) {
    console.log(`For key -> ${key}, Value from the arr is -> ${arr[key]}`)
}

//Using on object
for (const key in myObject){
    console.log(`For key -> ${key}, Value from the myObject is -> ${myObject[key]}`)   
}

// On Map -> 'for-in' Loop won't work, as map are not iterable by for-in Loop
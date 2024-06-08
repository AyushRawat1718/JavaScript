// While Loop

let index = 1;
while (index <= 10) {
    console.log(`Value of current index is ${index}`)
    index += 2; 
}

// Traversing the array 

let myArr = ["Aplha", "Beta", "Gamma", "Delta"];
let arrIndex = 0;

while (arrIndex < myArr.length){
    console.log(`Current Element of Array: ${myArr[arrIndex]}`)
    arrIndex++;
}

//Do While Loop -> This Loop will always execute atleast once

let score_1 = 1;
do {
    console.log(`Current Score is ${score_1}`);
    score_1++;
}while (score_1 <= 10)

let score_2 = 11;
do {
    console.log(`Current Score is ${score_2}`);
    score_2++;
}while (score_2 <= 10) 
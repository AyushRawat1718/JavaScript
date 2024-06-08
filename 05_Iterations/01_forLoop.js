// For Loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);   
}

//Nested For Loop

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`)

    for (let j = 1; j <= 10; j++) {
        console.log(`Outer Loop Value: ${i} and Inner Loop Value: ${j}`)        
    }   
}

for (let i = 1; i<= 10; i++){
    console.log(`Table of ${i}\n`);
    for (let j = 1; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
    console.log("")
}

// Traversing the array 

let myArr = ["Aplha", "Beta", "Gamma", "Delta"];

for (let i=0; i<myArr.length; i++){
    console.log(myArr[i])
}

//Concept of break and continue

// break -> Breaks the loop whenever the given condition satisfies

// continue -> Skips the current iteration whenever the given condition satisfies

for (let i=1; i<=10; i++){
    if (i == 5){
        console.log(`5 Detected, Skipping 5...`);
        continue;
    }
    else if (i==8){
        console.log(`8 Detected, Breaking the Loop...`)
        break;
    }
    else console.log(`Current number is ${i}`)
}
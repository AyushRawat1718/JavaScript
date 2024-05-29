

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a) //This would give error, as a is not accessible outside the scope(This was expected)
console.log(b) //This would give error, as b is not accessible outside the scope(This was expected)
console.log(c) //This would not give error, as c is accessible outside the scope(This was not expected)

// Note -> That's why we should avoid using 'var' keyword



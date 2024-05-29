//truthy values -> Values that are considered to be true value

// true ; "0" ; "false" ; " " ; []  (empty array) ; {} (empty object) ; function(){} (empty function i.e no parameter and no function body)

//falsy values -> Values that are considered to be false value

//false ; 0 ; -0 ; BigInt (0n) ; "" ; null ; undefined ; NaN

const obj = {}
if (obj) {
    console.log("Executed")
}

//How to check whether an object is empty
//Recall -> use 'Object.keys(obj_name)' to get an array of all the keys of the object
if (Object.keys(obj).length == 0){
    console.log("Object is empty")
}

/*
Just Read
> (false == 0) //true
> (false == "") //true
> (0 == "") //true
*/
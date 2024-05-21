const userEmail = "anshuman@ai"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't get email");
}


// falsy value ****************

// false, 0, -0, BigInt 0n, "", null, undefined, NaN (not a number)

// truthy value ****************

// "0", 'false', " ", [], {}, function(){}

// empty array ********************

const array = []
if (array.length === 0) {
    console.log("array is empty");
} 

// empty object ********************

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
} 

// Nullish coalescing operator (??) : null undefined **************

// let val1 = 5 ?? 10
// let val1 = null ?? 10
let val1 = undefined ?? 10 ?? 30

console.log(val1);

// terniary operator *************

// condition ? true : false

const iceTeaPrize = 100
iceTeaPrize <= 80 ? console.log("less then 80") : console.log("more than 80")
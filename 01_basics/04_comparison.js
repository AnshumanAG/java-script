// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// ***********this type of comparsion we need to avoid **********************
// console.log(null > 0);
// console.log(null == 0); //different working
// console.log(null >= 0); // different working

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// === (strictly check)

// console.log("2" === 2);


//****************************************************************************************

// stack (primitive), Heap (non-primitive)
// stack me copy milta hai
// heap me reference milta hai
let myYoutubeName = "anshumanNobbiGaming"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"
// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email : "anshu@gmail.com",
    Upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "nobbi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
function sayMyName(){
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
}
// sayMyName()


// function addTwoValue (number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoValue(3, 4)

function addTwoValue (number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoValue(3, 4)
// console.log("Result:", result);


function loginUserMessage (username = "sam"){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
    // }
    return `${username} just logged in`
}
// console.log(loginUserMessage("anshuman"));
// console.log(loginUserMessage());

function calculateCartPrize (...num1){  // rest operator /spread operator (depend on where we use)
    return num1
}
// console.log(calculateCartPrize(200, 400, 500, 600, 6000));

function calculateCartPrize1 (val1, val2, ...num1){ 
    return num1
}
// console.log(calculateCartPrize1(200, 400, 500, 600, 6000));

const user = {
    username: "anshuman",
    prize: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and prize is ${anyobject.prize}`);
}
// handleObject(user)
// handleObject({
//     username: "anshu",
//     prize: 200
// })


const myNewArray = [200, 400, 500, 700]

function returnSecondValue (getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 700]));
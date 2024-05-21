// if ***********************

// if (true) {
    
// }

// if (false) {
    
// }

// <, >, <=, >=, ==, !=, ===, !==

// if-else **********************

// const marks = 100
// if (marks > 50) {
//     console.log("pass");
// } else {
//     console.log("fail");   
// }

// scope **************************

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
//  console.log(`user power: ${power}`);


// short hand notation **************

// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


// && (or) / || (and) ************************

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user Logged in");
}
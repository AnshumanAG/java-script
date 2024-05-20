// this refers the current context 
// only used in objects not for functions

const user = {
    username: "anshuman",
    prize: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //provide empty currly bresis 
/*
function chai(){
    let username = "anshuman"
    console.log(this.username);
}
chai()
*/
/*
const chai = function (){
    let username = "anshuman"
    console.log(this.username);
}
chai()
*/
/***********arrow*************
const chai =  () => {
    let username = "anshuman"
    console.log(this.username);
}
chai()
*/


// now learn arrow function 

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3, 4))

// **********implicit return*****************

// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) =>( {username: "anshuman"})
    
    console.log(addtwo(3, 4))
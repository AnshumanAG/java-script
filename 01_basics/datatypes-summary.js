 // primitive

 // 7 types : string, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 378234682472n


 //Referencce (non-Primitive)

 //Array, Objects, Functions

 const heros = ["shaktiman", "naagraj", "doga"];

 let myobj = {
    name : "anshuman",
    age : 20,
 }

const myFunction = function(){
    console.log("hello world");
} 

console.log(typeof bigNumber);

/* typeof ==
*****primitive*******
undefined = undefined
null = object
boolean = boolean
number = number
string = string
object = object
bigint = bigint

*****non-primitive******
arrays = object
function = function
object = object
*/
// Immediately Invoked Function Expression (IIFE)
// global scope k pollution ko kum krne k liye hum iife use krte hai 
// syntax = ()()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    // unnamed IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // PASSING PARAMETER
    console.log(`DB CONNECTED ${name}`);
})('anshuman')
const accountId = 144553
let accountEmail = "anshuman@gmail.com"
var accountpassword = "12345"
accountCity = "jaipur"  //it is possible but we cant prefer to use this.
let accounttype; //showing underfined

// accountId = 2 //not allowed

accountEmail = "anhu@gmail.com"
accountpassword = "2342"
accountCity = "banglore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountpassword, accountCity, accounttype])
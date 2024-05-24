// for_each loop ************

const coding = ["js", "py", "c++", "rb", "java"]

// coding.forEach( function (val){
//     console.log(val);
// } )


// coding.forEach( (val) => {
//     console.log(val);
// } )


// function printme (item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
console.log(item.languageFileName);
} )
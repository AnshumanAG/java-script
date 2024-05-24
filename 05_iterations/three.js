// for of *******************
 
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
// }


// const greetings = "hello world"

// for (const greet of greetings) {
//     // console.log(`each char is ${greet}`);
// }


// maps ********************

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('FR', "france")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}

// objects ********* (not using forof loop same as uppper side)

const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-" , value);
    
// }
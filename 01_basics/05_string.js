const name = "anshuman"
const repoCount = 50

// console.log(name + repoCount + " value"); (old method)

// console.log(`my name is ${name} and my repository count is ${repoCount}`);

const gameName = new String('anshumanhs')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

// const newStringOne = "   anshuman   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://anshuman.com/anshuman%20agrawal"
console.log(url.replace('%20','-'));
console.log(url.includes('anshuman'));
console.log(url.includes('gamer'));
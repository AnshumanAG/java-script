// const tinderUser = new object () // singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anshuman",
            lastname: "agrawal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2} // cant do this
// const obj3 = Object.assign({}, obj1, obj2, obj4) // less using
const obj3 = {...obj1, ...obj2, ... obj4}
// console.log(obj3);     

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*********************de-structure***************************** */
const course = {
    coursename: "js in hindi",
    prize: 999,
    courseInstructor: "hitesh choudhary"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// ******************JSON****************

// {
//     "name": "anshuman",
//     "coursename": "js in hindi",
//     "prize": 999
// }

[
    {},
    {},
    {},
]
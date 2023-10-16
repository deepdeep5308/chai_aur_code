// // const tinderUser = new Object {}  //created object by literal
// const tinderUser = {}

// tinderUser.id = "1abc"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = false
// //console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname :{
//             firstname: "Ram",
//             lastname: "Kumar"
//         }
//     }
// }
// //console.log(regularUser.fullname.userfullname.firstname)

// const obj1 ={1:'a',2:'b'}
// const obj2 = {3:'a',4:'b'}
// // const obj3 = {...obj1,...obj2}
// const obj3 = Object.assign({},obj1,obj2) 
// console.log(obj3);

const course = {
    coursename: "JS course",
    price: "99",
    courseInstructor: "PW instructor"
}

console.log(course.courseInstructor)
const{courseInstructor} = course
console.log(courseInstructor)

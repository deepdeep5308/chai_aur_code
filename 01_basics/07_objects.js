
const mySym = Symbol ('ddeep5308')

const JsUser = {
    name:"deep",
    [mySym]:"myEmail",
    email:"deep@google.com",
    age:18,
    location:"delhi",
    loggedIn:false,
    loggedInDays:['Monday','Saturday']
}

console.log(JsUser.loggedInDays)
console.log(JsUser['age'])
console.log(JsUser[mySym])

JsUser.email = 'deepak@google.com'
Object.freeze(JsUser)
JsUser.email = "dummy@google.com"
console.log(JsUser);

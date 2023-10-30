// function userLogin (username){
//     if(username===undefined){
//         console.log('Please enter your name')
//     }
//     else{
//     return `${username},just log in`}
// }

// console.log(userLogin())

function cartPrice(val1,val2,...num1){
    return num1
}
// console.log(cartPrice(200,400,2000))

const user = {
    username:"Deep",
    price: 199
}
function forObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

forObject(user)

forObject({
    username: "Sammy",
    price: 499
})


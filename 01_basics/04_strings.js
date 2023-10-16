const name = "deep"
const count = 50

console.log(name + count + " endline");

console.log(`this is my code ${name} lets say it again ${count}`)

const gameName = new String ('deepka name batao')
console.log(gameName.toUpperCase())

const newString = gameName.substring(0,4)
console.log(newString)

const newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deep.com/hitesh%20kumar"
console.log(url.replace('%20','-'))
console.log(url.replace('hitesh','deep'))

console.log(url.includes('kumar2 '))

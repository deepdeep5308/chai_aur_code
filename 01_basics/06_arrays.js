const mr_heros = ['akash','rahul','lakshay'];
const mrs_heroines = ['juhi','kitty','smarty'];
const all_char = mr_heros.concat(mrs_heroines);
console.log(all_char);
const new_char = [...mr_heros, ...mrs_heroines];
console.log(new_char);

const arrayOne = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = arrayOne.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("Deep"))
console.log(Array.from("Deep"))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));

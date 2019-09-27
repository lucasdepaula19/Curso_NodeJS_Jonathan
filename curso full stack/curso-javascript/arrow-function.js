let sum = (a,b) => a + b
let hello = name => `hello ${name}`

console.log(sum(1,2))
console.log(hello("Jonathan"))

let v = [3,1,2,4]



v.forEach(value => console.log(value))

let p = v.filter(n => n % 2 == 0)

console.log(p)

let sorted = v.sort((a,b) => a - b)

console.log(sorted)


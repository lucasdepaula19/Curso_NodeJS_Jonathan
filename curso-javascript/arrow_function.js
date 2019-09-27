let sum = (a,b) => a + b
let hello = name => `hello ${name}`

console.log(sum(1,2))
console.log(hello("Lucas"))

let v = [3,1,2,4]

v.forEach(value => console.log(value))

// Filtrar um vetor
let p = v.filter(v => v % 2 == 0)

console.log(p)

// Ordena um vetor
let sorted = v.sort((a,b) => a - b)
console.log(sorted)

console.log(v)

for(let xpto of v ){
    console.log(xpto)
}
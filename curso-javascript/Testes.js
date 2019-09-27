/*
console.log("Hello Word!!!")

let x = 2
let y = "foo"
let z = true
let v = []
console.log(`valor de x: ${x}`)
console.log(`valor de Y: ` + y)
console.log(`valor do vetor: ${v.length}`)

if(x){
    console.log("x está preenchido")
}

x = null

if(!x){
    console.log("x não está preenchido")
}

let movie1 = {
    name: "Vingadores guerra infinita",
    releaseYear: 2018,
    categories: ['action','Comedy'],

    isOld: function(){
        return this.releaseYear <= 1990
    }
}

console.log(`é antigo: ${movie1.isOld.bind(movie1)()}`)

let movies = []

movies.push(movie1)

for(let movie of movies){
    for(let prop in movie){
        console.log(`${prop}: ${movie[prop]}`)
    }
}
*/

try{
    let n = Math.floor(Math.random() * 2) + 1

    if (n % 2 == 0){
        throw new Error( "número é par" )
    }

    console.log("ok")
}catch (error) {
    console.log(error.message)
}
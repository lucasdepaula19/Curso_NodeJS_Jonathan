let x = 2
let y = `foo`
let z = true
let v = []
console.log(`valor de x: ${x}`)
console.log('valor de y ' + y)
console.log(`tamanho do vetor: ${v.length}`)

if (x) {
    console.log("x está preenchido")
}

x = null

if (!x) {
    console.log("x não está preenchido")
}

let movie1 = {
    name: "Vingadores Guerra Infinita",
    releaseYear: 2018,
    categories: ['Action','Comedy'],
    isOld: function() {
        return this.releaseYear <= 1990
    }
}

console.log(`é antigo: ${movie1.isOld.bind(movie1)()}`)

let movies = []

movies.push(movie1)

for (let movie of movies) {
    for (let prop in movie) {
        console.log(`${prop}: ${movie[prop]}`)
    }
}

function sum(x,y) {
    return x + y
}

console.log(sum(10,20))


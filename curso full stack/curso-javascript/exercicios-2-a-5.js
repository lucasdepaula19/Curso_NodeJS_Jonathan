let v = []

for (let i = 0 ; i < 100; i++) {
    v.push(Math.floor(Math.random() * 100))
}



console.log(v.filter(n => n % 3 == 0 && n % 7 == 0).length)

console.log(v.map(n => Math.pow(n,2) * 2 + 10))

console.log(v.sort((a,b) => b - a)[7])

console.log(v.some(n => n % 13 == 0))
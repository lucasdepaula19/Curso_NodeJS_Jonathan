let v = []

for (let i = 0 ; i < 100; i++) {
    v.push(Math.floor(Math.random() * 100))
}



let sum = v.filter(n => n % 2 == 0).map(n => Math.pow(n,2))
.reduce((acc,cur) => acc + cur ,0)

console.log(sum)

let w = []

for (let n of v) {
    if (n % 2 == 0) {
        w.push(n)
    }
}

for (let i in w) {
    w[i] = Math.pow(w[i],2)
}

sum = 0

for (let n of w) {
    sum += n
}

console.log(sum)
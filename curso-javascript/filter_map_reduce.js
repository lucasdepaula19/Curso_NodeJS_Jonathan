let v = []

for (let i = 0; i < 100; i++) {
    v.push(Math.floor(Math.random() * 10))
    
}

console.log(v.filter(n => n % 2 == 0).map(n => Math.pow(n,2)).reduce((acc,cur) => acc + cur ,0))
let v = []

for (let i = 0; i < 100; i++) {
    v.push(Math.floor(Math.random() * 100))
    
}

console.log('\n' + 'Vetor inicial: ' + v + '\n')

console.log('Exe2: ' + v.filter(n => n % 7 == 0 && n % 3 == 0).length + '\n')

console.log('Exe3: ' + v.map(n => (Math.pow(n,2) * 2 + 10)) + '\n')

console.log('Exe4: ' + v.sort((a,b) => b - a)[7] + '\n')

console.log('Exe5: ' + v.some(n => n % 13 == 0) + '\n')


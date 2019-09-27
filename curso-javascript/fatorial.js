let v = []

for(let i = 2;i<9;i++){
    v.push(i)
}

for (let valor of v) {

    let num = valor
    let n = valor - 1
    let resp = 1

    for (let i = n; i >= 1; i--) {
        
        resp = valor * i
        valor = resp
    }

    console.log(`O fatorial de ${num} é: ${resp}`)
}

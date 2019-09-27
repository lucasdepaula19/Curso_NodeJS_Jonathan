
new Promise((resolve,reject) => {
    let a = 2, b = 4
    let soma = a + b
    resolve(soma)

}).then(resultSoma => console.log(`Resultado: ${resultSoma}`))